export type Color = {
    r: number;
    g: number;
    b: number;
};

export type Camera = {
    x: number;
    y: number;
};

export enum LayerType {
    Rectangle,
    Eillips,
    Path,
    Text,
    Note,
};

export type RactangleLayer = {
    type: LayerType.Rectangle;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};
export type EillipsLayer = {
    type: LayerType.Eillips;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type PathleLayer = {
    type: LayerType.Path;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    points: number[][];
    value?: string;
};

export type TextleLayer = {
    type: LayerType.Text;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type NoteleLayer = {
    type: LayerType.Note;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
};

export type Point = {
    x: number;
    y: number;
};

export type XYWH = {
    x: number;
    y: number;
    height: number;
    width: number;
}

export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8,
};

export type CanvasState =
    | {
        mode: CanvasMode.None;
    }
    | {
        mode: CanvasMode.Pressing,
        origin: Point;
    }
    | {
        mode: CanvasMode.SelectionNet,
        origin: Point;
        current?: Point;
    }
    | {
        mode: CanvasMode.Translating,
        current: Point;
    }
    | {
        mode: CanvasMode.Inserting,
        layerType: LayerType.Eillips | LayerType.Rectangle | LayerType.Text | LayerType.Note;

    }
    | {
        mode: CanvasMode.Resizing,
        initialBounds: XYWH;
        corner: Side;
    }
    | {
        mode: CanvasMode.Pencil
    }

export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil
};