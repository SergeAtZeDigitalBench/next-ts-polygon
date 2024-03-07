'use client'

import { useFormState } from 'react-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

import type { IServerActionResponse, FormValuesZip } from '@/types'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { regitrationSchemaZipcode } from '@/lib/schemas/registration'
import { handleResponseError } from '@/lib/utils'

const defaultValues: FormValuesZip = {
  first: '',
  last: '',
  email: '',
  zipCode: '',
}

interface IProps {
  onDataAction: (
    prevState: IServerActionResponse<FormValuesZip>,
    data?: FormData
  ) =>
    | IServerActionResponse<FormValuesZip>
    | Promise<IServerActionResponse<FormValuesZip>>
}

const RegisterServerAsyncValidation = ({
  onDataAction,
}: IProps): JSX.Element => {
  const [formState, formAction] = useFormState<
    IServerActionResponse<FormValuesZip>
  >(onDataAction, { data: null, error: null })

  const formProps = useForm<FormValuesZip>({
    defaultValues,
    resolver: zodResolver(regitrationSchemaZipcode),
  })

  // in case if JS is enabled
  const onSubmitSuccess: SubmitHandler<FormValuesZip> = async (values) => {
    const formData = new FormData()
    formData.append('first', values.first)
    formData.append('last', values.last)
    formData.append('email', values.email)
    formData.append('zipCode', values.zipCode)

    const response = await onDataAction({ data: null, error: null }, formData)

    console.log('Action submit response: ', response)
  }

  // in case if JS is enabled
  const onSubmitError: SubmitErrorHandler<FormValuesZip> = (errors) => {
    console.log('onSubmitError() :>> ', errors)
  }

  return (
    <Form {...formProps}>
      <div className="h-16 flex flex-col justify-center items-center">
        {formState.data && (
          <p className="text-green-700 font-semibold text-center">done!</p>
        )}
        {formState.error && (
          <p className="text-red-700 font-semibold text-center">
            {handleResponseError(formState.error)}
          </p>
        )}
      </div>

      <form
        // if JS disabled - it will proceed to serve raction
        action={formAction as any}
        // if JS enabled - it will call submit function
        onSubmit={formProps.handleSubmit(onSubmitSuccess, onSubmitError)}
        className=" max-w-3xl mt-4 flex flex-col gap-4 mx-auto"
      >
        <FormField
          control={formProps.control}
          name="first"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>Your first name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formProps.control}
          name="last"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormDescription>Your last name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formProps.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormDescription>Enter your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formProps.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip</FormLabel>
              <FormControl>
                <Input placeholder="90012" {...field} />
              </FormControl>
              <FormDescription>Enter your zipcode</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="my-4 flex gap-4 justify-end">
          <Button type="submit">submit</Button>
          <Button
            type="reset"
            variant="secondary"
            onClick={() => formProps.reset()}
          >
            reset
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default RegisterServerAsyncValidation
