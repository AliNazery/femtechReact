import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/header"
import { routes } from "./Util/routes";



function App() {

  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App
