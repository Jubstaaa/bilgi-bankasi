import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const showRoutes = useRoutes(routes);
  return (
    <>
      <Helmet>
        <title>Bilgi Bankası</title>
      </Helmet>
      {showRoutes}
    </>
  );
}

export default App;
