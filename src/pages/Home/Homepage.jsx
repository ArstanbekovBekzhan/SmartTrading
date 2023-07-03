import React from "react";
import HomeP from "./Homepage.module.css";
import Section1 from "../../component/HomePsections/section1/Section1";
import Section2 from "../../component/HomePsections/section2/Section2";
import PassesCourse from "../../component/HomePsections/PassesCourse/PassesCourse";
import RESULTS from "../../component/HomePsections/RESULTS/Results";
import Themes from "../../component/HomePsections/Themes/Themes";
import FlipClock from "../../component/HomePsections/FlipClock/FlipClock";

const Homepage = () => {
  return (
    <div className={HomeP.Container}>
      <Section1 />
      <Section2/>
      <PassesCourse/>
      <RESULTS/>
      <Themes/>
      <FlipClock/>
    </div>
  );
};

export { Homepage };