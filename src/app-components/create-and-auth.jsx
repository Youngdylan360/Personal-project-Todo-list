import { FunnelPlus } from "lucide-react";
import { Button } from "../components/ui/button";
import { warningCodes } from "./context-hook";
import { useContext, useState } from "react";


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
    todoTitle,
    addActivity, 
    editBtnOn,
    replaceEdit
  } = useContext(warningCodes);

  const verifyInput = () => {
    const isFormValid = validateInputs();
    if (isFormValid) {
      const newTodo = {
        id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9) + Date.now().toString(36), // Use a simple unique ID for now
        message: todoMessage,
        date: dateSelected,
        time: `${hourSelected}:${minuteSelected}`,
        sound: soundSelected,
        category: categoryUserInput,
        repeat: repeatOption,
        title: todoTitle,
        completed: false
      };
      
      setSaveUserData([...saveUserData, newTodo]);
      addActivity();
    } else {
      console.log(hourSelected, minuteSelected);
    }
  }




  return (
    <>
      <Button onClick={(e) => {
        e.stopPropagation();
        if (editBtnOn) {
          replaceEdit();
          addActivity();
        } else {
          verifyInput();
        }
      }} children={editBtnOn ? 'Add Edits' : 'Add Todo'}></Button>
    </>
  )
}