import { Button } from "../components/ui/button"
import { ButtonGroup } from "../components/ui/button-group"
import { Field, FieldLabel } from "../components/ui/field"
import { Input } from "../components/ui/input"

export function Search() {



  return (
    <>
      <div className="flex justify-center items-center">
        <Field className="w-[90%] mt-4">
          <FieldLabel htmlFor="input-button-group"></FieldLabel>
          <ButtonGroup className="">

            <Input id="input-button-group" className="py-6 bg-[#2a2a2a] text-white text-[1.2rem]" placeholder="Search & Filter Task..." />
            <Button className="py-6" variant="outline"><ion-icon name="filter-outline" className="w-4 text-black text-[6rem] scale-170"></ion-icon></Button>
          </ButtonGroup>
        </Field>
      </div>

    </>
  )
}