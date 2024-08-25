import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/53561506?v=4&size=64" alt={'@mrsanchez02'} />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <p className="m-2">@mrsanchez02</p>
    </div>
  );
}