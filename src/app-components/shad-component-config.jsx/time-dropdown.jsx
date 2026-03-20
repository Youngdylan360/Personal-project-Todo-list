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
import { TimeContext, warningCodes } from "../context-hook";
import { time } from "motion";


export function TimeDropDown({hourSelected, minuteSelected, timeSelectedWarning}) {
  const [removeTimeWarningEl, setRemoveTimeWarningEl] = useState('Due time');
  const [scrollToTime, setScrollToTime] = useState({ hour: null, minute: null });

  const { editBtnOn, verifyDataRender, hourSelected: selectedHour, minuteSelected: selectedMinute, setTimeSelectedWarning, timeEdit, setTimeEdit } = useContext(warningCodes);

  const timeH = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

  const timeM = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
  ]

  // This effect updates the button text based on whether a time has been selected
  // or if there is a validation warning.
  useEffect(() => {
    if (timeSelectedWarning) {
      setRemoveTimeWarningEl('Choose a Time');
    } else {
      setRemoveTimeWarningEl(`Due time`);
    }

    if (timeEdit && verifyDataRender && verifyDataRender.length > 0) {
      const [h, m] = verifyDataRender[0].time.split(':');
      hourSelected(h);
      minuteSelected(m);
    }
  }, [timeSelectedWarning, timeEdit, verifyDataRender]);


  const bringTimeInviewPort = () => {
    if (editBtnOn && verifyDataRender && verifyDataRender.length > 0) {
      const timeStr = verifyDataRender[0].time;
      if (timeStr && timeStr.includes(':')) {
        const [h, m] = timeStr.split(':');
        setScrollToTime({ hour: h, minute: m }, {
            behavior: 'smooth'
          });
      }
    }
  
  }

  return (

    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`${timeSelectedWarning ? 'text-red-500' : ''}  ${selectedHour ? 'text-black' : ''}`} children={removeTimeWarningEl}  onPointerDown={() => {
            bringTimeInviewPort();
            setTimeSelectedWarning(false);
            setTimeEdit(false);
          }}></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-amber-500 pt-0 [scrollbar-width:none] h-[7rem]">
          <DropdownMenuGroup className="relative">
            <DropdownMenuLabel className={`sticky top-0 pt-2 bg-amber-500 p-2 w-full opacity-100 z-50 `}>Select Due Time</DropdownMenuLabel>
            <div className="flex justify-center items-center">
              <div className="h-[5rem] [scrollbar-width:none] overflow-y-auto pb-2 ">
                <TimeHM timeH={timeH} hourSelected={hourSelected} scrollTo={scrollToTime.hour}/>
              </div>

              <div className="h-[5rem] [scrollbar-width:none] overflow-y-auto ps-3 pb-2">
                <TimeMM timeM={timeM} minuteSelected={minuteSelected} scrollTo={scrollToTime.minute} />
              </div>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  )
}
