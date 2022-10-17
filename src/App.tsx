import { useRoutes } from "react-router-dom";
import { routes } from "./RouterConfig";

function App() {
  const router = useRoutes(routes);

  return <>{router}</>;
}

export default App;
