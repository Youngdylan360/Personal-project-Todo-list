import { Button } from "../components/ui/button"
import { Search } from "./search"
import { Add } from "./add-activity"
import { motion, useTime, useTransform } from "motion/react"

export function Header() {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (rot) => {
    return (`conic-gradient(from ${rot}deg, #ff4545, #006aff, #ff0095, #ff4545)`)
  })

  return (
    <>
      <div>
        <header className="flex flex-col justify-center box-border h-[10rem] gap-y-8">

          <div className="flex ms-8 w-[16rem] h-16 contain-content items-center gap-x-4">
            <ion-icon name="moon-outline" className="w-8 h-8 font-semibold text-[#ffffff]"></ion-icon>
            <h1 className="text-2xl text-white">Focus: To-Do</h1>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button className="px-6 rounded-full text-[0.9rem] bg-[#414141] py-3"> <ion-icon className="text-blue-800" name="hammer-outline"></ion-icon>WORK</Button>

            <Button className="px-6 rounded-full bg-[#414141] text-[0.9rem] py-3">PERSONAL</Button>

            <Button className="px-6 rounded-full bg-[#414141] text-[0.9rem] py-3">STUDY</Button>
          </div>
        </header>

        <div>
          <Search />
        </div>

        <div className="w-full flex justify-center items-center ">
          <motion.div className="flex relative flex-col w-[23.6rem] rounded-md div p-px inset-0 h-44 mt-7 justify-center items-center wrapper" 
          style={{
            background:
              rotatingBg,
          }}>
            <Add />
          </motion.div>
        </div>


      </div>
    </>
  )
}
