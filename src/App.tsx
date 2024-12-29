import { Wrapper } from "./styles/Header.style.tsx";
import { Outlet } from "react-router-dom";
import HeaderHome from "./components/HeaderHome.tsx";
function App() {
  return (
    <>
      <Wrapper>
        <HeaderHome />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
