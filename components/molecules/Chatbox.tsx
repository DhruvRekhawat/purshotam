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
    success: boolean,
    message: string,
    data?: any[],
    debug:{
        endpoint: string,
        method: string,
        payload: {
          startDate: string,
          endDate: string,
          limit: number,
          page: number
        }
    },
    pagination?: {
        currentPage: number,
        limit: number,
        hasMore: boolean
    }
}

const formSchema = z.object({
    question: z.string().min(1, "Please enter a question"),
})

export default function Chatbox() {
    const {chats, setChat, toggleLoading } = useStore()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>, page = 1, limit = 30) {
        // Only show user message on first page request
        if (page === 1) {
            setChat({
                message: values.question,
                question:values.question,
                type: "User",
                url:"http://65.2.69.184:8000/chat/ask",
            })
        }
        
        toggleLoading(true)
        
        try {
            const res = await fetch('http://65.2.69.184:8000/chat/ask', {
                mode: 'cors',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    "question": values.question
                })
            })
            
            const data: ChatbotResponse = await res.json()
            console.log(data)
            
            toggleLoading(false)
            
            setChat({
                message: data.message,
                data: data.data,
                page: data.pagination?.currentPage,
                type: "AI",
                url:data.debug?.endpoint,
                question: values.question 
            })
            console.log(chats)

            if (page === 1) {
                form.reset()
            }
        } catch (error) {
            toggleLoading(false)
            setChat({
                message: "Sorry, there was an error processing your request. Please try again.",
                type: "AI",
                url:"",
            })
        }
    }

    const handleTablePageChange = async (newPage: number, limit: number) => {
        const currentQuestion = form.getValues().question
        await onSubmit({ question: currentQuestion }, newPage, limit)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => onSubmit(values))} className="w-full space-y-6 flex gap-4 justify-center items-center">
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
                <Button 
                    size={"icon"} 
                    className="bg-blue-600"
                    disabled={form.formState.isSubmitting}
                >
                    <Send className="h-4 w-4 font-light"/>
                </Button>
            </form>
        </Form>
    )
}