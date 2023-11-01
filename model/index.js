const {prismaClient, PrismaClient} = require('@prisma/client'),
prisma = new PrismaClient();

module.exports={
    gambar: prisma.gambar
}