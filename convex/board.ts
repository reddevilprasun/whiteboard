import {v} from "convex/values"

import {mutation} from "./_generated/server"

const images = [
    "/placeholdres/1.svg",
    "/placeholdres/2.svg",
    "/placeholdres/3.svg",
    "/placeholdres/4.svg",
    "/placeholdres/5.svg",
    "/placeholdres/6.svg",
    "/placeholdres/7.svg",
    "/placeholdres/8.svg",
    "/placeholdres/9.svg",
    "/placeholdres/10.svg",
]

export const create = mutation({
    args:{
        orgId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw  new Error("You must be logged in to create an organization.");
        }

        const randomImages = images[Math.floor(Math.random() * images.length)];

        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImages,
        }) ;
        return board;
    }
})