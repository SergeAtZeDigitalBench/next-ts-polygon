"use client";

import { useFormState } from "@/lib/hooks/useFormState";
import { IServerActionResponse } from "@/types";

interface IProps {
  createTodoAction: (data: FormData) => Promise<IServerActionResponse>;
}

const AddForm = ({ createTodoAction }: IProps): JSX.Element => {
  const [state, formAction] = useFormState({ serverAction: createTodoAction });

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
        required
        className="px-4 py-2 border border-slate-600 rounded-md"
      />
      <button
        type="submit"
        are-disabled={!!state.pending}
        className="w-full bg-black text-white rounded-md px-4 py-2 text-center"
      >
        ADD
      </button>
      {(state.message || state.error) && (
        <p aria-live="polite" className="sr-only" role="status">
          {state.message || state.error}
        </p>
      )}
    </form>
  );
};

export default AddForm;
