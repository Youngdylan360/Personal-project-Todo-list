import { Button } from "../components/ui/button"
import { Search } from "./search"
import { motion, useTime, useTransform } from "motion/react"
import { Add } from "./add-activity";
import { warningCodes } from "./context-hook";
import { useContext } from "react";
import { TreePalm } from "lucide-react";

export function Header({ addActivity, setCategoryUserInput }) {
  const time = useTime();

  const { setRenderCheckMark, getSearchInput } = useContext(warningCodes);

  const rotate = useTransform(time, [0, 28000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (rot) => {
    return (`conic-gradient(from ${rot}deg, #391689, #313437, #313437, #391689, #391689, #313437, #313437, #391689, #391689, #313437, #313437, #391689)`)
  });

  const buttonGradient = useTransform(rotate, (r) => {
    return (`conic-gradient(from ${r}deg, #391689, #056362, #391689, #056362)`)
  });

  const pulsingBg = useTransform(time, (t) => {
    const blur = (Math.sin(t / 1000) + 1) * 6;
    return `blur(${blur}px)`;
  });


  return (
    <>
      <div className="box-border">
        <header className="flex flex-col justify-center items-start  box-border h-[10rem] gap-y-8 md:items-center pt-3 ">

          <div className="flex ms-8 w-[16rem] h-16 contain-content items-center gap-x-4">
            <ion-icon name="moon-outline" className="w-8 h-8 font-semibold text-[#ffffff]"></ion-icon>
            <h1 className="text-2xl text-white">Focus: To-Do</h1>
          </div>

          <div className="flex justify-start items-center gap-2  overflow-x-scroll [scrollbar-width:none] w-[24rem] ps-2 sm:justify-center h-[2.8rem]">
            <motion.div className="p-[0.3rem] relative rounded-full"
              initial="rest"
              whileHover="hover"
              animate="rest">

              <motion.div className="rounded-full absolute inset-0"
                style={{
                  background: "conic-gradient(#391689, #056362, #391689, #056362)",
                  filter: pulsingBg,
                }}
                variants={{
                  rest: { opacity: 1, transition: { duration: 0.5 } },
                  hover: { opacity: 1, transition: { duration: 0.5 } }
                }}
              />
              <motion.div className="rounded-full absolute inset-0"
                style={{ background: "conic-gradient(#391689, #056362, #391689, #056362)" }}
                variants={{
                  rest: { opacity: 1, transition: { duration: 0.5 } },
                  hover: { opacity: 1, transition: { duration: 0.5 } }
                }}
              />
              <Button className="px-6 rounded-full text-[0.9rem] bg-[#414141] py-3 relative" onClick={() => {
                addActivity();
                setCategoryUserInput('work');
                setRenderCheckMark('work');
              }}> <ion-icon className="text-blue-800 " name="hammer-outline"></ion-icon>WORK</Button>

            </motion.div>

            <motion.div className="p-[0.3rem] relative rounded-full"
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap="tap"
              whileDrag="hover">

              <motion.div className="rounded-full absolute inset-0"
                style={{ background: buttonGradient }}
                variants={{
                  rest: {
                    opacity: 0, transition: { duration: 0.5 }
                  },
                  hover: {
                    opacity: 1, transition: { duration: 0.5 }
                  },
                  tap: { opacity: 1, transition: { duration: 0.1 } }
                }}
              />
              <Button className="px-6 rounded-full bg-[#414141] text-[0.9rem] py-3 relative" onClick={() => {
                addActivity();
                setCategoryUserInput('Personal');
                setRenderCheckMark('Personal');
              }}>PERSONAL</Button>

            </motion.div>

            <motion.div className="p-[0.3rem] relative rounded-full"
              initial="rest"
              whileTap="tap"
              whileHover="hover"
            >

              <motion.div className=" absolute inset-0 rounded-full"
                style={{ background: buttonGradient }}
                variants={{
                  rest: { opacity: 0, transition: { duration: 0.1 } },
                  tap: { opacity: 1, transition: { duration: 0.001 } },
                  hover: { opacity: 1, transition: { duration: 0.5 } }
                }}
              />
              <Button className="px-6 relative rounded-full bg-[#414141] text-[0.9rem] py-3" onClick={() => {
                addActivity();
                setCategoryUserInput('Study');
                setRenderCheckMark('Study');

              }}>STUDY</Button>



            </motion.div>

            <motion.div className="p-[0.3rem] relative rounded-full"
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap="tap"
              whileDrag="hover">

              <motion.div className="rounded-full absolute inset-0"
                style={{ background: buttonGradient }}
                variants={{
                  rest: {
                    opacity: 0, transition: { duration: 0.5 }
                  },
                  hover: {
                    opacity: 1, transition: { duration: 0.5 }
                  },
                  tap: { opacity: 1, transition: { duration: 0.1 } }
                }}
              />
              <Button className="px-6 rounded-full bg-[#414141] text-[0.9rem] py-3 relative" onClick={() => {
                addActivity();
                setCategoryUserInput('Others');
                setRenderCheckMark('Others');
              }}>OTHERS</Button>

            </motion.div>
          </div>
        </header>

        <motion.div>
          <Search />
        </motion.div>


        {
          !getSearchInput ? (
            <div>
              <div className="w-full flex justify-center items-center">
                <motion.div
                  className="flex relative flex-col w-[23.6rem] rounded-md div p-px inset-0 h-44 mt-7 justify-center items-center  wrapper"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  whileTap="hover"
                >
                  <motion.div
                    className="absolute flex justify-center items-center inset-0 rounded-md"
                    style={{ background: rotatingBg }}
                    variants={{
                      rest: { opacity: 0, transition: { duration: 0.5 } },
                      hover: { opacity: 1, transition: { duration: 0.5 } },
                    }}
                  />
                  <Add />
                </motion.div>
              </div>

              <div className="w-full h-8 flex justify-center items-center">
                <p className="w-52 mt-6 h-[0.23rem] bg-[#056362]"></p>
              </div>
            </div>
          ) : (
            <div className="pt-[rem]">

            </div>
          )
        }
      </div>



    </>
  )
}
