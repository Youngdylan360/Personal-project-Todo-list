import { DropdownMenuItem } from "../../components/ui/dropdown-menu"
import { motion, useInView } from "motion/react"
import { useEffect, useRef } from "react";


const MotionDropdownMenuItem = motion(DropdownMenuItem)

export function TimeHM({ timeH, hourSelected, scrollTo}) {
  const timeEl = useRef([]);

  useEffect(() => {
    if (scrollTo) {
      // Use setTimeout to allow enough time for the dropdown animation/render to complete
      const timeoutId = setTimeout(() => {
        const index = timeH.indexOf(scrollTo);
        if (index !== -1 && timeEl.current[index]) {
          timeEl.current[index].scrollIntoView({ block: "center" });
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [scrollTo]);

  return (
    <>
      {timeH.map((hour, index) => (
        <MotionDropdownMenuItem
        initial={{
          scale: 0.9
        }} whileInView={{
          scale: 1, 
        }} viewport={{
          once: true,
          amount: 0.8
        }} transition={{
          duration: 0.2
        }}
        className="mt-5 bg-blue-700 text-black font-bold p-[0.7rem]"
        ref={(el) => (timeEl.current[index] = el)}
         onViewportEnter={(e) => {
            hourSelected(hour);
          }}
        key={hour}>{hour}</MotionDropdownMenuItem>
      ))}

      
    </>
  )
}
export function TimeMM({ timeM, minuteSelected, scrollTo }) {
  const timeEl = useRef([]);

  useEffect(() => {
    if (scrollTo) {
      const timeoutId = setTimeout(() => {
        const index = timeM.indexOf(scrollTo);
        if (index !== -1 && timeEl.current[index]) {
          timeEl.current[index].scrollIntoView({ block: "center" });
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [scrollTo]);

  return (
    <>
      {timeM.map((minute, index) => (
        <MotionDropdownMenuItem 
        initial={{
          scale: 0.9
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.2
        }}
        className="mt-5 bg-accent font-bold text-black p-[0.7rem]"
        ref={(el) => (timeEl.current[index] = el)}
        onViewportEnter={(e) => {
          minuteSelected(minute);
        }}
        key={minute}>{minute}</MotionDropdownMenuItem>
      ))}
    </>
  )
}          