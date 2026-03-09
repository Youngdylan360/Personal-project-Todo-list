import React from "react"
import { Header } from "./app-components/header"
import { ActivityHistory } from "./app-components/activity-history"
import { CreateTodo } from "./app-components/Add-todo"

function App() {

  return (
    <>
      <div className="bg-[#313437] w-full"  >
        <Header />

        <div className="w-full flex flex-col mt-0.5 justify-center items-center">
          <ActivityHistory />
        </div>

        <div className="sticky bottom-0 rounded-md w-[99%] ">
          <CreateTodo />
        </div>

      
      </div>
    </>
  )
}

export default App