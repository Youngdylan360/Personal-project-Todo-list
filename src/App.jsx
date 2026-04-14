import React, { useEffect, useState } from "react";
import { useTransition } from "react";
import { Header } from "./app-components/header";
import { ActivityHistory } from "./app-components/activity-history";
import { CreateTodo } from "./app-components/Add-todo";
import { warningCodes } from "./app-components/context-hook";

function App() {
  const [addBgBlur, setAddBgBlur] = useState(false);
  const [edit, setEdit] = useState(false);
  const [todoMessage, setTodoMessage] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [hourSelected, setHourSelected] = useState("");
  const [minuteSelected, setMinuteSelected] = useState("");
  const [soundSelected, setSoundSelected] = useState("");
  const [categoryUserInput, setCategoryUserInput] = useState("");
  const [repeatOption, setRepeatOption] = useState("");
  const [renderCheckMark, setRenderCheckMark] = useState(null);

  // set warnings for authenticating data
  const [calendarBorderWarning, setCalendarBorderWarning] = useState(false);
  const [soundSelectedWarning, setSoundSelectedWarning] = useState(false);
  const [timeSelectedWarning, setTimeSelectedWarning] = useState(false);
  const [categoryWarning, setCategoryWarning] = useState(false);
  const [todoMessageWarning, setTodoMessageWarning] = useState(false);
  const [todoTitleWarning, setTodoTitleWarning] = useState(false);

  const [saveUserData, setSaveUserData] = useState(() => {
    try {
      const saved = localStorage.getItem("userData");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse userData from localStorage", error);
      return [];
    }
  });

  //edit functionalities
  const [verifyDataRender, setVerifyDataRender] = useState(null);
  const [editBtnOn, setEditBtnOn] = useState(false);
  const [trackEditBtn, setTrackEditBtn] = useState(false);
  const [trackTitleEdit, setTrackTitleEdit] = useState(false);
  const [trackInputEl, setTrackInputEl] = useState(false);
  const [calendarEdit, setCalendarEdit] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState(false);
  const [soundEdit, setSoudEdit] = useState(false);
  const [timeEdit, setTimeEdit] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);

  //search functionalities
  const [getSearchInput, setGetSearchInput] = useState(null);

  const filteredItem = saveUserData.filter((userData) => {
    return (
      getSearchInput &&
      userData.title.toLowerCase().includes(getSearchInput.toLowerCase())
    );
  });
  //handle search in user data
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(saveUserData));

    if (getSearchInput === "") {
      setGetSearchInput(null);
    }
  }, [saveUserData, getSearchInput]);

  useEffect(() => {
    if (calendarEdit && verifyDataRender && verifyDataRender.length > 0) {
      setDateSelected(new Date(verifyDataRender[0].date));
    }
  }, [calendarEdit, verifyDataRender]);

  useEffect(() => {
    if (soundEdit && verifyDataRender && verifyDataRender.length > 0) {
      setSoundSelected(verifyDataRender[0].sound);
    }
  }, [soundEdit, verifyDataRender]);

  // This function centralizes all validation logic.
  const validateInputs = () => {
    let isValid = true;

    // Validate Todo Message
    if (!todoMessage) {
      setTodoMessageWarning(true);
      isValid = false;
    } else {
      setTodoMessageWarning(false);
    }

    // Validate Date, Time, Sound, and Category
    if (!todoTitle) {
      setTodoTitleWarning(true);
      isValid = false;
    } else {
      setTodoTitleWarning(false);
    }
    if (!dateSelected) {
      setCalendarBorderWarning(true);
      isValid = false;
    } else {
      setCalendarBorderWarning(false);
    }
    if (!soundSelected) {
      setSoundSelectedWarning(true);
      isValid = false;
    } else {
      setSoundSelectedWarning(false);
    }
    if (!hourSelected && !minuteSelected) {
      setTimeSelectedWarning(true);
      isValid = false;
    } else {
      setTimeSelectedWarning(false);
    }
    if (!categoryUserInput) {
      setCategoryWarning(true);
      isValid = false;
    } else {
      setCategoryWarning(false);
    }

    return isValid;
  };

  const allEditToggles = () => {
    setEditBtnOn(true);
    setTrackEditBtn(true);
    setTrackTitleEdit(true);
    setTrackInputEl(true);
    setCalendarEdit(true);
    setCategoryEdit(true);
    setSoudEdit(true);
    setTimeEdit(true);
    setRenderCheckMark(null);
    // Open modal and reset inputs/warnings manually (logic taken from addActivity)
    // We do NOT call addActivity() because it resets the Edit flags to false.
    setAddBgBlur(true);
    setTodoMessageWarning(false);
    setDateSelected("");
    setTodoMessage("");
    setHourSelected("");
    setMinuteSelected("");
    setCategoryUserInput("");
    setRepeatOption("");
    setTodoTitle("");
    localStorage.removeItem("userMessage");
  };

  //replace edit
  const replaceEdit = () => {
    // Ensure verifyDataRender is available and has an item to edit
    if (!verifyDataRender || verifyDataRender.length === 0) {
      console.warn("No item selected for editing.");
      return;
    }

    const editedItemId = verifyDataRender[0].id;

    // Create a new array by mapping over the existing saveUserData
    const updatedSaveUserData = saveUserData.map((data) => {
      if (data.id === editedItemId) {
        // This is the item being edited, replace it with new values from state
        return {
          id: editedItemId,
          message: todoMessage, // Use the current todoMessage state
          date: dateSelected, // Use the current dateSelected state
          time: `${hourSelected}:${minuteSelected}`, // Use current hour/minute states
          sound: soundSelected, // Use the current soundSelected state
          category: categoryUserInput, // Use the current categoryUserInput state
          repeat: repeatOption, // Use the current repeatOption state
          title: todoTitle, // Use the current todoTitle state
          completed: data.completed, // Keep the completed status as is
        };
      }
      // For other items, keep them unchanged
      return data;
    });

    // Update the state with the new array
    setSaveUserData(updatedSaveUserData);
  };

  //delete todo
  const deleteTodo = () => {
    if (!verifyDataRender || verifyDataRender.length === 0) return;

    const removeDeletedItem = saveUserData.filter(
      (data) => data.id !== verifyDataRender[0].id,
    );

    setSaveUserData(removeDeletedItem);
  };

  const addActivity = () => {
    setAddBgBlur(!addBgBlur);
    // also reset the message warning
    setTodoMessageWarning(false);
    setDateSelected("");
    setTodoMessage("");
    setHourSelected("");
    setMinuteSelected("");
    setSoundSelected("");
    setCategoryUserInput("");
    setRepeatOption("");
    setCalendarBorderWarning("");
    setSoundSelectedWarning(false);
    setCategoryWarning(false);
    setTimeSelectedWarning(false);
    setTodoTitle("");
    setEditBtnOn(false);
    setTrackEditBtn(false);
    setTrackTitleEdit(false);
    setCalendarEdit(false);
    setCategoryEdit(false);
    setSoudEdit(false);
    setRenderCheckMark(null)
    setTimeEdit(false);
    localStorage.removeItem("userMessage");
  };

  // edit all function
  const editToggle = () => {
    setEdit(!edit);
    setDeleteBtn(true);
  };

  console.log(categoryUserInput);

  return (
    <>
      <div
        className={`w-full  bg-[#313437] ${getSearchInput ? "h-[100vh]" : ""}`}
      >
        <warningCodes.Provider
          value={{
            todoMessage,
            dateSelected,
            hourSelected,
            minuteSelected,
            soundSelected,
            categoryUserInput,
            repeatOption,
            addBgBlur,
            categoryWarning,
            timeSelectedWarning,
            soundSelectedWarning,
            calendarBorderWarning,
            setRenderCheckMark,
            renderCheckMark,
            validateInputs,
            todoMessageWarning,
            setSaveUserData,
            saveUserData,
            addActivity,
            setTodoTitle,
            todoTitleWarning,
            todoTitle,
            editToggle,
            edit,
            setVerifyDataRender,
            verifyDataRender,
            setEditBtnOn,
            editBtnOn,
            setTimeSelectedWarning,
            trackEditBtn,
            trackTitleEdit,
            trackInputEl,
            setCalendarEdit,
            calendarEdit,
            allEditToggles,
            setTrackTitleEdit,
            setTrackInputEl,
            setCategoryEdit,
            categoryEdit,
            soundEdit,
            setSoudEdit,
            setTrackEditBtn,
            setTimeEdit,
            timeEdit,
            replaceEdit,
            setDeleteBtn,
            deleteTodo,
            setGetSearchInput,
            getSearchInput,
            startTransition,
            isPending,
            filteredItem,
          }}
        >
          <div>
            <div>
              <Header
                addActivity={addActivity}
                setCategoryUserInput={setCategoryUserInput}
              />
            </div>

            <div
              className={` sticky bottom-0 rounded-md w-[99%] ${getSearchInput ? "hidden" : ""}`}
            >
              <CreateTodo
                setTodoMessage={setTodoMessage}
                setDateSelected={setDateSelected}
                setHourSelected={setHourSelected}
                setMinuteSelected={setMinuteSelected}
                setSoundSelected={setSoundSelected}
                setCategoryUserInput={setCategoryUserInput}
                setRepeatOption={setRepeatOption}
                addActivity={addActivity}
                setRenderCheckMark={setRenderCheckMark}
              />
            </div>
          </div>
        </warningCodes.Provider>

        {getSearchInput && filteredItem.length === 0 ? (
          <div className="flex justify-center items-center text-gray-800 text-[1.7rem] ">
            Sorry no match found
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
