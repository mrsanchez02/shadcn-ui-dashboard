"use client";
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1;
      });
    },100)
    return () => clearInterval(interval);
  }, [])
  
  return (
    <div>
      <Progress value={progress} incidatorColor={
        cn({
          'bg-red-500': progress < 25,
          'bg-yellow-500': progress < 50 && progress >= 25,
          'bg-green-500': progress < 75 && progress >= 50,
          'bg-blue-500': progress < 100 && progress >= 75,
          'bg-purple-500': progress === 100
        })
      } />
    </div>
  );
}