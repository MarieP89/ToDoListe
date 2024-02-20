import { PrismaClient, Prisma } from '@prisma/client'


const prisma = new PrismaClient()

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    const result = await prisma.label.create({
        data: {
            name: body.name,
        },
    })
    return {
        status: 201,
        body: result,
    }
})