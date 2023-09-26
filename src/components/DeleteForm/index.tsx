"use client";

import { useFormState } from "@/lib/hooks/useFormState";
import { ITodo, IServerActionResponse } from "@/types";

interface IProps {
  todo: ITodo;
  deleteTodoAction: (data: FormData) => Promise<IServerActionResponse>;
}

const DeleteForm = ({
  todo: { id, text },
  deleteTodoAction,
}: IProps): JSX.Element => {
  const [state, formAction] = useFormState({ serverAction: deleteTodoAction });

  return (
    <form action={formAction as any} className="flex justify-between px-1 py-2">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="text" value={text} />
      <button
        type="submit"
        are-disabled={!!state.pending}
        className=" bg-black text-white rounded-md px-4 py-2"
      >
        DELETE
      </button>
      {(state.message || state.error) && (
        <p aria-live="polite" className="sr-only" role="status">
          {state.message || state.error}
        </p>
      )}
    </form>
  );
};

export default DeleteForm;
