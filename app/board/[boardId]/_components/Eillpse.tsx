import { colorToCSS } from "@/lib/utils";

import { EillipsLayer } from "@/types/canvas";

interface EillipsProps{
    id: string;
    layer: EillipsLayer;
    onPointerDown: (e: React.PointerEvent, id: string)=> void;
    selectionColor?: string;
}

export const Ellipse = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}: EillipsProps) => {
    return(
        <ellipse
            className=" drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(
                    ${layer.x}px,
                    ${layer.y}px
                )`
            }}
            cx={layer.width / 2}
            cy={layer.height / 2}
            rx={layer.width /2}
            ry={layer.height / 2}
            fill={layer.fill  ? colorToCSS(layer.fill) : "#000"}
            stroke={selectionColor || "transparent"}
            strokeWidth="1"
        />
    )
}