import { Button } from "../components/ui/button"
import { ButtonGroup } from "../components/ui/button-group"
import { Field, FieldLabel } from "../components/ui/field"
import { Input } from "../components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { warningCodes } from "./context-hook"
import { useContext } from "react"

export function Search() {

  const filterOption = ['Date', 'Message', 'Title' ]
  const {setGetSearchInput, startTransition, addBgBlur} = useContext(warningCodes);

  const screenWidth = window.innerWidth > 768;


  return (
    <>
      <div className={`flex justify-center items-center md:fixed md:z-10 md:top-3 md:left-56 lg:left-76 ${addBgBlur && screenWidth ? 'hidden' : ''}`}>
        <Field className="w-[90%] mt-4 ">
          <FieldLabel htmlFor="input-button-group"></FieldLabel>
          <ButtonGroup className="flex justify-center items-center">

            <Input id="input-button-group" className={`py-6 bg-[#2a2a2a] text-white text-[1.2rem] md:w-[28rem] md:shadow lg:w-[36rem]`} placeholder="Search & Filter Task..."  onChange={(event) => {
              startTransition(() => {
                setGetSearchInput(event.target.value);
              });
            }} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild >
                <Button className="bg-white w-[3rem]  border-r-0 py-[1.58rem] border-0 hover:bg-[#093b6d] !rounded-r-lg rounded-none" variant="outline">
                  <ion-icon name="filter-outline" className="w-4 text-black text-[6rem] scale-170"></ion-icon>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel >Filter By:</DropdownMenuLabel>
                <DropdownMenuGroup className="bg-green-300 lg:text-[1.8rem] lg:w-[10rem] ">
                  {filterOption.map((option) => (
                    <DropdownMenuItem  key={option}>{option}</DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </Field>
      </div>

    </>
  )
}

//<ion-icon name="filter-outline" className="w-4 text-black text-[6rem] scale-170"></ion-icon>