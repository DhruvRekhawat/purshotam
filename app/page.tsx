import BgImage from '../public/bg.jpeg';
import InfoCard from "@/components/ui/info-card";
import Image from "next/image";
import { LuBox } from "react-icons/lu";

export default function Home() {
  
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const hour = new Date().getHours();
  const greeting = hour < 5 ? 'Good Night'
    : hour < 12 ? 'Good Morning'
    : hour < 18 ? 'Good Afternoon'
    : hour < 22 ? 'Good Evening'
    : 'Good Night';

  const infoCards = [
    { title: "Total Customers", value: "1250", badge: "", info: "Since last week",  link: "/sales" },
    { title: "Total Sales", value: "1250", badge: "2.5%", info: "Since last week", icon: <LuBox/>, link: "/sales" },
    { title: "Total Raw Materials", value: "1250", badge: "2.5%", info: "Since last week", icon: <LuBox />, link: "/sales" },
  ]


  return (
    <main className="grid grid-cols-12 gap-8 w-full p-8">
      <div className="col-span-12 h-40 rounded-xl overflow-clip relative ">
        <Image src={BgImage} alt="logo" className="w-full h-full object-cover -z-10 absolute" loading="eager" width={500} height={100}></Image>
        <h2 className="text-white opacity-70 text-lg font-bold z-10 ml-4 mt-4">{day}</h2>
        <h2 className="text-zinc-100 text-2xl font-bold z-10 ml-4">{greeting}</h2>
      </div>
      <div className="col-span-8 grid grid-cols-3 gap-4 ">
        {infoCards.map((card, index) => (
          <InfoCard key={index} title={card.title} value={card.value} badge={card.badge} info={card.info} icon={card.icon} link={card.link} />
        ))}
      </div>
      

      
    </main>
  );
}
