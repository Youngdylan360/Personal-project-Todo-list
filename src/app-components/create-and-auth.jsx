import { FunnelPlus } from "lucide-react";
import { Button } from "../components/ui/button";
import { warningCodes } from "./context-hook";
import { useContext } from "react";


export function CreateAndVerifyTodo() {

  const {
    validateInputs,
    setSaveUserData,
    saveUserData,
    todoMessage,
    dateSelected,
    hourSelected,
    minuteSelected,
    soundSelected,
    categoryUserInput,
    repeatOption,
    addActivity
  } = useContext(warningCodes);

  const verifyInput = () => {
    const isFormValid = validateInputs();
    if (isFormValid) {
      const newTodo = {
        id: crypto.randomUUID(), // Use a simple unique ID for now
        message: todoMessage,
        date: dateSelected,
        time: `${hourSelected}:${minuteSelected}`,
        sound: soundSelected,
        category: categoryUserInput,
        repeat: repeatOption,
        completed: false
      };
      setSaveUserData([...saveUserData, newTodo]);
      addActivity();
    }
  }




  return (
    <>
      <Button onClick={(e) => {
        e.stopPropagation();
        verifyInput();
      }}>Add Todo</Button>
    </>
  )
}