import { FunnelPlus } from "lucide-react";
import { Button } from "../components/ui/button";


export function CreateAndVerifyTodo({checkMessageStatus, authCalendarInput}) {

  const verifyInput = () => {
    checkMessageStatus();
    authCalendarInput();
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