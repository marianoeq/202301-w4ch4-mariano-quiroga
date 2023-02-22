import { useState } from "react";

export const telNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export function usePhone() {
  let initialState = "";
  const [displayNum, setdisplayNum] = useState(initialState);
  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLInputElement;

    console.log(element.innerText);
  };

  return {
    handleClick,
  };
}
