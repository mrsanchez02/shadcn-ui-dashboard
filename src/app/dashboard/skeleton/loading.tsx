import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
  const data = '123456789'.split('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {
        data.map((item, index) => (
          <Card key={item}>
            <CardHeader className="flex-row">
              <Skeleton className="rounded-full mr-2 w-10 h-10" />
              <div className="flex-col flex-grow">
                <Skeleton className="h-4 w-1/2 mb-2 flex-grow" />
                <Skeleton className="h-3 w-full" />
              </div>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Skeleton className="w-20 h-8" />
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}