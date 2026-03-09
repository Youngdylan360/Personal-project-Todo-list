import addIcon from "../assets/add-icon.svg"
import { useState, useEffect, useRef } from "react"
import { CalendarDate } from "./calendar";
import { TextareaField } from "./text-input";
import "./add-todo.css"


export function CreateTodo() {
  const [addBgBlur, setAddBgBlur] = useState(false);
  const [dateSelected, setDateSelected] = useState('');
  const [todoMessage, setTodoMessage] = useState('');
  const [hourSelected, setHourSelected] = useState('');  
  const [minuteSelected, setMinuteSelected] = useState('');
  const [soundSelected, setSoundSelected] = useState('');
  const [categoryUserInput, setCategoryUserInput] = useState('');
  const [repeatOption, setRepeatOption] = useState('');
  const [sendCalendarWarning, setSendCalendarWarning] = useState('');


  // check from source and pass value
  const warning = useRef(null);

  

  const addActivity = () => {
    setAddBgBlur(!addBgBlur);
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
            <span className="text-white absolute top-[0.1rem] left-3" onClick={addActivity}>back img </span>

            <CalendarDate warning={warning} 
              dateSelected={setDateSelected}
            />

            <div className="w-full flex justify-center items-center">
              <div className="w-[64%]">
                <TextareaField todoMessage={setTodoMessage} hourSelected={setHourSelected} minuteSelected={setMinuteSelected} soundSelected={setSoundSelected} categoryUserInput={setCategoryUserInput} repeatOption={setRepeatOption} dateInput={dateSelected} warning={warning}/>
              </div>
            </div>
            
            
          </div>
        )}
      </div>


    </div>
  )
}
