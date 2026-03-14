import { Field, FieldDescription, FieldLabel } from "../../components/ui/field"
import { Input } from "../../components/ui/input"
import { warningCodes } from "../context-hook"
import { useContext } from "react"


export function TodoTitle() {
  const { setTodoTitle, todoTitleWarning } = useContext(warningCodes);

  const getTodoTitle = (event) => {
    setTodoTitle(event.target.value);
  }


  return (
    <> 
     

      <Field className="py-[0.05rem]">
      <FieldLabel htmlFor="input-field-username" className=" ps-[1rem]  text-white">Todo Title</FieldLabel>
      <Input className={`text-white bg-[#313437] w-[18.6rem] ${todoTitleWarning ? 'border-red-700 border-2' : ''}`}
        id="input-field-username"
        type="text"
        placeholder="Visit the gym"
        onClick={(e) => e.stopPropagation()}
        onChange={getTodoTitle}
      />
    </Field>
    </>
  )
}