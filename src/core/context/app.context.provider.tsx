import { AppContext } from "./app.context";
import { usePhone } from "../hooks/usePhone";
export function AppContextProvider({ children }: { children: JSX.Element }) {
  const context = usePhone();
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
