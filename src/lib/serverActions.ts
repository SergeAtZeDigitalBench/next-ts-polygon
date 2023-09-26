import { revalidatePath } from "next/cache";

import { ITodo } from "@/types";
import { readDb, writeDb } from "@/lib";

export const createTodoAction = async (data: FormData) => {
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

export const deleteTodoAction = async (data: FormData) => {
  "use server";

  const id = data.get("id");

  const [currentTodos] = await readDb<ITodo[]>("todos");
  if (!id || !currentTodos) {
    return;
  }

  const newTodos = currentTodos.filter((current) => current.id !== id);
  await writeDb("todos", newTodos);

  revalidatePath("/");
};
