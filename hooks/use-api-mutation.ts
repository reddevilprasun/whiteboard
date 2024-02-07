import { useState } from "react";

import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
    const [pending , setpending] = useState(false);
    const apiMutation = useMutation(mutationFunction);
    const mutate = (payload: any) => {
        setpending(true);
        return apiMutation(payload)
        .finally(()=> setpending(false))
        .then((result)=> {
            return result;
        })
        .catch((error)=> {
            throw error;
        });
         
    };
    return {
        mutate,
        pending,
    };
};