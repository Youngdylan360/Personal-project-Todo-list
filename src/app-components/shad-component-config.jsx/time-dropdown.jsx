import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { TimeHM, TimeMM } from "./time-values";
import { useState, useEffect, useContext } from "react";
import { TimeContext } from "../context-hook";


export function TimeDropDown({hourSelected, minuteSelected, timeSelectedWarning}) {
  const [removeTimeWarningEl, setRemoveTimeWarningEl] = useState('Due time');
  const timeH = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

  const timeM = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
  ]
  // The value from TimeContext is an object: { hourSelected, categoryUserInput }
  // We can use object destructuring to get the `hourSelected` property from it.
  const { hourSelected: hourSelectedValue } = useContext(TimeContext);

  // This effect now correctly handles both the warning state and the selection state.
  useEffect(() => {
    if (timeSelectedWarning) {
      setRemoveTimeWarningEl('Choose a Time')
    } else {
      setRemoveTimeWarningEl('Due Time')
    }
  }, [timeSelectedWarning]);

  useEffect(() => {
    if (hourSelectedValue) {
      setRemoveTimeWarningEl('Due Time')
    }
  }, [hourSelectedValue])

  return (

    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`${timeSelectedWarning ? 'text-red-500' : ''}  ${hourSelectedValue ? 'text-black' : ''}`} children={removeTimeWarningEl}></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-amber-500 pt-0 [scrollbar-width:none] h-[7rem]">
          <DropdownMenuGroup className="relative">
            <DropdownMenuLabel className={`sticky top-0 pt-2 bg-amber-500 p-2 w-full opacity-100 z-50 `}>Select Due Time</DropdownMenuLabel>
            <div className="flex justify-center items-center">
              <div className="h-[5rem] [scrollbar-width:none] overflow-y-auto ">
                <TimeHM timeH={timeH} hourSelected={hourSelected}/>
              </div>

              <div className="h-[5rem] [scrollbar-width:none] overflow-y-auto ps-3">
                <TimeMM timeM={timeM} minuteSelected={minuteSelected}/>
              </div>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  )
}
