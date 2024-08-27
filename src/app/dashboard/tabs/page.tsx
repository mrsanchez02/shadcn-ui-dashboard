"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Tab1 } from "./ui/tab1";
import { Tab2 } from "./ui/tab2";


export default function Page() {
  return (
    <div className="grid grids-col-1 gap-4">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Tab1 />
      </TabsContent>
      <TabsContent value="password">
        <Tab2 />
      </TabsContent>
      <TabsContent value="disabled" >
        <h1>Should be disabled</h1>
      </TabsContent>
    </Tabs>
    </div>
  );
}