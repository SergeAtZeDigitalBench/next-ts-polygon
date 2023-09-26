import React from "react";

interface IProps {
  id: string;
  todo: string;
}

const DeleteForm = ({ id, todo }: IProps): JSX.Element => {
  return (
    <div className="flex justify-between px-1 py-2 bg-slate-300 rounded-md ">
      <p>{todo}</p>
      <button className=" bg-black text-white rounded-md px-4 py-2">
        DELETE
      </button>
    </div>
  );
};

export default DeleteForm;
