import "./App.css";
import HookCounter from "./Components/HookCounter";
import HookCounterFour from "./Components/HookCounterFour";
import HookCounterOne from "./Components/HookCounterOne";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterTwo from "./Components/HookCounterTwo";
import HookMouse from "./Components/HookMouse";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import MouseContainer from "./Components/MouseContainer";

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
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
