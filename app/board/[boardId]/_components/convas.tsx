"use client";

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
interface CanvasProps{
    boardId: string;
}
export const Canvas = ({
    boardId,
}:CanvasProps) => {
    const info = useSelf((me)=> me.info?.name)
    return (
        <main
           className=" h-full w-full bg-neutral-100 touch-none" 
        >
            <Info boardId={boardId}/>
            <Participants/>
            <ToolBar/>
        </main>
    );
};