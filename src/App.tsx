import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter/>
    </RecoilRoot>
  );
};