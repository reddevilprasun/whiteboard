"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

interface ConfirmModelProps{
    children: React.ReactNode;
    onConfirm: ()=> void;
    disabled?: boolean;
    header: string;
    description?: string;
};

export const ConfirmModel = ({
    children,
    onConfirm,
    description,
    disabled,
    header,
}: ConfirmModelProps)=>{
    const handelConfirm = () => {
        onConfirm();
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancle</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handelConfirm}
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};



