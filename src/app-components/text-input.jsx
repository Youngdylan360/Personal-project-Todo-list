import { Field, FieldLabel } from "../components/ui/field"
import { Textarea } from "../components/ui/textarea"
import { RingSound } from "./ringsound"
import { useState, useEffect, useContext } from "react"
import { CategoryDropDown, RepeatTodo } from "./shad-component-config.jsx/todo-cat-dropdown";
import { CreateAndVerifyTodo } from "./create-and-auth";
import { TodoTitle } from "./shad-component-config.jsx/Todo-title";
import { warningCodes } from "./context-hook";

export function TextareaField({ todoMessage, hourSelected, minuteSelected, soundSelected, repeatOption, setCategoryUserInput, dateInput, soundSelectedWarning, userAlertSound, timeSelectedWarning, setRenderCheckMark }) {
  const { todoMessageWarning } = useContext(warningCodes);

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

  }, [message, todoMessage]);

  // Update state when the user types in the textarea.
  function handleInputChange(event) {
    setMessage(event.target.value);

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center py-2">
        <TodoTitle />


        <Field>
          <div onClick={(e) => e.stopPropagation()} className="box-border flex flex-col justify-center items-center">
            <div className="py-[0.55rem]">
              <FieldLabel htmlFor="textarea-message" className="text-white pt-1 pb-2 ps-[0.9rem]">Enter Todo Message</FieldLabel>
              {/* The Textarea is now a controlled component. Its value is driven by state. The border is controlled by context. */}
              <Textarea className={`bg-[#313437] w-[19.6rem] text-white ${todoMessageWarning ? 'border-2 border-red-500' : 'border-[0.05rem] border-white'} ${message ? 'border-white border-[0.05rem]' : ''}`} id="textarea-message" placeholder={`${todoMessageWarning ? 'Please enter a Todo message' : 'Type your todo message here...'}`} onChange={handleInputChange} value={message} onClick={(e) => e.stopPropagation()} />
            </div>
          </div>
        </Field>


        <div className="flex flex-col gap-y-3">
          <RingSound hourSelected={hourSelected} minuteSelected={minuteSelected} soundSelected={soundSelected} userAlertSound={userAlertSound} soundSelectedWarning={soundSelectedWarning} timeSelectedWarning={timeSelectedWarning} onClick={(e) => e.stopPropagation()} className="mt-2 " />


          <div className="flex justify-start items-center gap-x-4" onClick={(e) => e.stopPropagation()}>
            <CategoryDropDown setRenderCheckMark={setRenderCheckMark} setCategoryUserInput={setCategoryUserInput} />
            <RepeatTodo repeatOption={repeatOption} />
          </div>

          <CreateAndVerifyTodo />

        </div>
      </div>
    </>
  )
}
