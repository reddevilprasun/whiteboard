"use client";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hints";
import { useRenameModel } from "@/store/use-rename";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoProps {
    boardId: string;
}

const TabSeparator = () => {
    return (
        <div className=" text-neutral-300 px-1.5">
            |
        </div>
    )
}

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

export const Info = ({
    boardId,
}: InfoProps) => {
    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">,
    });

    const { onOpen } = useRenameModel();

    if (!data) {
        return <InfoSkeleton />
    }
    return (
        <div className=" absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint label="Go to boards" side="bottom" sideOffset={10}>
                <Button asChild className=" px-2" variant="board">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            height={40}
                            width={40}
                        />
                        <span className={cn(
                            "font-semibold text-xl ml-2 text-black",
                            font.className,
                        )}>
                            Boardy
                        </span>
                    </Link>
                </Button>
            </Hint>
            <TabSeparator />
            <Hint label="Edit title" side="bottom" sideOffset={10}>
                <Button onClick={() => onOpen(data._id, data.title)} variant="board" className=" text-base font-normal px-2">
                    {data.title}
                </Button>
            </Hint>
            <TabSeparator/>
            <Actions
                id={data._id}
                title={data.title}
                side="bottom"
                sideOffset={10}
            >
                <div>
                    <Hint label="Main menu" side="bottom" sideOffset={10}>
                            <Button size="icon" variant="board">
                                <Menu/>
                            </Button>
                    </Hint>
                </div>
            </Actions>
        </div>
    )
};

export const InfoSkeleton = () => {
    return (
        <div className=" absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    )
}