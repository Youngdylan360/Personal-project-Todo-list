import addIcon from "../assets/add-icon.svg"
import { useState, useEffect, useContext } from "react"
import { CalendarDate } from "./calendar";
import { TextareaField } from "./text-input";
import { TimeContext } from "./context-hook";
import { warningCodes } from "./context-hook";
import "./add-todo.css"


export function CreateTodo({setTodoMessage, setDateSelected, setHourSelected, setMinuteSelected, setSoundSelected, setCategoryUserInput, setRepeatOption, setCategoryWarning, setSoundSelectedWarning, setTimeSelectedWarning, setCalendarBorderWarning, addActivity, setRenderCheckMark}) {  

  const { todoMessage, dateSelected, hourSelected, minuteSelected, soundSelected, categoryUserInput, addBgBlur, calendarBorderWarning, categoryWarning, timeSelectedWarning, soundSelectedWarning } = useContext(warningCodes);

  //pratice useContext

  const authCalendarInput = () => {
    setCalendarBorderWarning(!dateSelected);
    setSoundSelectedWarning(!soundSelected);
    if (!hourSelected && !minuteSelected) {
      setTimeSelectedWarning(true);
    } else {
      setTimeSelectedWarning(false);
    }
    
    setCategoryWarning(!categoryUserInput)
  }

  

  // const textInputCheck = () => {
  //   if (!textInput.current.innerValue) {
  //     console.log('no text entered');
  //   }
  // }



  useEffect(() => {
    if (addBgBlur) {
      // Prevent scrolling on the body when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset the style when the component unmounts
    return () => { document.body.style.overflow = 'unset' };
  }, [addBgBlur]); // This effect runs whenever addBgBlur changes

  return (
    <div className="flex justify-center ">
      <div className="w-[16rem] bg-[#313437] rounded-full flex justify-center items-center mt-6 mb-2 sticky top-o todo-bg shadow-2xl">
        <img src={addIcon} onClick={addActivity} className="w-[6rem]" alt="" />

        {addBgBlur && (
          <div className="fixed flex-col pt-8 justify-center items-center top-0 left-0 z-40 overflow-auto bottom-0 bg-white-800/2 backdrop-blur-lg w-full h-full" onClick={addActivity}>
            <span className="text-white absolute top-[0rem] left-0" onClick={addActivity}><ion-icon name="arrow-back-outline" class="w-[3.3rem] pt-4  pe-4"
            ></ion-icon></span>

            <CalendarDate
              dateSelected={setDateSelected}
              calendarBorderWarning={calendarBorderWarning}
              dateInput={dateSelected}
              />

            <div className="w-full flex justify-center items-center">
              <div className="w-[64%]">
                <TimeContext.Provider value={{hourSelected, categoryUserInput, categoryWarning}}>
                  <TextareaField todoMessage={setTodoMessage} hourSelected={setHourSelected} minuteSelected={setMinuteSelected} soundSelected={setSoundSelected} setCategoryUserInput={setCategoryUserInput} repeatOption={setRepeatOption} dateInput={dateSelected} authCalendarInput={authCalendarInput} soundSelectedWarning={soundSelectedWarning} userAlertSound={soundSelected}
                  timeSelectedWarning={timeSelectedWarning} setRenderCheckMark={setRenderCheckMark}/>
                </TimeContext.Provider>
              </div>
            </div>


          </div>
        )}
      </div>


    </div>
  )
}
