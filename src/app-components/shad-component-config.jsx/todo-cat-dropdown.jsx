import { act } from "react";
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


export function CategoryDropDown({categoryUserInput}) {
  const category = ['None', 'work', 'Personal', 'Study', 'Others'];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Todo Category</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Select Todo Category</DropdownMenuLabel>
            <div className="[scrollbar-width:none] h-[5rem] overflow-y-auto">
              {
                category.map((activity) => (
                  <DropdownMenuItem key={activity} onClick={() => categoryUserInput(activity)}>{activity}</DropdownMenuItem>
                ))
              }
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export function RepeatTodo({repeatOption}) {
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