import { useState } from "react";
import All from "./Component/All";
import ExampleOne from "./Conditional_Rendering/ExampleOne";
import ExampleTwo from "./Conditional_Rendering/ExampleTwo";
import JSX from "./JSX/One";
import PropsExampleTwo from "./Props/PropsExampleTwo";
import PropsOneConsumer from "./Props/PropsOneConsumer";
import Modal from "./Potral/Modal";
import EventOne from "./Event/EventOne";

const data = [
  { name: "ramit", location: "Nepal" },
  { name: "vandai", location: "portugal" },
  { name: "ami", location: "UK" },
];
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Not 1: This all about the Component....</h1>
      <All />
      <h1>Note 2: This is all about the JSX....</h1>
      <JSX />
      <h1>Note 3: This is all about the Props...</h1>
      <PropsOneConsumer name="ramit" age={23} location="Nepal" />
      <PropsExampleTwo data={data} />
      <h1>Note: 4 This is all about the Conditional Rendering...</h1>
      <ExampleOne isLoggedIn={true} name="Anugrah Tamang" />
      <ExampleTwo />
      <h1>Note: 5 This is all about the Potral in React....</h1>
      <h1>React Portal with TypeScript</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is rendered via a portal!</p>
      </Modal>
      <EventOne />
    </div>
  );
};

export default App;
