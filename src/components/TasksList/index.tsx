import React from 'react'

import { updateTask, deleteTask, getTasksList } from '@/libs/actions'

const TasksList = async () => {
  const tasks = await getTasksList()

  return (
    <>
      {tasks.length === 0 && <p className="my-4">No tasks.</p>}
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,250px))] grid-rows-[auto] gap-2 my-4">
        {tasks.map(({ id, title, isCompleted, createdAt, updatedAt }) => {
          return (
            <li
              key={id}
              className="grid grid-rows-[subgrid] row-span-5 gap-2 border border-slate-300 bg-slate-100 rounded-xl p-2"
            >
              <h4 className="text-lg font-semibold">{title}</h4>
              <p>created: {createdAt.toLocaleTimeString()}</p>
              <p>updated: {updatedAt.toLocaleTimeString()}</p>
              <p> {isCompleted ? 'Done 👍' : 'In progress'}</p>
              <div className="flex gap-2 justify-between items-center">
                <form>
                  <button
                    formAction={updateTask.bind(null, {
                      id,
                      isCompleted: !isCompleted,
                    })}
                    className={
                      'px-2 py-1 rounded-lg hover:opacity-75 bg-orange-500'
                    }
                  >
                    {isCompleted ? 'todo' : 'complete'}
                  </button>
                </form>
                <form>
                  <button
                    formAction={deleteTask.bind(null, id)}
                    className="px-2 py-1 bg-red-500 hover:bg-red-600 focus:bg-red-700 rounded-lg "
                  >
                    delete
                  </button>
                </form>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TasksList
