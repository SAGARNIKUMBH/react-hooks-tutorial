import react from "react";
import "./App.css";
import ContextComponentC from "./Components/ContextComponentC";
import CounterOne from "./Components/CounterOne";
import CounterThree from "./Components/CounterThree";
import CounterTwo from "./Components/CounterTwo";
import DataFetching from "./Components/DataFetching";
import DataFetchingByReducer from "./Components/DataFetchingByReducer";
import DataFetchingTwo from "./Components/DataFetchingTwo";
import FocusInput from "./Components/FocusInput";
import HookCounter from "./Components/HookCounter";
import HookCounterFour from "./Components/HookCounterFour";
import HookCounterOne from "./Components/HookCounterOne";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterTwo from "./Components/HookCounterTwo";
import HookMouse from "./Components/HookMouse";
import HookTimer from "./Components/HookTimer";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import MouseContainer from "./Components/MouseContainer";
import ParentComponent from "./Components/parentComponent";
import UserFrom from "./Components/UserFrom";

export const UserContext = react.createContext();
export const ChannelContext = react.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Sunny"}>
        <ChannelContext.Provider value={"Weoto Tech.Pvt.Ltd."}>
          <ContextComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <UserFrom /> */}
      {/* <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingByReducer /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
