import { Room } from "@/components/room";
import { Canvas } from "./_components/convas";
import { Loading } from "./_components/convas-loading";
interface BoardIdPageProps{
    params:{
        boardId: string;
    }
}
const BoardIdPage = ({
    params,
}:BoardIdPageProps) => {
    return ( 
        <Room roomId={params.boardId} fallback={<Loading/>}>
            <Canvas boardId={params.boardId}/>
        </Room>
    );
};
 
export default BoardIdPage;