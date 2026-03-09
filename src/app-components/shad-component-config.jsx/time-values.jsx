import { DropdownMenuItem } from "../../components/ui/dropdown-menu"
import { motion, useInView } from "motion/react"
import { useEffect, useRef } from "react";


const MotionDropdownMenuItem = motion(DropdownMenuItem)

export function TimeHM({ timeH, hourSelected }) {
  const timeEl = useRef([]);
  

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
        className="mt-5 bg-blue-600 text-black font-bold p-[0.7rem]"
        ref={(el) => (timeEl.current[index] = el)}
        onViewportEnter={() => {
            hourSelected(hour);
          }}
        key={hour}>{hour}</MotionDropdownMenuItem>
      ))}

      
    </>
  )
}

export function TimeMM({ timeM, minuteSelected }) {

  return (
    <>
      
      {timeM.map((minute) => (
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
        onViewportEnter={() => {minuteSelected(minute)}}
        key={minute}>{minute}</MotionDropdownMenuItem>
      ))}
    </>
  )
}