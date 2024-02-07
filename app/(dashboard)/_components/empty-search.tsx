"use client"
import Image from "next/image";

export const EmptySearch = () => {
    return(
        <div className=" flex flex-col items-center justify-center h-full">
            <Image
                src="/empty-search.svg"
                alt="Empty"
                width={140}
                height={140}
            />
            <h2 className=" font-semibold text-2xl mt-6">
                No result found!

            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try searching for something else
            </p>

        </div>
    )
}

