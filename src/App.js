import './App.css';
import { useState, useCallback, useMemo } from "react";
import Card from "./components/card";
import Button from "./components/UI/Button";
import DemoComponent from "./components/Demo/DemoComponent";
import SortedList from "./components/Demo/SortedList";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");
  console.log("App running and rendering");


  // the closure here "closes off" the allowToggle value as false, and when the App is re rendered on state change
  // the allowToggle is still seen as "false" due to the wrapping of useCallback as well so allowToggle should be in the
  // use Callback deps to then cause this togglePara to re eval through useCallback deps
  const togglePara = useCallback(() => {
    if(allowToggle) {
      setShowPara((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  // the array list is regenerated as well as an array is an object when this App is changed
  // sorting this list is performance intensive
  // useMemo memoize the list and result of the sorted list
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title")
  }, []);

  // use Memo is not used as often as use Callback. memoize functions is more common than memoize - ing data
  // takes up memory and performance
  // sorting is something to consider for this, thus the example here
  const listItems = useMemo(() => [1, 3, 8, 2, 9, 0, -4], []);

  return (
    <div className="App">
      <h1>Hello there, welcome</h1>
        <DemoComponent show={showPara}/>
        <Card showPara={showPara} title={"first card"} action={"Paragraph showing: " + showPara.toString()}/>
        <Button onClick={togglePara}>Toggle paragraph</Button>
        <Button onClick={allowToggleHandler}>Allow Toggle</Button>


        <SortedList items={listItems} title={listTitle}/>
        <Button onClick={changeTitleHandler}>Change List Title</Button>

    </div>
  );
}

export default App;


// the use Callback hook is used for the button rendering with React memo to tell react to save a function