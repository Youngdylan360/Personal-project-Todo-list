import React, { useState } from "react"
import { Header } from "./app-components/header"
import { ActivityHistory } from "./app-components/activity-history"
import { CreateTodo } from "./app-components/Add-todo"
import { warningCodes } from "./app-components/context-hook"
import { add } from "date-fns"


function App() {
  const [addBgBlur, setAddBgBlur] = useState(false);
  const [todoMessage, setTodoMessage] = useState('');
  const [dateSelected, setDateSelected] = useState('');
  const [hourSelected, setHourSelected] = useState('');
  const [minuteSelected, setMinuteSelected] = useState('');
  const [soundSelected, setSoundSelected] = useState('');
  const [categoryUserInput, setCategoryUserInput] = useState('');
  const [repeatOption, setRepeatOption] = useState('');
  const [renderCheckMark, setRenderCheckMark] = useState(null);

  // set warnings for authenticating data
  const [calendarBorderWarning, setCalendarBorderWarning] = useState(false);
  const [soundSelectedWarning, setSoundSelectedWarning] = useState(false);
  const [timeSelectedWarning, setTimeSelectedWarning] = useState(false);
  const [categoryWarning, setCategoryWarning] = useState(false);



  console.log(categoryUserInput);

  const addActivity = () => {
    setAddBgBlur(!addBgBlur);
    setDateSelected('');
    setTodoMessage('');
    setHourSelected('');
    setMinuteSelected('');
    setSoundSelected('');
    setCategoryUserInput('');
    setRepeatOption('');
    setCalendarBorderWarning('');
    setSoundSelectedWarning(false);
    setCategoryWarning(false);
    setTimeSelectedWarning(false);
  }

  return (
    <>
      <div className="bg-[#313437] w-full"  >

        <warningCodes.Provider value={{ todoMessage, dateSelected, hourSelected, minuteSelected, soundSelected, categoryUserInput, addBgBlur, categoryWarning, timeSelectedWarning, soundSelectedWarning, calendarBorderWarning, renderCheckMark }}>
          <Header addActivity={addActivity} setCategoryUserInput={setCategoryUserInput} />

          <div className="w-full flex flex-col mt-0.5 justify-center items-center">
            <ActivityHistory />
          </div>

          <div className="sticky bottom-0 rounded-md w-[99%] ">
            <CreateTodo setTodoMessage={setTodoMessage} setDateSelected={setDateSelected} setHourSelected={setHourSelected} setMinuteSelected={setMinuteSelected} setSoundSelected={setSoundSelected} setCategoryUserInput={setCategoryUserInput} setRepeatOption={setRepeatOption} setCalendarBorderWarning={setCalendarBorderWarning} setSoundSelectedWarning={setSoundSelectedWarning} setTimeSelectedWarning={setTimeSelectedWarning} setCategoryWarning={setCategoryWarning} addActivity={addActivity} setRenderCheckMark={setRenderCheckMark} />
          </div>
        </warningCodes.Provider>



      </div>
    </>
  )
}

export default App