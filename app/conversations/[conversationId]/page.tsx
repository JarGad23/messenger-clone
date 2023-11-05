import { getConversationById } from "@/actions/getConversationById";
import { getMessages } from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Header from "./_components/Header";
import Body from "./_components/Body";
import Form from "./_components/Form";

interface IParams {
  conversationId: string;
}

const ConversationIdPage = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params);
  const messages = await getMessages(params);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationIdPage;
