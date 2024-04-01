import { React, useEffect } from "react";
import "./styles.scss";
import ReactGA from "react-ga4";
import { usePageView } from "../../customHooks/usePageView";

export default function HomePage() {
  usePageView();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
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
