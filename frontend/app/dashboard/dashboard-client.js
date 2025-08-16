"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  FileUp,
  FileText,
  Settings,
  Menu,
  X,
  LogOut,
  User,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function DashboardClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const recentBills = [
    {
      id: "INV-001",
      name: "Office Supplies Invoice",
      date: "Apr 5, 2025",
      status: "Processed",
    },
    {
      id: "INV-002",
      name: "Utility Bill - March",
      date: "Apr 3, 2025",
      status: "Processing",
    },
    {
      id: "INV-003",
      name: "Internet Service",
      date: "Apr 1, 2025",
      status: "Processed",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">Bill Extraction</h2>
            <button
              className="rounded-full p-1 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            <Link
              href="/dashboard"
              className="flex items-center rounded-md bg-blue-50 px-4 py-3 text-blue-700"
            >
              <FileText className="mr-3 h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/upload"
              className="flex items-center rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <FileUp className="mr-3 h-5 w-5" />
              <span>Upload Bill</span>
            </Link>
            <Link
              href="/dashboard/bills"
              className="flex items-center rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <FileText className="mr-3 h-5 w-5" />
              <span>View Bills</span>
            </Link>
            <Link
              href="/dashboard/analytics"
              className="flex items-center rounded-md px-4 py-3 text-gray-500 hover:bg-gray-100"
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              <span>Analytics</span>
              <Badge variant="outline" className="ml-auto text-xs">
                Soon
              </Badge>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center rounded-md px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="mr-3 h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="border-t p-4">
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">Finance Team</p>
                <p className="text-xs text-gray-500">finance@company.com</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="flex h-16 items-center justify-between px-4">
            <button
              className="rounded-md p-2 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">
              Welcome to your AI Bill Extraction system
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Processed Bills
                  </p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pending</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="rounded-full bg-yellow-100 p-3">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    This Month
                  </p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <Link href="/dashboard/upload">
                <CardContent className="flex h-full items-center justify-center p-6">
                  <Button className="w-full">
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload New Bill
                  </Button>
                </CardContent>
              </Link>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Bills</CardTitle>
                  <Link
                    href="/dashboard/bills"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View all
                  </Link>
                </div>
                <CardDescription>Your recently processed bills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBills.map((bill) => (
                    <div
                      key={bill.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <p className="font-medium">{bill.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{bill.id}</span>
                          <span className="mx-2">•</span>
                          <span>{bill.date}</span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          bill.status === "Processed" ? "default" : "outline"
                        }
                        className={
                          bill.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : ""
                        }
                      >
                        {bill.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
