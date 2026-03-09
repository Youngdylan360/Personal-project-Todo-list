import { useState } from "react"
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../../components/ui/dropdown-menu"


export function SoundList({ sound }) {
  const [playingSound, setPlayingSound] = useState(null);

  const playPauseSound = (item) => {
    if (playingSound === item) {
      setPlayingSound(null);
    } else {
      setPlayingSound(item);
    }
  }

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel>Select Alert Sound</DropdownMenuLabel>
        <div className="h-[5rem] font-bold w-[8.2rem]  [scrollbar-width:none] overflow-y-auto ">
          {sound.map((item) => (
            <DropdownMenuItem key={item}>
                <div className="ps-2">
                  {item}
                </div> 
               
              <div className="ps-[2.2rem]" onClick={(e) => {
                e.stopPropagation()
                playPauseSound(item)
              }}>
                {playingSound === item ? <ion-icon name="pause-outline"></ion-icon> : <ion-icon name="play-outline"></ion-icon>}
              </div>
            </DropdownMenuItem> 
          ))}
          <DropdownMenuItem>
            Add My song
            <div onClick={(e) => {
                e.stopPropagation()
                playPauseSound()
              }}>
              {
                playingSound === null ? <ion-icon name="pause-outline"></ion-icon> : <ion-icon name="play-outline"></ion-icon>
              }
            </div> 
          </DropdownMenuItem>
        </div>

      </DropdownMenuGroup>
    </>
  )
}