
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query']})

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post 4",
     content:"content for author 4",
     authorId:4
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })