"use client";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import {ChevronRight, Loader2, Mail } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIslLoading] = useState(true);

  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>Default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => console.log('Clicked')}>click me</Button>
      <Button variant={'success'}>click me</Button>
      <Button>no capitalize</Button>
      <Button capitalize>capitalize true</Button>
      <Button disabled={isLoading}>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
        Login with email
      </Button>
      <Button size={'icon'} variant={'default'}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}