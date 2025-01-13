import { notFound } from "next/navigation";
import prisma from "../lib/db";
import { requireUser } from "../lib/hooks";
import { EmptyState } from "../CustomComponents/EmptyState";

//fetching data from prisma EventType Model
async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      userName: true,
      eventType: {
        select: {
          id: true,
          active: true,
          title: true,
          url: true,
          duration: true,
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function DashboardPage() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);

  return (
    <>
      {data.eventType.length === 0 ? (
        <EmptyState
          title="You have no Event Types"
          description="You can create your first event type by clicking the button below"
          buttonText="Add Event Type"
          href="/dashboard/new"
        />
      ) : (
        <div className="flex items-center justify-between px-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Event Types</h1>
            <p className="text-muted-foreground">Create and manage your event types right here.</p>
          </div>
        </div>
      )}
    </>
  );
}
