// NOTE: All server actions are stored in this file.
"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";
import { parseWithZod } from "@conform-to/zod"
import { onboardingSchema } from "./lib/zodSchemas";

export async function OnboradingAction(formData: FormData) {
  const session = await requireUser();
  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status != "success") {
    return submission.reply();
  }

  const data = await prisma.user.update({
    where: {
        id: session.user?.id //TODO: add '?' after 'session' if for some reason it doesnt work
    },
    data: {
      userName: submission.value.userName,
      name: submission.value.fullName
    }
  })
}