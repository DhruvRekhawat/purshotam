"use client"
import Chatbox from "@/components/molecules/Chatbox"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from "@/stores/layout"
import { ReactNode } from "react"




const Page = () => {
  const {chats,isChatLoading} = useStore()
  console.log(chats)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        {!chats ? ( // Check if chats is empty
            <>
                <h1 className="bg-gradient-to-tr from-blue-900 to-blue-600 text-transparent bg-clip-text leading-loose text-4xl font-extrabold">Third Eye</h1>
                <div className="mt-6 flex flex-col gap-4 text-center">
                    <h2 className="text-zinc-600 text-2xl">How can we <span className="bg-gradient-to-tr from-blue-900 to-blue-400 text-transparent bg-clip-text">assist </span>you today?</h2>
                    <p className="text-zinc-600">
                    Get expert guidance powered by AI agents specializing in <br />
                    Data analytics empowered with all the data of Purshotam Profiles
                    </p>
                </div>
            </>
        ) : (
            // Render messages when chats is not empty
            <div className="w-full h-screen">
             <h1 className="bg-gradient-to-tr from-blue-900 to-blue-400 text-transparent bg-clip-text text-center leading-loose text-2xl font-extrabold">Third Eye</h1>

              <ScrollArea className="h-[80vh] w-full p-8 flex flex-col-reverse gap-8">
              {
                chats.map((message,index) => (
                  <MessageBox message={message.message} type={message.type} data={message.data} key={index} loading={isChatLoading} />
                ))
              }
              {isChatLoading && <LoadingMessage />}
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
  data,
  type,
  loading}:
  {message:string,
  data:any,
  type:"User"|"AI",
  loading:boolean,
}):ReactNode => {
  
    return ( 
      <>
      {
         ( 
          type === "User" ? (
            <Card className="bg-blue-50 justify-end w-fit p-4 m-2">
              {message}
            </Card>
          ) : (
            <Card className="bg-blue-300 justify-start w-fit p-4 m-2">
              {message}
            </Card>
          )
        )
      }
      {data && <Card className="mt-2 p-4"><JsonTable data={data} /></Card>} 
      </>
    )
}



const LoadingMessage = () =>{
  return ( 
    <Card className='flex p-4 justify-start items-baseline gap-2 bg-white dark:invert'>
      <p className='text-blue-600'>Third Eye is thinking</p>
      <div className='h-1 w-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-1 w-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-1 w-1 bg-blue-600 rounded-full animate-bounce'></div>
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




