const { PrismaClient } = require("../src/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  await prisma.testimonial.create({
    data: {
      clientName: "Adam Purcell",
      content:
        "Working with Adam has been a turning point in my fitness journey. His structured programs and supportive coaching helped me gain confidence and see real results.",
      beforeImage: "/images/adam-before.jpg",
      afterImage: "/images/adam-after.jpg",
    },
  });

  console.log("Testimonial added.");
}

main()
  .catch((e) => {
    console.error("Error adding testimonial:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
