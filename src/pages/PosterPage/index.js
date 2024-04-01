import React from "react";
import "./styles.scss";
import logoImage from "../../assets/logos/codesNgearsText.svg";
import mainLogoImage from "../../assets/logos/codesNgears.svg";
import underConstructionImage from "../../assets/logos/warning.svg";
import cdwLogo from "../../assets/logos/cdwLogo.png";
import Button from "../../components/Button";
import { APP_CONSTANTS } from "../../constants/app.constants";
import { usePageView } from "../../customHooks/usePageView";

const PosterPage = () => {
  usePageView();

  const postPageConstants = APP_CONSTANTS.POSTER_PAGE;

  /**
   * Opens the links in new tab
   * @param url URL which needs to opened
   */
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="poster-page-container px-8 py-9">
      <center>
        <div className="cng-logo-image-wrapper max-w-[640px] ">
          <img
            className="object-contain w-full h-full"
            src={logoImage}
            alt="Codes and Gears - 2024"
          />
        </div>
        <p className="text-xl text-white font-orbitron font-semibold tracking-widest pt-4">
          &lt;go-<span className="text-green">green</span> /&gt;
        </p>
      </center>
      <h1 className="text-xl tracking-widest lg:text-2xl text-white font-bold text-balance text-center font-poppins my-10 ">
        Welcome to <span className="text-green">Season 11 </span> of CNG
      </h1>
      <center>
        <div className="cng-main-logo-image-wrapper w-[17.5rem] lg:w-[414px] h-[16]">
          <img
            className="object-contain w-full h-full"
            src={mainLogoImage}
            alt="Codes and Gears - 2024"
          />
        </div>
      </center>
      <div className="options-wrapper flex flex-col justify-center items-center mt-10 gap-5 lg:flex-row">
        <Button
          btnStyle={"gradient-border"}
          name={postPageConstants.register_btn_label}
          onClick={() => handleButtonClick(postPageConstants.register_btn_url)}
        />
        <Button
          name={postPageConstants.prev_year_label}
          onClick={() => handleButtonClick(postPageConstants.prev_year_url)}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-4">
        <h2 className="text-white lg:text-xl font-rubik uppercase">
          stay tuned
        </h2>
        <p className="text-white lg:text-xl font-poppins tracking-wide font-normal flex items-center gap-4">
          {" "}
          <span>
            <img src={underConstructionImage} alt="under construction" />
          </span>{" "}
          The site is under construction
        </p>
      </div>
      <footer className="flex justify-center items-center p-10">
        <div className="cdw-logo-image-wrapper w-[4.25rem] lg:w-[7.25rem]">
          <img
            className="object-contain w-full h-full"
            src={cdwLogo}
            alt="CDW logo"
          />
        </div>
      </footer>
    </div>
  );
};

export default PosterPage;
