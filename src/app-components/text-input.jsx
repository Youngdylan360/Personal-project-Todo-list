import { Field, FieldLabel } from "../components/ui/field"
import { Textarea } from "../components/ui/textarea"
import { RingSound } from "./ringsound"
import { useState, useEffect } from "react"
import { CategoryDropDown, RepeatTodo } from "./shad-component-config.jsx/todo-cat-dropdown";
import { CreateAndVerifyTodo } from "./create-and-auth";
import { TimeContext } from "./context-hook";

export function TextareaField({ todoMessage, hourSelected, minuteSelected, soundSelected, repeatOption, setCategoryUserInput, dateInput, authCalendarInput, soundSelectedWarning, userAlertSound, timeSelectedWarning, setRenderCheckMark }) {
  const [textAreaEl, setTextAreaEl] = useState(false);
  const [removeTextBorderWarning, setRemoveTextBorderWarning] = useState(false);


  // authenticating user message input
  const authUserMessageInput = () => {
    if (!message) {
      setTextAreaEl(true);
    } else {
      setTextAreaEl(false);
    }
  }

  // Use state to manage the textarea's value, initializing from localStorage.
  // The function passed to useState runs only on the initial render.
  const [message, setMessage] = useState(() => {
    try {
      const savedMessage = localStorage.getItem('userMessage');
      // We need to parse the JSON string from localStorage.
      // If nothing is saved, return an empty string.
      return savedMessage ? JSON.parse(savedMessage) : '';
    } catch (error) {
      // If parsing fails, return an empty string.
      console.error("Failed to parse userMessage from localStorage", error);
      return '';
    }
  });

  // Use an effect to sync the state back to localStorage and notify the parent component.
  useEffect(() => {
    localStorage.setItem('userMessage', JSON.stringify(message));
    todoMessage(message);

    if (message) {
      setRemoveTextBorderWarning(true);
    } else {
      setRemoveTextBorderWarning(false);
    }

  }, [message, todoMessage]);

  // Update state when the user types in the textarea.
  function handleInputChange(event) {
    setMessage(event.target.value);

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center py-2"  >
        <Field>
          <div onClick={(e) => e.stopPropagation()} className="box-border flex flex-col justify-center items-center">
            <FieldLabel htmlFor="textarea-message" className="text-white pt-1 pb-2 pe-[7.5rem]">Enter Todo Message</FieldLabel>
            {/* The Textarea is now a controlled component. Its value is driven by state. */}
            <Textarea className={`bg-[#313437] w-[18.6rem] text-white ${textAreaEl ? 'border-2 border-red-500' : ''} ${removeTextBorderWarning === true ? 'border-[0.05rem] border-white' : ''}`} id="textarea-message" placeholder={`${textAreaEl ? 'Please enter a Todo message' : 'Type your todo message here...'}`} onChange={handleInputChange} value={message} onClick={(e) => e.stopPropagation()} />
          </div>
        </Field>


        <div className="flex flex-col gap-y-3">
          <RingSound hourSelected={hourSelected} minuteSelected={minuteSelected} soundSelected={soundSelected} userAlertSound={userAlertSound} soundSelectedWarning={soundSelectedWarning} timeSelectedWarning={timeSelectedWarning} onClick={(e) => e.stopPropagation()} className="mt-2 " />


          <div className="flex justify-start items-center gap-x-4" onClick={(e) => e.stopPropagation()}>
            <CategoryDropDown setRenderCheckMark={setRenderCheckMark} setCategoryUserInput={setCategoryUserInput} />
            <RepeatTodo repeatOption={repeatOption} />
          </div>

          <CreateAndVerifyTodo checkMessageStatus={authUserMessageInput} authCalendarInput={authCalendarInput} message={message} />

        </div>
      </div>
    </>
  )
}
