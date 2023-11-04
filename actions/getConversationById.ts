import prisma from "@/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export const getConversationById = async ({
  conversationId,
}: {
  conversationId: string;
}) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) return null;

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error) {
    return null;
  }
};
