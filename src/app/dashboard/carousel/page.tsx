"use client";
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Page() {
  return (
    <div className="flex w-full justify-center">
      <Carousel 
        className="w-full max-w-xs"
        autoplay={1500}
        opts={{
          // dragFree: true,
          // loop: true
          
        }}>
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex justify-center items-centersm:block"/>
        <CarouselNext className="hidden sm:flex justify-center items-centersm:block"/>
      </Carousel>
    </div>
  );
}