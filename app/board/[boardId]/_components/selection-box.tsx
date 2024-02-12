"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bound";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { memo } from "react";

interface SelectionBoxProps {
    onResizeHandlePointerDown: (corner : Side, initialBounds : XYWH) => void;
};

const HANDEL_WIDTH = 8;
export const SelectionBox = memo(({
    onResizeHandlePointerDown,
}: SelectionBoxProps)=> {
    const soleLayerId = useSelf((me)=> 
        me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isShowingHandle = useStorage((root)=>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    );

    const bounds = useSelectionBounds();

    if(!bounds){
        return null;
    }

    return (
        <>
            <rect
                className=" fill-transparent stroke-blue-500 stroke-1"
                style={{
                    transform: `translate(${bounds.x}px, ${bounds.y}px)`
                }}
                x={0} y={0} width={bounds.width} height={bounds.height}
            />
            {isShowingHandle && (
                <>
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDEL_WIDTH /2}px, ${bounds.y - HANDEL_WIDTH/2}px)`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Top + Side.Left, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width /2 - HANDEL_WIDTH /2}px, ${bounds.y - HANDEL_WIDTH/2}px)`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Top, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDEL_WIDTH/2 + bounds.width}px, ${bounds.y - HANDEL_WIDTH /2}px)`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Top + Side.Right, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDEL_WIDTH /2 + bounds.width}px, ${bounds.y + bounds.height /2 - HANDEL_WIDTH /2}px)`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Right, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDEL_WIDTH /2 + bounds.width}px, ${bounds.y - HANDEL_WIDTH/2 + bounds.height}px)`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width /2 - HANDEL_WIDTH /2}px, ${bounds.y - HANDEL_WIDTH / 2 + bounds.height}px )`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Bottom, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(
                                ${bounds.x - HANDEL_WIDTH/2}px,
                                ${bounds.y - HANDEL_WIDTH/2 + bounds.height}px
                            )`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds)
                        }}
                    />
                    <rect
                        className=" fill-white stroke-1 stroke-blue-500"
                        x={0}
                        y={0}
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDEL_WIDTH}px`,
                            height: `${HANDEL_WIDTH}px`,
                            transform: `translate(
                                ${bounds.x - HANDEL_WIDTH /2}px,
                                ${bounds.y - HANDEL_WIDTH / 2 + bounds.height / 2}px
                            )`,
                        }}
                        onPointerDown={(e)=> {
                            e.stopPropagation();
                            onResizeHandlePointerDown(Side.Left, bounds)
                        }}
                    />
                </>
            )}
        </>
    );
});

SelectionBox.displayName = "SelectionBox";