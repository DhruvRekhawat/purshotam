"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
  itemName: z.string(),
  width: z.number(),
  thickness: z.number(),
  entryDate:z.string(),
  grade:z.string(),
  make:z.string(),
  category: z.string(),
})

export default function InventorySearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      itemName: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   console.log(data)
  }

  return (
    <Card className="p-4 flex flex-col justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex gap-4 flex-wrap">
        <FormField
          control={form.control}
          name="itemName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Item Name" {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="width"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Width" {...field} />
              </FormControl>
              <FormMessage></FormMessage>

            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="thickness"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Thickness" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="entryDate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Entry Date" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Grade" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="make"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Make" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </Card>
  )
}
