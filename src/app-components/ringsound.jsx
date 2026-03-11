import { Button } from "../components/ui/button";
import { SounDDropDown } from "./dropdown";
import { TimeDropDown } from "./shad-component-config.jsx/time-dropdown";

export function RingSound({hourSelected, minuteSelected, soundSelected, soundSelectedWarning, userAlertSound, timeSelectedWarning }) {


  return (
    <>
      <div className="flex gap-x-3 pt-4" onClick={(e) => e.stopPropagation()}>
        <SounDDropDown soundSelected={soundSelected} soundSelectedWarning={soundSelectedWarning} userAlertSound={userAlertSound} />
        <TimeDropDown hourSelected={hourSelected} minuteSelected={minuteSelected} timeSelectedWarning={timeSelectedWarning}/>
        
      </div>
    </>
  )
}