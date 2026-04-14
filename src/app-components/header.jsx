import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Search } from "./search";
import { ActivityHistory } from "./activity-history";
import { motion, useTime, useTransform } from "motion/react";
import { Add } from "./add-activity";
import { warningCodes } from "./context-hook";
import { useContext } from "react";
import { CalendarBasic } from "./calendar";
import { TreePalm } from "lucide-react";

export function Header({ addActivity, setCategoryUserInput }) {
  const time = useTime();

  const [getCardState, setGetCardState] = useState(false);

  useEffect(() => {
    if (getCardState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [getCardState]);
  const MotionButton = motion.create(Button);

  const { setRenderCheckMark, getSearchInput, addBgBlur, saveUserData } =
    useContext(warningCodes);

  const rotate = useTransform(time, [0, 28000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (rot) => {
    return `conic-gradient(from ${rot}deg, #391689, #313437, #313437, #391689, #391689, #313437, #313437, #391689, #391689, #313437, #313437, #391689)`;
  });

  const buttonGradient = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #391689, #056362, #391689, #056362)`;
  });

  const pulsingBg = useTransform(time, (t) => {
    const blur = (Math.sin(t / 1000) + 1) * 6;
    return `blur(${blur}px)`;
  });

  const firstItem = saveUserData.findIndex((data) => {
    
  })

  return (
    <>
      <div className="box-border">
        <div className="flex flex-col justify-center items-start box-border md:fixed md:items-start breake:w-[100%] breake:items-center md:bg-[#272727] breake:gap-y-8 lg:w-[18rem] md:justify-start md:w-[12rem] ">
          <div className="flex ms-3 md:ms-8 md:ms-1.5 md:w-[12rem]  w-[16rem] h-16 contain-content items-center gap-x-4 md:gap-x-2 lg:gap-x-5  lg:ms-3.5">
            <ion-icon
              name="moon-outline"
              className="w-8 h-8 font-semibold text-[#ffffff]"
            ></ion-icon>
            <h1 className="text-2xl text-white">Focus: To-Do</h1>
          </div>
        </div>

        <div className="md:flex md:justify-start">
          <div
            className={`breake:w-[100%] breake:flex breake:justify-center breake:items-center  md:fixed md:left-0 md:w-[14rem] md:bg-[#272727] md:bottom-0 lg:w-[18rem] ${addBgBlur ? "z-[0]" : "z-[30]"}`}
          >
            <div
              className={`flex justify-start items-center gap-4  overflow-x-scroll [scrollbar-width:none] w-[24rem] breake:items-center ps-4 md:ps-0 pt-0 md:pt-8 pb-0 md:justify-start h-[2.8rem] breake:w-[100%] breake:justify-center sm:w-[31rem] md:w-[100%] md:flex-col md:gap-y-4  md:h-[91vh]`}
            >
              <motion.div
                className="p-px rounded-full relative md:rounded-md  "
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="rounded-full md:rounded-md  absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(#391689, #056362, #391689, #056362)",
                    filter: pulsingBg,
                  }}
                  variants={{
                    rest: { opacity: 1, transition: { duration: 0.5 } },
                    hover: { opacity: 1, transition: { duration: 0.5 } },
                  }}
                />

                <motion.div
                  className="md:rounded-md rounded-full absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(#391689, #056362, #391689, #056362)",
                    filter: pulsingBg,
                  }}
                  variants={{
                    rest: { opacity: 1, transition: { duration: 0.5 } },
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.5 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                  }}
                />

                <MotionButton
                  className="px-6 tryclass bg-[#414141] rounded-full md:rounded-md text-[0.9rem] py-3 md:h-[5.7rem] md:w-[9.5rem] relative hover:bg-[#414141]"
                  whileHover={{ scaleX: 1.05, scaleY: 1.05 }}
                  onClick={() => {
                    addActivity();
                    setCategoryUserInput("work");
                    setRenderCheckMark("work");
                  }}
                >
                  <ion-icon
                    className="text-blue-800 "
                    name="hammer-outline"
                  ></ion-icon>
                  WORK
                </MotionButton>
              </motion.div>

              <motion.div
                className="p-px md:rounded-md inset-0 relative rounded-full"
                initial="rest"
                whileHover="hover"
                animate="rest"
                whileTap="tap"
                whileDrag="hover"
              >
                <motion.div
                  className="rounded-full md:rounded-md  absolute inset-0"
                  style={{
                    background: buttonGradient,
                    filter: pulsingBg,
                  }}
                  variants={{
                    rest: {
                      opacity: 0,
                      transition: { duration: 0.5 },
                    },
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.5 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                    tap: { opacity: 1, transition: { duration: 0.1 } },
                    scaleX: 1.05,
                    scaleY: 1.05,
                  }}
                />
                <MotionButton
                  className="px-6 md:h-[5.7rem] md:w-[9.5rem] rounded-full md:rounded-md bg-[#414141] text-[0.9rem] py-3 relative hover:bg-[#414141]"
                  whileHover={{ scaleX: 1.05, scaleY: 1.05 }}
                  onClick={() => {
                    addActivity();
                    setCategoryUserInput("Personal");
                    setRenderCheckMark("Personal");
                  }}
                >
                  PERSONAL
                </MotionButton>
              </motion.div>

              <motion.div
                className="p-px md:rounded-md relative rounded-full"
                initial="rest"
                whileTap="tap"
                whileHover="hover"
              >
                <motion.div
                  className=" absolute md:rounded-md  inset-0 rounded-full"
                  style={{
                    background: buttonGradient,
                    filter: pulsingBg,
                  }}
                  variants={{
                    rest: { opacity: 0, transition: { duration: 0.1 } },
                    tap: {
                      opacity: 1,
                      transition: { duration: 0.001 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.5 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                  }}
                />
                <MotionButton
                  className="px-6 md:h-[5.7rem] md:w-[9.5rem] relative md:rounded-md rounded-full bg-[#414141] text-[0.9rem] py-3 hover:bg-[#414141]"
                  whileHover={{ scaleX: 1.05, scaleY: 1.05 }}
                  onClick={() => {
                    addActivity();
                    setCategoryUserInput("Study");
                    setRenderCheckMark("Study");
                  }}
                >
                  STUDY
                </MotionButton>
              </motion.div>

              <motion.div
                className="p-px md:rounded-md relative rounded-full"
                initial="rest"
                whileHover="hover"
                animate="rest"
                whileTap="tap"
                whileDrag="hover"
              >
                <motion.div
                  className="rounded-full md:rounded-md absolute inset-0"
                  style={{
                    background: buttonGradient,
                    filter: pulsingBg,
                  }}
                  variants={{
                    rest: {
                      opacity: 0,
                      transition: { duration: 0.5 },
                    },
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.5 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                    tap: {
                      opacity: 1,
                      transition: { duration: 0.1 },
                      scaleX: 1.05,
                      scaleY: 1.05,
                    },
                  }}
                />
                <MotionButton
                  className="px-6 md:h-[5.7rem] md:w-[9.5rem] md:rounded-md rounded-full bg-[#414141] text-[0.9rem] py-3 relative hover:bg-[#414141]"
                  whileHover={{ scaleX: 1.05, scaleY: 1.05 }}
                  onClick={() => {
                    addActivity();
                    setCategoryUserInput("Others");
                    setRenderCheckMark("Others");
                  }}
                >
                  OTHERS
                </MotionButton>
              </motion.div>
            </div>
          </div>

          <div className="lg:ms-[4rem] ">
            <div className=" lg:flex-col lg:justify-center lg:items-stretch md:ms-[18rem] lg:ms-[14rem] lg:w-[64%] lg:p-[5rem] overflow-y-scroll">
              <div
                className={` ${addBgBlur ? "hidden" : " md:h-[8rem] md:w-[31.8rem] md:rounded-md md:flex md:justify-center md:items-center md:pb-8 md:fixed md:top-2 md:z-10 md:left-51 md:bg-white-800/2 md:backdrop-blur-lg md:ms-[1.1rem] lg:w-[38rem] lg:left-79 lg:ms-[0rem]"} `}
              ></div>

              <motion.div>
                <Search />
              </motion.div>

              {!getSearchInput ? (
                <div>
                  <div className="w-full flex justify-center items-center">
                    <motion.div
                      className="flex relative flex-col w-[23.6rem] rounded-md div p-px inset-0 h-44 mt-7 md:w-[31rem] lg:w-[41rem] lg:h-[13rem] justify-center lg:mt-17 md:mt-38 items-center  wrapper"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      whileTap="hover"
                      onClick={() => {
                        addActivity();
                      }}
                    >
                      <motion.div
                        className="absolute flex justify-center items-center inset-0 rounded-md"
                        style={{ background: rotatingBg }}
                        variants={{
                          rest: { opacity: 0, transition: { duration: 0.5 } },
                          hover: {
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                            },
                            scaleX: 1.05,
                            scaleY: 1.05,
                          },
                        }}
                      />
                      <Add />
                    </motion.div>
                  </div>

                  <div className="w-full h-8 flex justify-center items-center lg:pt-1">
                    <p className="w-[16rem] md:w-[20rem] mt-8 h-[0.23rem] bg-[#056362] "></p>
                  </div>
                </div>
              ) : (
                <div className="pt-[rem]"></div>
              )}

              <div className="w-full flex flex-col mt-0.5 justify-center items-center">
                <ActivityHistory />
              </div>
            </div>
          </div>
        </div>

        <div>
          <motion.div
            whileHover={{ scaleX: 1.02, scaleY: 1.02 }}
            className={`fixed w-[19.3rem] h-[14rem] lg:right-11 top-3 md:right-0 hidden visible:block ${addBgBlur ? "z-[0]" : "z-[60]"}`}
            onMouseEnter={() => setGetCardState(true)}
            onMouseLeave={() => setGetCardState(false)}
          >
            <Card className="flex flex-col h-[100%] bg-[#1E232A] text-white border-0 justify-start items-start gap-y-1 ">
              <CardHeader className=" w-[100%] inline py-1 flex justify-start items-center gap-x-9 ">
                Current Project

                <div className="bg-green-500 text-white px-4 rounded-md">
                  PERSONAL
                </div>
              </CardHeader>

              <CardTitle className="m-0 p-0 ps-6 pt-1 break-words w-[100%] h-[2.8rem] overflow-y-auto">Lorem ipsum dolor sit amet consectetur adipisici</CardTitle>

              <CardContent
                className="flex-1 overflow-y-auto h-[8rem] break-words pt-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                molestiae fugiat, accusantium repudiandae voluptatibus nostrum
                expedita beatae veniam unde aut sed facere illum? Delectus harum
                iusto fugiat, architecto dignissimos temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid architecto rem suscipit repudiandae minima placeat maiores quaerat molestias at sequi, corrupti, quis in cupiditate blanditiis ullam quae modi. Praesentium.
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="fixed lg:right-11 bottom-7 md:right-0 hidden visible:block"
          whileHover={{ scaleX: 1.02, scaleY: 1.02 }}
        >
          <CalendarBasic />
        </motion.div>
      </div>
    </>
  );
}
