import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          You clicked the button
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click me
      </Button>
    </>
  );
}

export default App;
