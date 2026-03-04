import  briefCaseIcon  from "../assets/briefcase-icon.svg"
import  plusIcon from "../assets/plus-icon.svg"
import trashCanIcon from "../assets/trash-can.svg"
import pencilIcon  from "../assets/pencil-icon.svg"

export function Add() {


  return (
    <>
      <div className="w-[98%] h-[98%] absolute bg-[#1E232A] rounded-md flex pt-[1.5rem]  text-white box-border">

        
        <div className="flex flex-col items-start gap-y-[1rem] text-[1.3rem] ps-6">
          <div className="flex gap-x-3 pb-1 w-[14rem] h-[6rem] ">
            <img src={briefCaseIcon} className="w-[1.4rem] pb-7 inline" alt="Briefcase" />
            <span>
              <h1>Project Proposal</h1>
              <p className="text-base font-thin pt-1">Due:Fri, Oct 27</p>
            </span>
          </div>

          <div className="pb-9 flex gap-x-3 items-center">
            <img src={plusIcon} className="w-10" alt="plusIcon" />

            <h1 className="text-base font-extralight">Add new task</h1>
          </div>
        </div>

        <div className="pt-9 w-32 flex gap-x-4 ">
          <div className="bg-[#1a8cd8] py-1 px-2 h-8  rounded-md">WORK</div>
       
          <div className="-mt-9 ms-2 flex flex-col pb-4 gap-y-4 h-[10rem]">

            <img src={pencilIcon} alt="pencilIcon" />

            <img src={trashCanIcon} className="w-[1rem]" alt="trashCanIcon" />
            
          </div>
        </div>
      </div>
    </>
  )
}