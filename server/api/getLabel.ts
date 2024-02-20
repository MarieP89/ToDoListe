import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const result = await prisma.label.findMany()
    return {
        status: 200,
        body: result,
    }
})