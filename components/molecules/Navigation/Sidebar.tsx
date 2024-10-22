"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from '@/app/icon.png'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { LuBuilding, LuChevronDown, LuChevronsRight, LuClipboardCopy, LuIndianRupee, LuLandmark, LuLayoutDashboard, LuPackage2, LuPresentation, LuSparkles, LuTruck, LuUsers2, LuReceipt } from 'react-icons/lu';
export const Sidebar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(pathname);

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <ScrollArea className="space-y-1">
        
        <Option
          href="/"
          Icon={LuLayoutDashboard}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
          <Option
           href="/mis"
            Icon={LuPresentation}
            title="All in One MIS"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            href="/inventory"
            Icon={LuPackage2}
            title="Inventory"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
      
        <Option
          href="/sales "
          Icon={LuIndianRupee}
          title="Sales"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          href="/tally "
          Icon={LuReceipt}
          title="Tally"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={2}
        />
        <Option
          href="/production"
          Icon={LuBuilding}
          title="Production"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          href="plant-wise-summary"
          Icon={LuClipboardCopy}
          title="Plant Wise Summary"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          href="manpower"
          Icon={LuUsers2}
          title="Man Power"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          href="inward-outward"
          Icon={LuTruck}
          title="Inward/Outward"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          href="project-wise-summary"
          Icon={LuLandmark}
          title="Project Wise Summary"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          href="chatbot"
          Icon={LuSparkles}
          title="Third Eye Chatbot"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </ScrollArea>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({
  href,
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
}: {
  href: string;
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  open: boolean;
  notifs?: number;
}) => {
  return (
    <Link href={href}>
    <motion.button
      layout
      onClick={() => setSelected(href)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === href ? "bg-blue-100 text-blue-800" : "text-slate-500 hover:bg-slate-100"}`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-blue-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
    </Link>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">Purshotam Profiles</span>
              <span className="block text-xs text-slate-500">Welcome, Admin</span>
            </motion.div>
          )}
        </div>
        {open && <LuChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-white"
    >
        <Image src={LogoImage} alt="Purshottam Profiles Logo" width="24" ></Image>
    </motion.div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <LuChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

