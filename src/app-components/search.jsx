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
  const {setGetSearchInput, startTransition} = useContext(warningCodes);


  return (
    <>
      <div className="flex justify-center items-center">
        <Field className="w-[90%] mt-4 ">
          <FieldLabel htmlFor="input-button-group"></FieldLabel>
          <ButtonGroup className="flex justify-center items-center">

            <Input id="input-button-group" className="py-6 bg-[#2a2a2a] text-white text-[1.2rem]" placeholder="Search & Filter Task..."  onChange={(event) => {
              startTransition(() => {
                setGetSearchInput(event.target.value);
              });
            }}/>
            <Button className="bg-white w-[3rem] border-r-0" variant="outline">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className=" bg-white !rounded-r-lg rounded-none">
                  <Button className="py-[1.58rem] border-0 hover:bg-[#093b6d]">
                    <ion-icon name="filter-outline" className="w-4 text-black text-[6rem] scale-170"></ion-icon>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="">Filter By:</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {filterOption.map((option) => (
                      <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
                    ))}             
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </ButtonGroup>
        </Field>
      </div>

    </>
  )
}

//<ion-icon name="filter-outline" className="w-4 text-black text-[6rem] scale-170"></ion-icon>