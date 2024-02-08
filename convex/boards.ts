import {v} from "convex/values"

import { query } from "./_generated/server";

export const get = query({
    args:{
        orgId: v.string(),
    },
    handler: async (ctx, args) => {
        const indenty = await ctx.auth.getUserIdentity();
        if(!indenty){
            throw new Error("Not authenticated");
        }
        const boards = await ctx.db
        .query("boards")
        .withIndex("by_org", (q)=> q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
        return boards;

    },
});