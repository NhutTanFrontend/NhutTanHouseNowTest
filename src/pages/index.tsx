import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [getValue, setGetValue] = useState('')
  const [indexBtn, setIndexBtn] = useState(0)

  const getFil = (e: string) => {
    if (e === 'all') {
      setGetValue('')
      setIndexBtn(0)
    } else if (e === 'pending') {
      setGetValue(e)
      setIndexBtn(1)
    } else if (e === 'completed') {
      setGetValue(e)
      setIndexBtn(2)
    }
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="mt-10">
          <Tabs.Root defaultValue="all" onValueChange={getFil}>
            <Tabs.List aria-label="Todo Filters" className="flex gap-5">
              <Tabs.Trigger
                className={`${getValue === "" ? "bg-gray-700 text-white" : "text-gray-700 bg-white"} transition-all duration-200 rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium`}
                value="all"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`${getValue === "pending" ? "bg-gray-700 text-white" : "text-gray-700 bg-white"} transition-all duration-200 rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium`}
                value="pending"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                className={`${getValue === "completed" ? "bg-gray-700 text-white" : "text-gray-700 bg-white"} transition-all duration-200 rounded-full border border-gray-700 px-4 py-1.5 text-sm font-medium`}
                value="completed"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <TodoList getValue={getValue}/>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
