import { revalidatePath } from "next/cache";

import { IPageProps, ITodo } from "@/types";
import { readDb, writeDb } from "@/lib";
import AddForm from "@/components/AddForm";
import DeleteForm from "@/components/DeleteForm";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  const [todos, err] = await readDb<ITodo[]>("todos");

  const createTodoAction = async (data: FormData) => {
    "use server";

    const text = data.get("text");
    const [currentTodos] = await readDb<ITodo[]>("todos");
    if (!text || !currentTodos) {
      return;
    }

    const newTodos = [...currentTodos, { id: Date.now().toString(), text }];
    await writeDb("todos", newTodos);
    revalidatePath("/");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-12">
        NEXT V13 POLYGON
      </h1>
      <AddForm formAction={createTodoAction} />
      <ul className="min-w-[320px]">
        {err && (
          <li className="text-red-500 font-semibold text-center">
            Oups, an error: {err}
          </li>
        )}
        {todos &&
          todos.map(({ id, text }) => (
            <li
              key={id}
              className="flex flex-col gap-2 items-stretch justify-center border-2 my-4 p-2 rounded-md border-green-600"
            >
              <span> {text}</span>
              <DeleteForm id={id} todo={text} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Homepage;
