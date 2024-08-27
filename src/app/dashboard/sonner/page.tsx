"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: `${new Date().toLocaleTimeString((navigator.language || "en-US"), {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`,
            duration: 1000,
            position: "top-right",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast Default
      </Button>
      <Button
        variant="success"
        onClick={() =>
          toast.success("Event has been created", {
            description: `${new Date().toLocaleTimeString((navigator.language || "en-US"), {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`,
            duration: 1000,
            position: "top-right",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Success
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Event has been created", {
            description: `${new Date().toLocaleTimeString((navigator.language || "en-US"), {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`,
            duration: 1000,
            position: "top-right",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Error
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.info("Event has been created", {
            description: `${new Date().toLocaleTimeString((navigator.language || "en-US"), {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`,
            duration: 1000,
            position: "top-right",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show info
      </Button>
    </div>
  );
}