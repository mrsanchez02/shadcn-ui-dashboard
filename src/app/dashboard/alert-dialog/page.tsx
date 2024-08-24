"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="flex justify-center h-24 items-center">
      <AlertDialog
        open={dialogOpen}
        onOpenChange={(open) => console.log({open})}
      >
        
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            <TrashIcon className="h-4 w-4" />
            Delete</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log('Continued')}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>
      <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
    </div>
  );
}