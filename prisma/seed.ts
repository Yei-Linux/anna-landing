import { PrismaClient } from '@prisma/client';
import {
  cronicalDiseaseSeeders,
  diseasesSeeders,
  plannsSeeders,
  takeCareOptionsSeeders,
  turnSeeders,
} from './seeders/options';

const prisma = new PrismaClient();

async function main() {
  for (const disease of diseasesSeeders) {
    await prisma.diseases.upsert({
      where: { id: disease.id },
      update: {},
      create: { ...disease, id: disease.id.toString() },
    });
  }
  for (const turn of turnSeeders) {
    await prisma.turns.upsert({
      where: { id: turn.id },
      update: {},
      create: { ...turn, id: turn.id.toString() },
    });
  }
  for (const cronicalDisease of cronicalDiseaseSeeders) {
    await prisma.cronicalDiseases.upsert({
      where: { id: cronicalDisease.id },
      update: {},
      create: {
        ...cronicalDisease,
        id: cronicalDisease.id.toString(),
      },
    });
  }
  for (const plan of plannsSeeders) {
    await prisma.paymentPlans.upsert({
      where: { id: plan.id },
      update: {},
      create: { ...plan, id: plan.id.toString() },
    });
  }
  for (const takeCareOption of takeCareOptionsSeeders) {
    await prisma.takeCareOptions.upsert({
      where: { id: takeCareOption.id },
      update: { text: takeCareOption.text },
      create: { ...takeCareOption, id: takeCareOption.id.toString() },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.log('test', e);
    await prisma.$disconnect();
    process.exit(1);
  });
