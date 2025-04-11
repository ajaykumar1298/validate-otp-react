import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let numberOfInputBoxes = 4;
function App() {
  let [inputBox, setInputBox] = useState(
    new Array(numberOfInputBoxes).fill("")
  );
  let refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  return (
    <>
      <h1>validate otp</h1>
      {inputBox.map((elem, ind) => {
        return (
          <input
            className="otp-gen"
            key={ind}
            type="text"
            value={elem}
            ref={(input) => (refArr.current[ind] = input)}
            onChange={(e) => {
              let newInputValue = e.currentTarget.value;
              if (isNaN(newInputValue)) return;
              let arr = [...inputBox];
              arr[ind] = newInputValue.slice(-1);
              setInputBox(arr);
              newInputValue.trim() && refArr.current[ind + 1]?.focus();
            }}
            onKeyDown={(e) => {
              if (!e.currentTarget.value && e.key == "Backspace") {
                refArr.current[ind - 1]?.focus();
              }
            }}
          />
        );
      })}
    </>
  );
}

export default App;
