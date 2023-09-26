import { revalidatePath } from "next/cache";

import { ITodo, IServerActionResponse } from "@/types";
import { readDb, writeDb } from "@/lib";

export const createTodoAction = async (
  data: FormData
): Promise<IServerActionResponse> => {
  "use server";

  try {
    const text = data.get("text");
    const [currentTodos, readErr] = await readDb<ITodo[]>("todos");
    if (!text) {
      throw new Error("Todo text content is missing in form data");
    }
    if (readErr || !currentTodos) {
      throw new Error(readErr);
    }

    const newTodos = [...currentTodos, { id: Date.now().toString(), text }];
    await writeDb("todos", newTodos);
    revalidatePath("/");

    return { message: "Added new todo" };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Failed to add new todo";
    return { error };
  }
};

export const deleteTodoAction = async (
  data: FormData
): Promise<IServerActionResponse> => {
  "use server";

  try {
    const id = data.get("id");
    const [currentTodos, readErr] = await readDb<ITodo[]>("todos");

    if (!id) {
      throw new Error("Todo ID is missing in form data");
    }
    if (readErr || !currentTodos) {
      throw new Error(readErr);
    }

    const newTodos = currentTodos.filter((current) => current.id !== id);
    await writeDb("todos", newTodos);

    revalidatePath("/");
    return { message: `Removed todo ID: "${id}"` };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Failed to add new todo";
    return { error };
  }
};
