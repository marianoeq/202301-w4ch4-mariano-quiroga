import { Key } from "../key/key";
import { telNumbers } from "../../../../core/hooks/usePhone";
export function Keyboard() {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {telNumbers.map((item) => (
          <Key key={item} value={item}></Key>
        ))}
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
}
