import { FunnelPlus } from "lucide-react";
import { Button } from "../components/ui/button";

export function CreateAndVerifyTodo({dateInput, warning}) {

  const verifyInput = () => {
    if (!dateInput) {
      warning.current.innerHTML = 'Please choose a date';
    } else {
      warning.current.innerHTML = 'Select a due date for your Todo';
    }
  }


  return (
    <>
      <Button onClick={(e) => e.stopPropagation(
        verifyInput()
      )}>Add Todo</Button>
    </>
  )
}