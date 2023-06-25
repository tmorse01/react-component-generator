import "./App.css";
import { renderComponent } from "./ComponentGenerator";
import ExampleLayoutConfig from "./example-applications/ExampleLayoutConfig";
function App() {
  return <>{renderComponent(ExampleLayoutConfig)}</>;
}

export default App;
