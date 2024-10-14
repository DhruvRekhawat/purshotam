"use client"
import Chatbox from "@/components/molecules/Chatbox"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from "@/stores/layout"
import { ReactNode } from "react"



const Page = () => {
  const {chats} = useStore()
  console.log(chats)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        {!chats ? ( // Check if chats is empty
            <>
                <h1 className="bg-gradient-to-tr from-blue-900 to-blue-600 text-transparent bg-clip-text leading-loose text-4xl font-extrabold">Third Eye</h1>
                <div className="mt-6 flex flex-col gap-4 text-center">
                    <h2 className="text-zinc-600 text-2xl">How can we <span className="bg-gradient-to-tr from-blue-900 to-blue-600 text-transparent bg-clip-text">assist </span>you today?</h2>
                    <p className="text-zinc-600">
                    Get expert guidance powered by AI agents specializing in <br />
                    Data analytics empowered with all the data of Purshotam Profiles
                    </p>
                </div>
            </>
        ) : (
            // Render messages when chats is not empty
            <div className="w-full">
              <ScrollArea className="h-[400px] w-full p-8 fixed bottom-12 flex flex-col gap-8">
              {
                chats.map((message,index) => (
                  <MessageBox message={message.message} type={message.type} key={index} />
                ))
              }
              </ScrollArea>
               </div>
        )}
        <div className="w-[80%] fixed bottom-8">
            <Chatbox></Chatbox>
        </div>
    </div>
  )
}

export default Page



const MessageBox = (
  {message,
  type}:
  {message:string,
  type:"User"|"AI"
}):ReactNode => {
  
    return ( // Added return statement
      type === "User" ?
        <Card className="bg-blue-50 justify-end w-fit p-4 m-2">
          {message}
        </Card> :
        <Card className="bg-blue-300 justify-start w-fit p-4 m-2">
          {message}
        </Card>
    )
}



