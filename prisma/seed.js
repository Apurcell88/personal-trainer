const { PrismaClient } = require("../src/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  await prisma.service.createMany({
    data: [
      {
        title: "Free Consultation",
        description: "A complimentary session to discuss goals and options",
        price: 0,
      },
      {
        title: "1-on-1 Personal Training",
        description: "Private, personalized in-gym training sessions",
        price: 60,
      },
      {
        title: "Online Coaching",
        description: "Remote guidance with weekly check-ins",
        price: 40,
      },
      {
        title: "Nutrition Guidance",
        description: "Custom meal plans and nutritional education",
        price: 30,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Services seeded successfully");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
