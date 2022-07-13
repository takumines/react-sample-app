import "./styles.css";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};