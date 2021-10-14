import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { isIE, isEdge } from "react-device-detect";
import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";

import Header from "./screens/frame/Header";
import Main from "./screens/Main";
import Guide from "./screens/Guide";
import Footer from "./screens/frame/Footer";

function App() {
  ReactGA.initialize("UA-210229720-1");
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        {isIE || isEdge ? alert("IE / Edge is not supported. Download Chrome/Opera/Firefox") : null}
        <Route exact path="/" component={Main} />
        <Route path="/Guide" component={Guide} />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
