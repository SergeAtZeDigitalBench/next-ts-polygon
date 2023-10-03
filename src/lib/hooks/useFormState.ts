import { useState, useCallback } from "react";

import { IServerActionResponse } from "@/types";

interface IState extends IServerActionResponse {
  pending?: boolean;
}

interface IHookProps {
  serverAction: (data: FormData) => Promise<IServerActionResponse>;
  initialState?: IState;
}

export const useFormState = ({
  serverAction,
  initialState = {},
}: IHookProps): [IState, (data: FormData) => Promise<void>] => {
  const [submitResult, setSubmitResult] = useState(() => initialState);

  const formAction = useCallback(
    async (data: FormData) => {
      setSubmitResult({ pending: true });

      const res = await serverAction(data);
      setSubmitResult(res);
    },
    [serverAction]
  );

  return [submitResult, formAction];
};
