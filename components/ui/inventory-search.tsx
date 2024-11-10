"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useStore } from "@/stores/layout"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "./card"

const FormSchema = z.object({
  ItemName: z.string().optional(),
  Width: z.string().optional().transform(val => val === "" ? undefined : Number(val)),
  Thickness: z.string().optional().transform(val => val === "" ? undefined : Number(val)),
  EntryDate: z.string().optional(),
  Grade: z.string().optional(),
  Make: z.string().optional(),
  Category: z.string().optional(),
})

export default function InventorySearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  
  const { setSearchBarData } = useStore()
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Clean the data by removing empty strings and undefined values
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => 
        value !== undefined && 
        value !== "" && 
        value !== null
      )
    );
    
    console.log("Sending data:", JSON.stringify(cleanedData))
    
    fetch('http://13.233.157.58:3000/api/para/parameter-wise', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cleanedData)
    })
    .then(response => response.json())
    .then(data => {
      setSearchBarData(data.data)
      console.log("Received data:", data.data)
    })
    .catch(error => {
      console.error("Error:", error)
    })
  }

  return (
    <Card className="p-4 flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 flex-wrap">
          <FormField
            control={form.control}
            name="ItemName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Item Name" 
                    {...field} 
                    onChange={(e) => {
                      field.onChange(e.target.value.trim() || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Width"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="Width" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Thickness"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="number"
                    placeholder="Thickness" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Similar changes for other fields */}
          <FormField
            control={form.control}
            name="EntryDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Entry Date" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.trim() || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Grade"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Grade" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.trim() || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Make"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Make" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.trim() || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Category" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.trim() || undefined)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}