import prisma from "@/lib/prismadb";

export const getMessages = async ({
  conversationId,
}: {
  conversationId: string;
}) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId,
      },
      include: {
        seen: true,
        sender: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (error) {
    return [];
  }
};
