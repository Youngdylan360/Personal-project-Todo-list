import { Edit } from "./edit-todo"
import { warningCodes } from "./context-hook"
import { useContext } from "react"
import { motion } from "motion/react"
import { Button } from "../components/ui/button"
import pencilIcon from "../assets/pencil-icon.svg"
import trashCanIcon from "../assets/trash-can.svg"
import cartIcon from "../assets/cart-icon.svg"
import bookIcon from "../assets/book-icon.svg"
import { format } from "date-fns"



export function ActivityHistory() {
  const { saveUserData, editToggle, edit, setVerifyDataRender, addActivity, getSearchInput, filteredItem } = useContext(warningCodes);

  const getClickedItemId = (savedData) => {
    setVerifyDataRender([savedData]);
  }

  // Use saveUserData directly from context as the single source of truth.
  const hasData = saveUserData && saveUserData.length > 0;
  const renderList = getSearchInput ? filteredItem : saveUserData;
  console.log(saveUserData)

  return (
    <>
      {edit && <Edit />}
      <div className={`${saveUserData.length === 1 ? 'pb-[8rem] ' : ''}  ${saveUserData.length === 2 ? 'pb-[1rem] ' : ''} pt-4`}>
        {hasData ? (
          renderList.map((savedData) => (
            <motion.div key={savedData.id} className="md:ps-1.5">
              <motion.div  className={`flex flex-col w-[23.6rem] md:w-[31rem]  rounded-md p-[0.1rem] md:h-[7rem] bg-green-400  justify-center items-center gap-y-4 mb-1.5  `} 
              whileHover={{ scaleX: 1.02, scaleY: 1.02 }}
              >
                <motion.div className="flex w-[100%] h-[100%] justify-start items-start bg-[#1E232A] rounded-md"
                 onClick={() => {
                  editToggle();
                  getClickedItemId(savedData);
                }}>

                  <div className="flex flex-col text-white items-start md:gap-y-2 w-[60%] h-14 mt-4 ms-5">
                    <div className="flex gap-x-2 justify-center items-center">
                      <img src={cartIcon} alt="cartIcon" />
                      <h1 className="text-[1.2rem] md:text-[1.6rem] ">{savedData.title} </h1>
                    </div>

                    <p className="text-base font-thin pt-1 md:text-[1.2rem]">Due date: {format(new Date(savedData.date), "EEE, MMM d")}</p>
                  </div>


                  <div className={`pt-12 h-22 w-42 md:w-[11rem] flex ${['Work', 'None', 'Study'].includes(savedData.category) ? 'ps-4' : ''}`}>
                    <div className={`bg-[#056362] md:py-4 md:px-6 md:flex md:justify-center md:items-center  text-white px-4 h-6  rounded-md  ${['Work'].includes(savedData.category) ? 'bg-blue-500' : ''} ${['Study'].includes(savedData.category) ? 'bg-green-500' : ''} ${['Others'].includes(savedData.category) ? 'bg-purple-500' : ''}`}>{savedData.category}</div>

                    <div className="-mt-9 pt-2 w-16 ps-4 flex flex-col pb-4 gap-y-2 md:gap-y-3 md:ps-8 h-[5.4rem]">

                      <img src={pencilIcon} alt="pencilIcon" className="w-[1.5rem]" />

                      <img src={trashCanIcon} className="w-[1rem]" alt="trashCanIcon" />

                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )
          )) : (
          <div className={`${getSearchInput && filteredItem.length === 0 ? 'hidden' : ''} md:ps-1.5`}>
            <motion.div className="flex flex-col w-[23.6rem] md:w-[31rem] rounded-md p-[0.1rem] md:h-[7rem] bg-green-400  justify-center mb-1.5 items-center gap-y-4 " 
            whileHover={{ scaleX: 1.02, scaleY: 1.02 }}
            onClick={() => {
              addActivity();
            }}>
              <div 
              className="flex w-[100%] h-[100%] justify-start items-start bg-[#1E232A] rounded-md"
              >

                <div className="flex flex-col text-white items-start  w-[60%] h-14 mt-4 ms-5">
                  <div className="flex gap-x-2 justify-center items-center">
                    <img src={cartIcon} alt="cartIcon" /> <h1 className="text-[1.2rem]">Buy grocery </h1>
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
            </motion.div>

            <motion.div className="flex flex-col w-[23.6rem] md:w-[31rem] rounded-md p-[0.1rem] bg-green-400 mt-1.5 justify-center items-center gap-y-4" 
            whileHover={{ scaleX: 1.02, scaleY: 1.02 }}
            onClick={() => {
              addActivity();
            }}>
              <div className="flex  w-[100%] h-[100%] justify-start items-start bg-[#1E232A] rounded-md">

                <div className="flex flex-col text-white items-start  w-[58%] h-14 mt-4 ms-5">
                  <div className="flex gap-x-2 justify-center items-center">
                    <img src={bookIcon} alt="bookIcon" /> <h1 className="text-[1.2rem]">Review Chapter 5 </h1>
                  </div>

                  <p className="text-base font-thin pt-1">Due date: Mon, 30</p>
                </div>


                <div className="pt-12 h-22 w-32  flex md:w-52 md:ps-13  ">
                  <div className="bg-green-500 text-white px-4 h-6  rounded-md">STUDY</div>

                  <div className="-mt-9 pt-2 w-16 ps-4 flex flex-col pb-4 gap-y-2 h-[5.4rem]">

                    <img src={pencilIcon} alt="pencilIcon" className="w-[1.5rem]" />

                    <img src={trashCanIcon} className="w-[1rem]" alt="trashCanIcon" />

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )
        }
      </div>
    </>
  )
}
