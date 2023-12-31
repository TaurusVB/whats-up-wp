import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

export const metadata = {
  title: "Messages | WhatsUpApp",
  description: "User's messages and conversations",
};

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationsList users={users} initialItems={conversations} />{" "}
        {children}
      </div>
    </Sidebar>
  );
}
