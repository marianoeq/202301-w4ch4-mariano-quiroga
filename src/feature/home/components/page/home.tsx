import { Keyboard } from "../keyboard/keyboard";
import { Actions } from "../actions/actions";
import { Info } from "../info/info";
export default function Home() {
  return (
    <section>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </section>
  );
}
