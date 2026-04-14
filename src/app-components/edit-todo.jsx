import { warningCodes } from "./context-hook"
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { format } from "date-fns";
import { useContext, useEffect } from "react"

export function Edit() {
  const { editToggle, verifyDataRender, allEditToggles, setDeleteBtn, deleteTodo } = useContext(warningCodes);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []); // The empty dependency array ensures this runs only on mount and unmount.

  return (
    <>

      {verifyDataRender && verifyDataRender.map((displayClickedData) => (
        <div key={displayClickedData.id} className="fixed flex-col pb-5 flex flex-col justify-center items-center top-0 left-0 z-40 overflow-auto bottom-0 bg-black-800/2 backdrop-blur-lg  w-full h-full  !gap-y-[1rem] box-border " onClick={() => {
          editToggle();
        }}>

          <div className="absolute top-3 text-white left-3" onClick={editToggle}>
            <ion-icon name="arrow-back-outline" class="w-[3.3rem]"
            ></ion-icon>
          </div>
          <div className="pb-8 w-[95%] !flex !justify-center !items-center" >
            <Card size="sm" className="mx-auto w-full max-w-sm bg-[#313437] text-white py-[0.7rem] gap-2" onClick={(e) => e.stopPropagation()}>
              <CardHeader className="py-0">
                <CardTitle >Todo Title</CardTitle>

              </CardHeader>
              <CardContent>
                <p className="font-bold text-base">
                  {displayClickedData.title}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-[95%] pb-8">
            <Card size="sm" className="mx-auto w-full max-w-sm bg-[#313437] text-white" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle>Todo Message</CardTitle>
                {/* <CardDescription>
                This card uses the email size variant
              </CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>
                  {displayClickedData.message}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-[95%] ">
            <Card size="sm" className="mx-auto w-full max-w-sm bg-[#313437] text-white" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle>Other Details</CardTitle>
                {/* <CardDescription>
                This card uses the email size variant
              </CardDescription> */}
              </CardHeader>
              <CardContent>
                <p>
                  Due date:<span className="ps-2">{format(new Date(displayClickedData.date), "EEE, MMM d")}</span>
                </p>

                <p>
                  Time: <span className="ps-1.5">{displayClickedData.time}</span>
                </p>

                <p>
                  Selected Sound:<span className="ps-2">{displayClickedData.sound}</span>
                </p>

                <p>
                  Category:<span className="ps-2">{displayClickedData.category}</span>
                </p>

                <p>
                  Repeat:<span className="ps-2">{displayClickedData.repeat}</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-[90%] pt-6 gap-x-4 flex justify-center items-center">
            <Button className="p-[1.5rem] bg-[#313437] border-white border-[0.05rem] rounded-md" onClick={(e) => {
              e.stopPropagation();
              editToggle();
              allEditToggles();
            }} >Edit</Button>
            <Button className="p-[1.5rem] bg-[#313437] border-white border-[0.05rem] rounded-md" onClick={(e) => {
              e.stopPropagation();
              editToggle();
              deleteTodo();
              setDeleteBtn(false);
            }}>Delete</Button>
          </div>
        </div>
      ))}

    </>
  )
}

// `${hourSelected}:${minuteSelected}`