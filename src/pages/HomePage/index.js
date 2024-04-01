import { React } from "react";
import "./styles.scss";
import ReactGA from "react-ga";
import { usePageView } from "../../customHooks/usePageView";

export default function HomePage() {
  usePageView();
  function handleClick() {
    ReactGA.event({
      category: "User",
      action: "Clicked Demo",
    });
  }
  return (
    <>
      <button onClick={handleClick}>Demo</button>
    </>
  );
}
