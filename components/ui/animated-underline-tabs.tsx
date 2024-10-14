"use client"

import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const tabs = [
  { id: "table", label: "Table View" },
  { id: "chart", label: "Chart View" },
]

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const router = useRouter()
  const path = usePathname()
  const currentPath = path?.split('/').pop()

  useEffect(() => {
    setActiveTab("table")
  }, [path])
  
  return (

        <nav className="flex space-x-4 border-b border-gray-200" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {setActiveTab(tab.id); router.push(`?view=${tab.id}`)}}
              className={`${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              } relative px-3 py-2 font-medium text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </nav>
       
  )
}