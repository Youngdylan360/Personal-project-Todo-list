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


export function CategoryDropDown({ setCategoryUserInput, setRenderCheckMark }) {
  const category = ['None', 'work', 'Personal', 'Study', 'Others'];

  // 1. Consume all required values from the context in a single call.
  const { categoryUserInput, categoryWarning } = useContext(TimeContext);
  const { renderCheckMark } = useContext(warningCodes);
  const [changeTxtEl, setChangeTxtEl] = useState('Todo Category');

  useEffect(() => {
    if (categoryUserInput) {
      setChangeTxtEl('Todo Category');
    } else {
      setChangeTxtEl('Choose Category');
    }
  }, [categoryUserInput, categoryWarning]);

  const getClickedItem = (activity) => {
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
                  <DropdownMenuItem key={activity} className="hover:bg-[#424546]" onClick={() => 
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