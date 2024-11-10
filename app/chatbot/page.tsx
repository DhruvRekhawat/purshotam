"use client"
import Chatbox from "@/components/molecules/Chatbox"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStore } from "@/stores/layout"
import { ReactNode, use, useEffect, useRef, useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"




const Page = () => {
  const {chats,setChat,isChatLoading} = useStore()
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        })
      }
    }
  }, [chats, isChatLoading])

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

              <ScrollArea ref={scrollAreaRef} className="h-[80vh] w-full p-8 flex flex-col-reverse gap-8">
              {
                chats.map((message,index) => (
                  <MessageBox message={message?.message} type={message.type} data={message.data} key={index} loading={isChatLoading} />
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
}:
  {message?:string,
  data:any,
  type:"User"|"AI",
  loading:boolean,
}):ReactNode => {
  
    return ( 
      <>
      { message &&
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
      {data && <Card className="mt-2 p-4"><JsonTable data={data}  /></Card>} 
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


const JsonTable = ({ data }: { data: any[] }) => {
  const {chats, setChat} = useStore()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [tableData, setTableData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async ()=>{
      await fetchPageData(currentPage,itemsPerPage);

    }
  }, [currentPage,itemsPerPage]);

  if (!tableData || tableData.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(tableData[0]);

  const fetchPageData = async (page: number, limit: number) => {
    setIsLoading(true);
    if (chats && chats.length > 0) {
      const lastChat = chats[chats.length - 1];
      const requestBody = {
        page: page,
        limit: limit
      };
      
      console.log('Request URL:', lastChat.url);
      console.log('Request Body:', requestBody);

      try {
        const res = await fetch(lastChat.url, {
          mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(requestBody)
        });

        const responseData = await res.json();
        console.log('Response Data:', responseData);
          setTableData(responseData.data);
          setItemsPerPage(limit)
          setCurrentPage(page)
        
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleItemsPerPageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value);
      // Set the new limit first

    
    // Use setTimeout to ensure state is updated
    setTimeout(() => {
      setItemsPerPage(newLimit);
      fetchPageData(1, newLimit);
    }, 0);
  };

  const handlePageChange = async (page: number) => {
    
    setTimeout(()=>{
      setCurrentPage(page);
      fetchPageData(page, itemsPerPage);
    },0)
    
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b text-left font-semibold text-blue-600"
              >
                {header.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={isLoading ? 'opacity-50' : ''}>
          {tableData.map((row: any, rowIndex: number) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
            >
              {headers.map((header, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4 border-b">
                  {row[header] !== null ? row[header].toString() : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="items-per-page" className="mr-2">
            Items per page:
          </label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 border border-gray-300 rounded"
            disabled={isLoading}
          >
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className={`px-2 py-1 border border-gray-300 rounded ${
              currentPage === 1 || isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
          >
            <LuChevronLeft size={16} />
          </button>
          <span>
            Page {currentPage}
          </span>
          <button
            className={`px-2 py-1 border border-gray-300 rounded ${
              isLoading ? 'opacity-50' : 'hover:bg-gray-100'
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLoading}
          >
            <LuChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Showing {itemsPerPage} items (Page {currentPage}, {itemsPerPage} per page)
      </div>
    </div>
  );
};