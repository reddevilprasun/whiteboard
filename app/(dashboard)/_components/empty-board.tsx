"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoard = () => {
    const router = useRouter();
    const { organization} = useOrganization();
    const {mutate,pending} = useApiMutation(api.board.create);
    const onClick = () => {
        if(!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id)=>{
            toast.success("Board created");
            router.push(`/board/${id}`)
        })
        .catch((error:any)=> toast.error(`Failed to create board: ${error.message}`));
    };
    return(
        <div className=" flex flex-col items-center justify-center h-full">
            <Image
                src="/note.svg"
                alt="Empty-Board"
                width={140}
                height={140}
            />
            <h2 className=" font-semibold text-2xl mt-6">
                Create your first board!

            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>
            </div>

        </div>
    )
}

