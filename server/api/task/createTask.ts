import { PrismaClient, Prisma } from '@prisma/client'


const prisma = new PrismaClient()

export default  defineEventHandler(async (event) =>{
    const body = await readBody(event)
    const result = await prisma.task.create({
        data:{
            title: body.title
        }
    })
})