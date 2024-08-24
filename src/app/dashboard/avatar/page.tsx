import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/mrsanchez0222.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}