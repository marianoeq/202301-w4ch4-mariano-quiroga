import { useContext } from "react";
export function Key({ ...props }: any) {

  return (
    <>
      <li>
        <button onClick={handleClick} name={props.key} className="key">
          {props.value}
        </button>
      </li>
    </>
  );
}
