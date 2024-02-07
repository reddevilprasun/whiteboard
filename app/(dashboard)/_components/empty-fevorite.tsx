"use client"
import Image from "next/image";

export const EmptyFavorites = () => {
    return(
        <div className=" flex flex-col items-center justify-center h-full">
            <Image
                src="/empty-favorites.svg"
                alt="Empty-favorites"
                width={140}
                height={140}
            />
            <h2 className=" font-semibold text-2xl mt-6">
                No favorites boards

            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try favoriting a board
            </p>

        </div>
    )
}

