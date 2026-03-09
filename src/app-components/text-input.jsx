import { Field, FieldDescription, FieldLabel } from "../components/ui/field"
import { Textarea } from "../components/ui/textarea"
import { RingSound } from "./ringsound"
import { CategoryDropDown, RepeatTodo } from "./shad-component-config.jsx/todo-cat-dropdown";
import { CreateAndVerifyTodo } from "./create-and-auth";

export function TextareaField({ todoMessage, hourSelected, minuteSelected, soundSelected, repeatOption, categoryUserInput, dateInput, warning }) {

  function getUserInput(event) {
    todoMessage(event.target.value);
  }
  return (
    <div className="flex flex-col justify-center items-center py-2" onClick={(e) => e.stopPropagation()}>
      <Field>


        <FieldLabel htmlFor="textarea-message" className="text-white">Enter Todo Message</FieldLabel>
        <Textarea className="bg-[#313437] text-white" id="textarea-message" placeholder="Type your todo message here." onChange={getUserInput} />


      </Field>

      <div className="flex flex-col gap-y-3">
        <RingSound hourSelected={hourSelected} minuteSelected={minuteSelected} soundSelected={soundSelected} className="mt-2 " />

        <div className="flex justify-start items-center gap-x-4" onClick={(e) => e.stopPropagation()}>
          <CategoryDropDown categoryUserInput={categoryUserInput}/>
          <RepeatTodo repeatOption={repeatOption}/>
        </div>

        <CreateAndVerifyTodo dateInput={dateInput} warning={warning} />
      </div>
    </div>
  )
}
