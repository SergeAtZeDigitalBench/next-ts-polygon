"use client";

import React from "react";

interface IProps {
  formAction: (data: FormData) => Promise<void>;
}

const AddForm = ({ formAction }: IProps): JSX.Element => {
  return (
    <form
      action={formAction as any}
      className="min-w-[320px] flex flex-col gap-2 my-4"
    >
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter task"
        className="px-4 py-2 border border-slate-600 rounded-md"
      />
      <button className="w-full bg-black text-white rounded-md px-4 py-2 text-center">
        ADD
      </button>
    </form>
  );
};

export default AddForm;
