"use client"
import Chatbox from "@/components/molecules/Chatbox"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from "@/stores/layout"
import { ReactNode } from "react"
import { json } from "stream/consumers"
import { object } from "zod"



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

const JsonTable = ({ data }:{data: any}) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b text-left font-semibold text-gray-600">
                {header.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row:any, rowIndex:number) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4 border-b">
                  {row[header] !== null ? row[header].toString() : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



