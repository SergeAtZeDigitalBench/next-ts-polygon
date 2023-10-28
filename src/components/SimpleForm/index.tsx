"use client";

import { useState } from "react";

interface IFormValues {
  name: string;
  email: string;
}

const initState: IFormValues = { name: "", email: "" } as const;

interface IProps {}

const SimpleForm = ({}: IProps): JSX.Element => {
  const [formFields, setFormFields] = useState<IFormValues>({ ...initState });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields((current) => ({ ...current, [name]: value }));
  };

  return (
    <form className="flex flex-col gap-2 w-[350px] p-2 border-2 border-green-700 rounded">
      <div className="my-2 p-2 flex flex-col gap-2 min-h-[100px]">
        <p>{formFields.name}</p>
        <p>{formFields.email}</p>
      </div>
      <input
        type="text"
        name="name"
        value={formFields.name}
        onChange={handleChange}
        className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
      />
      <input
        type="email"
        name="email"
        value={formFields.email}
        onChange={handleChange}
        className="px-2 py-1 rounded bg-gray-200 border-2 border-gray-400 w-full"
      />
      <button className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 border-2 border-green-700 w-[150px]]">
        submit
      </button>
    </form>
  );
};

export default SimpleForm;
