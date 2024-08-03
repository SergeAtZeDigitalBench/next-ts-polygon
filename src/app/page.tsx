import { Suspense } from 'react'

import TasksList from '@/components/TasksList'
import { addTask } from '@/libs/actions'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V.14 POLYGON
      </h1>
      <Suspense
        fallback={<p className="my-4 font-semibold">Loading tasks...</p>}
      >
        <TasksList />
      </Suspense>

      <form action={addTask} className="my-4 max-w-sm ">
        <fieldset className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskTitle" className="font-semibold text-xs">
              Task
            </label>
            <input
              id="taskTitle"
              name="title"
              type="text"
              className="px-2 py-1 border border-slate-200 rounded-xl"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-2 py-1 rounded-xl bg-green-500 hover:bg-green-600 focus:bg-green-700 border border-green-800"
            >
              add
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default Homepage
