import React from "react";
import { ITodo } from "@/types";
interface IProps {
  todo: ITodo;
  deleteTodoAction: (data: FormData) => Promise<void>;
}

const DeleteForm = ({
  todo: { id, text },
  deleteTodoAction,
}: IProps): JSX.Element => {
  return (
    <form
      action={deleteTodoAction as any}
      className="flex justify-between px-1 py-2"
    >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="text" value={text} />
      <button className=" bg-black text-white rounded-md px-4 py-2">
        DELETE
      </button>
    </form>
  );
};

export default DeleteForm;
