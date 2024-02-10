"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog"
import { useRenameModel } from "@/store/use-rename";
import { FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModel = () => {
    const { mutate, pending } = useApiMutation(api.board.update)
    const {
        isOpen,
        onClose,
        initialValues

    } = useRenameModel();
    const [title, setTitle] = useState(initialValues.title)

    useEffect(() => {
        setTitle(initialValues.title)
    }, [initialValues.title])

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        mutate({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("The Board has been renamed successfully.")
                onClose();
            })
            .catch(() => toast.error("An error occurred while renaming the board."))
    };
    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        placeholder="Enter a new title..."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline" onClick={()=>onClose()}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button disabled={pending} type="submit">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    );
};