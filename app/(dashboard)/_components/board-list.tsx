"use client";

import { EmptyBoard } from "./empty-board";
import { EmptyFavorites } from "./empty-fevorite";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query:{
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = []; // TODO: Change to API call
    if(!data?.length && query.search){
        return (
            <EmptySearch/>
        )
    }
    if(!data?.length && query.favorites){
        return (
            <EmptyFavorites/>
        )
    }
    if(!data?.length){
        return(
            <EmptyBoard/>
        )
    }
    return (
        <div>
            
        </div>
    )
}