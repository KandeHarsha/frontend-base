
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import {HomeOutlined, BarChartOutlined, SettingOutlined}  from "@ant-design/icons"

// export default function Sidebar() {
//   const pathname = usePathname()

  // const navItems = [
  //   { href: "/", icon: HomeOutlined, label: "Dashboard" },
  //   { href: "/reports", icon: BarChartOutlined, label: "Reports" },
  //   { href: "/settings", icon: SettingOutlined, label: "Settings" },
  // ]

//   return (
//     <nav className="bg-slate-100 text-slate-600 w-64 min-h-screen p-4">
//       <ul className="space-y-2">
//         {navItems.map((item) => {
//           const isActive = pathname === item.href
//           return (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={`flex items-center p-2 rounded transition-colors ${
//                   isActive ? "bg-indigo-100 text-indigo-700" : "hover:bg-slate-200"
//                 }`}
//               >
//                 <item.icon className="mr-2" />
//                 {item.label}
//               </Link>
//             </li>
//           )
//         })}
//       </ul>
//     </nav>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {HomeOutlined, BarChartOutlined, SettingOutlined}  from "@ant-design/icons"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: HomeOutlined, label: "Dashboard" },
    { href: "/reports", icon: BarChartOutlined, label: "Reports" },
    { href: "/settings", icon: SettingOutlined, label: "Settings" },
  ]

  return (
    <nav className="bg-slate-100 text-slate-600 w-64 h-full overflow-y-auto">
      <ul className="space-y-2 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded transition-colors ${
                  isActive ? "bg-indigo-100 text-indigo-700" : "hover:bg-slate-200"
                }`}
              >
                <item.icon className="mr-2" />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}



