"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useStore } from "@/stores/layout"
import { Send } from "lucide-react"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"

type ChatbotResponse = {
    status: string
    response: string
}

 
const formSchema = z.object({
  question: z.string(),
})

function parseJsonData(jsonString:string) {
    try {
      // Remove the "```json" and "```" markers if present
      const cleanedString = jsonString.replace(/^```json\n|\n```$/g, '');
      
      // Parse the JSON string into a JavaScript object
      const data = JSON.parse(cleanedString);
      return data;
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return [];
    }
  }



export default function Chatbox() {

    const {setChat} = useStore()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          question: "",
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {

        setChat({
            message: values.question,
            type:"User"
        })

        const res = await fetch('http://65.2.69.184:8000/chat/ask',{
            mode:'cors',
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify(values)
        })
        const data:ChatbotResponse = await res.json()
        console.log(data)

        // Extract the message and parse the JSON separately
        const message = data.response.split('```json')[0].trim(); // Get the message part
        const jsonStringMatch = data.response.match(/```json\n([\s\S]*?)\n```/);
        const jsonString = jsonStringMatch ? jsonStringMatch[1] : ""; // Extract the JSON part safely
        const tableData = parseJsonData(jsonString); // Parse the JSON string

        setChat({
            message: message, // Store the message separately
            data: tableData,
            type:"AI"
        })

        form.reset()

      }


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 flex gap-4 justify-center items-center">
      <FormField
        control={form.control}
        name="question"
        render={({ field }) => (
          <FormItem className="w-full bg-white">
            <FormControl>
              <Textarea
                placeholder="Ask your queries"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <Button size={"icon"}><Send className="h-4 w-4 font-light"/></Button>
    </form>

  </Form>

      

  )
}
