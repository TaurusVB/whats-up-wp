import { FC, useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";

interface IUserBoxProps {
  data: User;
}

const UserBox: FC<IUserBoxProps> = ({ data }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);

    try {
      const conversation = await axios.post("/api/conversations", {
        userId: data.id,
      });

      router.push(`/conversations/${conversation.data.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data.id, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className=" w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer"
      >
        <Avatar user={data} />
        <div className=" min-w-0 flex-1">
          <div className=" focus:outline-none">
            <div className=" flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-900">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
