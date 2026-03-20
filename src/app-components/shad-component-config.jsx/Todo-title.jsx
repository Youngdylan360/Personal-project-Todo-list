
import { Field, FieldDescription, FieldLabel } from "../../components/ui/field"
import { Input } from "../../components/ui/input"
import { warningCodes } from "../context-hook"
import { useContext, useEffect, useState, useRef } from "react"


export function TodoTitle() {
  const { setTodoTitle, todoTitleWarning, todoTitle, editBtnOn, verifyDataRender, trackTitleEdit, setTrackTitleEdit } = useContext(warningCodes);

  const [removeTitleWarning, setRemoveTitleWarning] = useState(false);
  const [title, setTitle] = useState(true);
  const titleEl = useRef(null);

  const getTodoTitle = (event) => {
    setTrackTitleEdit(false);
    setTodoTitle(event.target.value);
  }

  const saveTitleOnEdit = () => {
    
    if (trackTitleEdit ) {
      const titleInput = titleEl.current.value
      setTodoTitle(`${titleInput} `);
    }
  }

  useEffect(() => {
    if (todoTitle) {
      setRemoveTitleWarning(true);
    } else {
      setRemoveTitleWarning(false);
    }

    saveTitleOnEdit();
  }, [todoTitle, trackTitleEdit]);


  return (
    <>


      {editBtnOn ? (
        verifyDataRender.map((displayData) => (
          <Field key={displayData.id}>
            <FieldLabel htmlFor="input-field-username" className="  text-white">Todo Title</FieldLabel>
            <Input className={`text-white bg-[#313437] !w-[18.6rem]  ${todoTitleWarning ? 'border-red-700 border-2' : ''} ${removeTitleWarning ? 'border-white border-[0.05rem]' : ''}`}
              id="input-field-username"
              type="text"
              placeholder="Visit the gym..."
              onClick={(e) => e.stopPropagation(setTitle(false))}
              onChange={getTodoTitle}
              value={title ? displayData.title : todoTitle}
              ref={titleEl}
              
            />
          </Field>
        ))
      ) : (
        <Field>
          <FieldLabel htmlFor="input-field-username" className="  text-white">Todo Title</FieldLabel>
          <Input className={`text-white bg-[#313437] !w-[18.6rem]  ${todoTitleWarning ? 'border-red-700 border-2' : ''} ${removeTitleWarning ? 'border-white border-[0.05rem]' : ''}`}
            id="input-field-username"
            type="text"
            placeholder="Visit the gym..."
            onClick={(e) => e.stopPropagation()}
            onChange={getTodoTitle}
          />
        </Field>
      )

      }
    </>
  )
}