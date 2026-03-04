import React from "react"
import { Header } from "./app-components/header"
import { ActivityHistory } from "./app-components/activity-history"

function App() {

  return (
    <>
      <div className="bg-[#313437] w-full h-[150vh]"  >
        <Header />

        <div className="w-full flex flex-col mt-0.5 justify-center items-center">
          <ActivityHistory />
        </div>
      </div>
    </>
  )
}

export default App