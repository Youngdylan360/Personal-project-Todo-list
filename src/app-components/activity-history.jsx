import pencilIcon from "../assets/pencil-icon.svg"
import trashCanIcon from "../assets/trash-can.svg"


export function ActivityHistory() {


  return (
    <>
      <div className="flex flex-col w-[23.6rem] rounded-md p-[0.1rem] bg-green-400 mt-1.5 justify-center items-center gap-y-4">
        <div className="flex w-[100%] h-[100%] justify-start items-start bg-[#1E232A] rounded-md">

          <div className="flex flex-col text-white items-start  w-[60%] h-14 mt-4 ms-5">
            <div className="flex gap-x-2 justify-center items-center">
              img <h1 className="text-[1.2rem]">Buy grocery </h1>
            </div>

            <p className="text-base font-thin pt-1">Due date: Today</p>
          </div>


          <div className="pt-12 h-22 w-42  flex ">
            <div className="bg-[#056362] text-white px-4 h-6  rounded-md">PERSONAL</div>

            <div className="-mt-9 pt-2 w-16 ps-4 flex flex-col pb-4 gap-y-2 h-[5.4rem]">

              <img src={pencilIcon} alt="pencilIcon" className="w-[1.5rem]" />

              <img src={trashCanIcon} className="w-[1rem]" alt="trashCanIcon" />

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[23.6rem] rounded-md p-[0.1rem] bg-green-400 mt-1.5 justify-center items-center gap-y-4">
        <div className="flex  w-[100%] h-[100%] justify-start items-start bg-[#1E232A] rounded-md">

          <div className="flex flex-col text-white items-start  w-[58%] h-14 mt-4 ms-5">
            <div className="flex gap-x-2 justify-center items-center">
              img <h1 className="text-[1.2rem]">Review Chapter 5 </h1>
            </div>

            <p className="text-base font-thin pt-1">Due date: Mon, 30</p>
          </div>


          <div className="pt-12 h-22 w-32  flex  ">
            <div className="bg-red-500 text-white px-4 h-6  rounded-md">STUDY</div>

            <div className="-mt-9 pt-2 w-16 ps-4 flex flex-col pb-4 gap-y-2 h-[5.4rem]">

              <img src={pencilIcon} alt="pencilIcon" className="w-[1.5rem]" />

              <img src={trashCanIcon} className="w-[1rem]" alt="trashCanIcon" />

            </div>
          </div>
        </div>
      </div>


    </>
  )
}