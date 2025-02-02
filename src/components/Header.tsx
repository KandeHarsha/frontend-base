"use client"

import { useState } from "react"
import Image from "next/image"
import { DownOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link"

const dummyOrgs = [
  { id: 1, name: "Acme Corp" },
  { id: 2, name: "Globex Inc" },
  { id: 3, name: "Initech LLC" },
]

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState(dummyOrgs[0])

  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <span className="ml-2 text-xl font-bold text-indigo-200">BrandName</span>
          <div className="relative ml-4">
            <button
              className="flex items-center bg-slate-700 px-3 py-2 rounded hover:bg-slate-600 transition-colors"
              onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
            >
              {selectedOrg.name} <DownOutlined className="ml-2" />
            </button>
            {isOrgDropdownOpen && (
              <ul className="absolute mt-2 w-48 bg-white text-slate-800 rounded shadow-lg">
                {dummyOrgs.map((org) => (
                  <li
                    key={org.id}
                    className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                    onClick={() => {
                      setSelectedOrg(org)
                      setIsOrgDropdownOpen(false)
                    }}
                  >
                    {org.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            className="flex items-center hover:text-indigo-200 transition-colors"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <UserOutlined className="mr-2" />
            Profile <DownOutlined className="ml-2" />
          </button>
          {isProfileOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded shadow-lg">
              <li>
                <Link href="/profile" className="block px-4 py-2 hover:bg-slate-100">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="block px-4 py-2 hover:bg-slate-100">
                  Settings
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer">Logout</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}



