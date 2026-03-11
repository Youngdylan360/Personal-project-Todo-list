import { Button } from "../components/ui/button"
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "../components/ui/dropdown-menu"
import { SoundList } from "./shad-component-config.jsx/sound-dropdown"


export function SounDDropDown({ soundSelected, soundSelectedWarning, userAlertSound }) {

  const soundTracks = ['track1', 'track2', 'track3', 'track4', 'track5'];
  const [removeAlertWarning, setRemoveAlertWarning] = useState(false);
  const [changeBtnEl, setChangeBtnEl] = useState('Add Sound Alert');

  useEffect(() => {
    if (userAlertSound) {
      setRemoveAlertWarning(true);
      setChangeBtnEl('Add Sound Alert');
    } else {
      setRemoveAlertWarning(false);
    }

  }, [userAlertSound]);

  useEffect(() => {
    if (soundSelectedWarning) {
      setChangeBtnEl('Choose Alert Sound');
    } else {
      setChangeBtnEl('Add Sound Alert');
    }
  }, [soundSelectedWarning]);



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`${soundSelectedWarning ? 'text-red-600' : ''} ${removeAlertWarning ? 'text-black ' : ''}`}
          children={changeBtnEl}>


        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex justify-center items-center">
          <div>
          <SoundList soundSelected={soundSelected} sound={soundTracks} />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
