import "./App.css";
import ListGroup from "./components/ListGroup";

let cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "San Antonio",
  "San Francisco",
];
function App() {
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}

export default App;
