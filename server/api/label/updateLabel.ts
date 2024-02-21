import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    const result = await prisma.label.update({
        where: {
            id: body.id,
        },
        data: {
            name: body.name,
        },
    })
    return {
        status: 200,
        body: result,
    }
})