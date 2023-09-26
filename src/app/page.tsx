import { revalidatePath } from "next/cache";

import { IPageProps, ITodo } from "@/types";
import { readDb, writeDb } from "@/lib";
import { createTodoAction, deleteTodoAction } from "@/lib/serverActions";
import AddForm from "@/components/AddForm";
import DeleteForm from "@/components/DeleteForm";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  const [todos, err] = await readDb<ITodo[]>("todos");

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-12">
        NEXT V13 POLYGON
      </h1>
      <AddForm formAction={createTodoAction} />
      <ul className="w-full flex flex-wrap gap-2 justify-center">
        {err && (
          <li className="text-red-500 font-semibold text-center w-full">
            Oups, an error: {err}
          </li>
        )}
        {todos &&
          todos.map(({ id, text }) => (
            <li
              key={id}
              className="flex gap-2 items-center justify-between border-2 my-4 p-2 bg-slate-300 rounded-md w-[320px]"
            >
              <span> {text}</span>
              <DeleteForm
                todo={{ id, text }}
                deleteTodoAction={deleteTodoAction}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Homepage;
