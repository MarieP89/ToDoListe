import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    const result = await prisma.label.delete({
        where:{
            id:body.id,
        }
    })
    return{
        status: 200,
        body: result
    }
})