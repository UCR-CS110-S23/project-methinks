import React from "react";
import BasicExample from "./Dropdown";
import { useState } from "react";

const TopicBar = () => {
  const initialButtonStyles = {
    buttonAll: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonNews: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonEnt: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonPol: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonLife: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonSchool: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonCult: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
    buttonRand: {
      backgroundColor: "bg-white",
      textColor: "text-black",
    },
  };

  const [buttonStyles, setButtonStyles] = useState(initialButtonStyles);

  const handleClick = (buttonId) => {
    setButtonStyles((prevState) => {
      const updatedStyles = { ...prevState };

      if (prevState[buttonId].backgroundColor === "bg-white") {
        updatedStyles[buttonId].backgroundColor = "bg-black";
        updatedStyles[buttonId].textColor = "text-white";
      } else {
        updatedStyles[buttonId].backgroundColor = "bg-white";
        updatedStyles[buttonId].textColor = "text-black";
      }

      return updatedStyles;
    });
  };

  return (
    <div className="flex   items-center justify-center  -translate-y-24  ">
      <div className="   flex justify-center  ">
        <button
          className={`${buttonStyles.buttonAll.backgroundColor} ${buttonStyles.buttonAll.textColor} rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonAll")}
        >
          All
        </button>
        <button
          className={`${buttonStyles.buttonNews.backgroundColor} ${buttonStyles.buttonNews.textColor}  rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonNews")}
        >
          {" "}
          News
        </button>
        <button
          className={`${buttonStyles.buttonEnt.backgroundColor} ${buttonStyles.buttonEnt.textColor}  rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonEnt")}
        >
          Entertainment
        </button>
        <button
          className={`${buttonStyles.buttonPol.backgroundColor} ${buttonStyles.buttonPol.textColor}  rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonPol")}
        >
          Political
        </button>
        <button
          className={`${buttonStyles.buttonLife.backgroundColor} ${buttonStyles.buttonLife.textColor}  rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonLife")}
        >
          Lifestyle
        </button>
        <button
          className={`${buttonStyles.buttonSchool.backgroundColor} ${buttonStyles.buttonSchool.textColor} rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonSchool")}
        >
          School
        </button>
        <button
          className={`${buttonStyles.buttonCult.backgroundColor} ${buttonStyles.buttonCult.textColor} rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonCult")}
        >
          Culture
        </button>
        <button
          className={`${buttonStyles.buttonRand.backgroundColor} ${buttonStyles.buttonRand.textColor} rounded-full py-2 px-4 m-1`}
          onClick={() => handleClick("buttonRand")}
        >
          Random
        </button>
      </div>
      <div className=" flex m-1 ">
        <BasicExample />
      </div>
    </div>
  );
};

export default TopicBar;
