import Topbar from "@/components/molecules/Navigation/Topbar";
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Topbar />
   <div className="p-4">
   {children}
   </div>
   </>
  );
}
