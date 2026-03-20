import { useState, useEffect } from "react"
import { warningCodes } from "../context-hook";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../../components/ui/dropdown-menu"
import { useContext } from "react";
import { it } from "date-fns/locale";


export function SoundList({ sound, soundSelected }) {
  const [playingSound, setPlayingSound] = useState(null);

  const { verifyDataRender, setTrackEditBtn, trackEditBtn, setSoudEdit, soundEdit } = useContext(warningCodes);

  const playPauseSound = (item) => {
    if (playingSound === item) {
      setPlayingSound(null);
    } else {
      setPlayingSound(item);
    }

    setTrackEditBtn(false);
  }

  


  useEffect((item) => {
    if (trackEditBtn && verifyDataRender) {
      setPlayingSound(verifyDataRender[0]?.sound);
    } else {
      setPlayingSound(null);
    }

    if (soundEdit) {
      console.log('soundEdit is true, setting sound:', verifyDataRender[0]?.sound);
      soundSelected(verifyDataRender[0].sound);
    }
  }, [trackEditBtn, verifyDataRender, soundEdit]);

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel>Select Alert Sound</DropdownMenuLabel>
        <div className={`h-[5rem] font-bold w-[8.2rem]  [scrollbar-width:none] overflow-y-auto `}>
          {sound.map((item) => (
            <DropdownMenuItem key={item} onClick={(e) => {
              setSoudEdit(false);
              soundSelected(item);
              e.stopPropagation();
            }} className={`${trackEditBtn && verifyDataRender && verifyDataRender[0]?.sound === item ? "bg-blue-700 text-white focus:bg-blue-700 focus:text-white" : ""} `}>
              <div className="ps-2 w-[7.4rem] " onClick={() => {
                playPauseSound();
              }}>
                {item}
              </div>

              <div className=" p-1 " onClick={(e) => {
                e.stopPropagation();
                playPauseSound(item);
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
              //find way to send user uploaded song to soundSelected
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