import React from "react";
import Image from "next/image";

import { IUser } from "@/types";
interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps): JSX.Element => (
  <div
    key={user.id}
    className="flex flex-col gap-2 p-1 border border-slate-400 rounded"
  >
    <Image
      src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
      alt={user.username}
      width={180}
      height={180}
      className="mx-auto"
    />
    <h3 className="text-center">{user.username}</h3>
  </div>
);

export default UserCard;
