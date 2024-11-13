import { Header } from "./components/Header";
import createRoutes from "./routes";
import './styles/app/App.scss';

function App() {
  return (
    <div className="App">
      {createRoutes()}
    </div>
  );
}

export default App;
