import "./styles.css";
import { useState, useCallback } from "react";
import { BrowserRouter, Link } from "react-router-dom"
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents"
import { Emotion } from "./components/Emotion";
import { Router } from "./router/Router";

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
      <Router />
    </BrowserRouter>
  );
}
