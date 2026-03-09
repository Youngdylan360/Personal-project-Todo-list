import { Button } from "../components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,} from "../components/ui/dropdown-menu"
import { SoundList } from "./shad-component-config.jsx/sound-dropdown"

export function SounDDropDown({ soundSelected }) {

  const soundTracks = ['track1', 'track2', 'track3', 'track4', 'track5']
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Add Sound Alert</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex justify-center items-center">
          <div>
            <SoundList sound={soundTracks} />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
