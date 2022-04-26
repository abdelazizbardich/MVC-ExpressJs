const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    findMany: async ()=>{
        return await prisma.user.findMany()
    },
    create: async (data)=>{
        return await prisma.user.create({
            data:{
                name:data.name,
                email:data.email,
                password:data.password
            }
        })
    },
    update: async (data)=>{
        return await prisma.user.update({
            where:{
                id:+data.id
            },
            data:{
                name:data.name,
                email:data.email
            }
        })
    },
    updatePassword: async (data)=>{
        return await prisma.user.update({
            where:{
                id: +data.id
            },
            data:{
                password:data.password
            }
        })
    },
    findBy: async (target,value)=>{
        return await prisma.user.findUnique({
            where:{
                [target]:value
            }
        })
    },
    delete: async (data)=>{
        return await prisma.user.delete({
            where:{
                id:+data.id
            }
        })
    }
}