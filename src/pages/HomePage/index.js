import { React } from "react";
import "./styles.scss";
import ReactGA from "react-ga4";
import { usePageView } from "../../customHooks/usePageView";

export default function HomePage() {
  usePageView();
  function handleClick() {
    ReactGA.event({
      category: "Home page",
      action: "Click",
      label: "Demo button",
    });
  }
  return (
    <>
      <button onClick={handleClick}>Demo</button>
    </>
  );
}
