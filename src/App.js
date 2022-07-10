import "./styles.css";
import { useState, useCallback } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents"
import { Emotion } from "./components/Emotion";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open)
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>
        <br/>
        <input value={text} onChange={onChangeText}/>
        <br/>
        <br/>
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose}/>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/page1" render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1/>
            </Route>
            <Route exact path={`${url}/detailA`}>
              <Page1DetailA/>
            </Route>
            <Route exact path={`${url}/detailB`}>
              <Page1DetailB/>
            </Route>
          </Switch>
        )} />
        <Route path="/page2">
          <Page2/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
