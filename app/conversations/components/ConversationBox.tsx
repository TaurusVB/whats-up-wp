import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import useOtherUser from "@/app/hooks/useOtherUser";
import { FullConversationType } from "@/app/types";

interface IConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: FC<IConversationBoxProps> = ({ data, selected }) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  return <div>Conversation box!</div>;
};

export default ConversationBox;
