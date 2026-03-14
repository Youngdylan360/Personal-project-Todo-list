import React, { useEffect, useState } from "react"
import { Header } from "./app-components/header"
import { ActivityHistory } from "./app-components/activity-history"
import { CreateTodo } from "./app-components/Add-todo"
import { warningCodes } from "./app-components/context-hook"
import { add } from "date-fns"


function App() {
  const [addBgBlur, setAddBgBlur] = useState(false);
  const [todoMessage, setTodoMessage] = useState('');
  const [todoTitle, setTodoTitle] = useState('');
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
  const [todoMessageWarning, setTodoMessageWarning] = useState(false);
  const [todoTitleWarning, setTodoTitleWaring] = useState(false);

  const [saveUserData, setSaveUserData] = useState(() => {
    try {
      const saved = localStorage.getItem('userData');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse userData from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(saveUserData));
  }, [saveUserData]);

  // This function centralizes all validation logic.
  const validateInputs = () => {
    let isValid = true;

    // Validate Todo Message
    if (!todoMessage) {
      setTodoMessageWarning(true);
      isValid = false;
    } else {
      setTodoMessageWarning(false);
    }

    // Validate Date, Time, Sound, and Category
    if (!todoTitle) { setTodoTitleWaring(true); isValid = false;} else {
      setTodoTitleWaring(false);
    }
    if (!dateSelected) { setCalendarBorderWarning(true); isValid = false; } else { setCalendarBorderWarning(false) }
    if (!soundSelected) { setSoundSelectedWarning(true); isValid = false; } else { setSoundSelectedWarning(false) }
    if (!hourSelected && !minuteSelected) { setTimeSelectedWarning(true); isValid = false; } else { setTimeSelectedWarning(false) }
    if (!categoryUserInput) { setCategoryWarning(true); isValid = false; } else { setCategoryWarning(false) }

    return isValid;
  }





  const addActivity = () => {
    setAddBgBlur(!addBgBlur);
    // also reset the message warning
    setTodoMessageWarning(false);
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
    localStorage.removeItem('userMessage');
  }

  return (
    <>
      <div className="bg-[#313437] w-full"  >

        <warningCodes.Provider value={{ todoMessage, dateSelected, hourSelected, minuteSelected, soundSelected, categoryUserInput, repeatOption, addBgBlur, categoryWarning, timeSelectedWarning, soundSelectedWarning, calendarBorderWarning, setRenderCheckMark, renderCheckMark, validateInputs, todoMessageWarning, setSaveUserData, saveUserData, addActivity, setTodoTitle, todoTitleWarning }}>
          <Header addActivity={addActivity} setCategoryUserInput={setCategoryUserInput} />

          <div className="w-full flex flex-col mt-0.5 justify-center items-center">
            <ActivityHistory />
          </div>

          <div className="sticky bottom-0 rounded-md w-[99%] ">
            <CreateTodo setTodoMessage={setTodoMessage} setDateSelected={setDateSelected} setHourSelected={setHourSelected} setMinuteSelected={setMinuteSelected} setSoundSelected={setSoundSelected} setCategoryUserInput={setCategoryUserInput} setRepeatOption={setRepeatOption} addActivity={addActivity} setRenderCheckMark={setRenderCheckMark} />
          </div>
        </warningCodes.Provider>



      </div>
    </>
  )
}

export default App