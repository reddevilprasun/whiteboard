"use client";
import { useCallback, useState } from "react";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory, useSelf,  useMutation } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvaspoint } from "@/lib/utils";
interface CanvasProps{
    boardId: string;
}
export const Canvas = ({
    boardId,
}:CanvasProps) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None
    })

    const [camera, setcamera] = useState<Camera>({x: 0, y: 0})

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onWheel = useCallback((e: React.WheelEvent)=> {
        setcamera((camera)=> ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    }, []);

    const onPointerMove = useMutation(({setMyPresence}, e: React.PointerEvent)=> {
        e.preventDefault();
        const current = pointerEventToCanvaspoint(e, camera);
        setMyPresence({cursor: current})
    }, [])
    return (
        <main
           className=" h-full w-full bg-neutral-100 touch-none" 
        >
            <Info boardId={boardId}/>
            <Participants/>
            <ToolBar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canUndo={canUndo}
                canRedo={canRedo}
                undo={history.undo}
                redo={history.redo}
            />
            <svg className=" h-[100vh] w-[100vw]" onWheel={onWheel} onPointerMove={onPointerMove}>
                <g>
                    <CursorsPresence />
                </g>
            </svg>
        </main>
    );
};