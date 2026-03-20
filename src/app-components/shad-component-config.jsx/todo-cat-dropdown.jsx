import { useEffect, useState, useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Button } from "../../components/ui/button";
import { TimeContext } from "../context-hook";
import { warningCodes } from "../context-hook";


export function CategoryDropDown({ setCategoryUserInput  }) {
  const category = ['None', 'Work', 'Personal', 'Study', 'Others'];

  // 1. Consume all required values from the context in a single call.
  const { categoryUserInput, categoryWarning } = useContext(TimeContext);
  const { renderCheckMark, setRenderCheckMark, checkMark, categoryEdit, verifyDataRender, setCategoryEdit} = useContext(warningCodes);
  const [changeTxtEl, setChangeTxtEl] = useState('Todo Category');

  useEffect(() => {
    if (!categoryWarning) {
      setChangeTxtEl('Todo Category');
    } else {
      setChangeTxtEl('Choose Category');
    }

    if (checkMark) {
      setRenderCheckMark(checkMark);
    }
    if (categoryEdit) {
      setCategoryUserInput(verifyDataRender[0].category);
      setRenderCheckMark(verifyDataRender[0].category);
    }


  }, [categoryWarning, checkMark, categoryEdit]);



  useEffect(() => {
    if (categoryUserInput) {
      setChangeTxtEl('Todo Category')
    }
  }, [categoryUserInput]);

  const getClickedItem = (activity) => {
    setCategoryEdit(false);
    setCategoryUserInput(activity)

    if (renderCheckMark === activity) {
      setRenderCheckMark(null);
    } else {
      setRenderCheckMark(activity);
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`${categoryWarning ? 'text-red-500' : ''} ${categoryUserInput ? 'text-black' : ''} `} children={changeTxtEl}></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Select Todo Category</DropdownMenuLabel>
            <div className="[scrollbar-width:none] h-[5rem] overflow-y-auto">
              {
                category.map((activity) => (
                  <DropdownMenuItem key={activity} className="!hover:bg-[#424546]" onClick={() => 
                  getClickedItem(activity)
                  }>{activity}{renderCheckMark === activity ? <ion-icon name="checkmark-outline" class="text-green-700 font-bold ps-[3rem] "></ion-icon> : ''}</DropdownMenuItem>
                ))
              }
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export function RepeatTodo({ repeatOption }) {
  const repeat = ['None', 'Everyday', 'week', 'Month', 'Year'];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Repeat</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Repeat Todo</DropdownMenuLabel>
            <div className="[scrollbar-width:none] h-[5rem] overflow-y-auto">
              {
                repeat.map((times) => (
                  <DropdownMenuItem key={times} onClick={() => repeatOption(times)}>{times}</DropdownMenuItem>
                ))
              }
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}