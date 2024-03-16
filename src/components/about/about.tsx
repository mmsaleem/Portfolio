"use client";

import { useEffect } from "react";
import Image from "next/image";

import liquidFillGauge from "../../utilities/liquidGauge";

import "./about.scss";

const expertise = {
  web: {
    svg: "/public/img/web.sv",
  },
  responsive: {
    svg: "/public/img/responsive.svg",
  },

  love: {
    svg: "/public/img/love.svg",
  },
};

export default function About() {
  useEffect(() => {
    let createGauge = (eleTarget, percent, config) => {
      let randomWaveHeight = Math.random();

      let customDefaultSettings = {
        waveTextColor: "#fff",
        textColor: "#324D5C",
        circleColor: "#324D5C",
        textSize: 0.65,
        waveColor: "#324D5C",
        waveHeight:
          randomWaveHeight > 0.009 && randomWaveHeight > 0.7
            ? 0.05
            : randomWaveHeight,
      };

      let settings = {
        ...liquidFillGauge.liquidFillGaugeDefaultSettings(),
        ...customDefaultSettings,
        ...config,
      };

      let gauge = liquidFillGauge.loadLiquidFillGauge(
        eleTarget,
        percent,
        settings
      );

      window.addEventListener("resize", (e) => {
        gauge.update(percent);
        console.log("updated gauge translate");
      });
      return gauge;
    };

    const html = createGauge("html", 90);
    const css = createGauge("css", 88);
    const js = createGauge("js", 82);
    const jquery = createGauge("jquery", 69);
    const bootstrap = createGauge("bootstrap", 73);
    const node = createGauge("node", 70);
    const react = createGauge("react", 75);
  

    const passion = createGauge("passion", 100, {
      textColor: "#324D5C",
      waveColor: "#fff",
      waveTextColor: "#324D5C",
      circleColor: "#fff",
      textSize: 1,
    });
  });

  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-info-wrapper">
          <div className="about-img">
            <div>
              <Image alt="me" width={300} height={300} src="/img/image saleem.jpeg" />
            </div>
          </div>
          <div className="about-copy">
            <div className="text">
              <h2> About Me </h2>
              <p>
                Hey, I'm Saleem Mohamed. Front End Developer residing in the great city
                of New York. Stuck in an infinite loop of learning, creating,
                and growing. I'm very passionate about programing, it has opened
                my eyes to new ways of thinking and doing. The more I learn, the
                more I realize there is so much more I still dont know yet. I
                believe the learning process for a developer is a never ending
                journey. <br></br>
                <span> #juniordevforlife </span>
              </p>
            </div>
            <div className="expertise">
              <div>
                <object
                  id="responsive-svgas"
                  type="image/svg+xml"
                  data={expertise.responsive.svg}
                ></object>
                <p>Responsive Design</p>
              </div>

              <div>
                <object
                  id="web-svg"
                  type="image/svg+xml"
                  data={expertise.web.svg}
                ></object>
                <p>W3 Web Standards</p>
              </div>

              <div>
                <object
                  id="love-svg"
                  type="image/svg+xml"
                  data={expertise.love.svg}
                ></object>
                <p>Code With LOVE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-skills-wrapper">
          <div className="skill">
            <svg id="html"></svg>
            <p>HTML</p>
          </div>

          <div className="skill">
            <svg id="css"></svg>
            <p>CSS</p>
          </div>

          <div className="skill">
            <svg id="js"></svg>
            <p>JS</p>
          </div>

          <div className="skill">
            <svg id="jquery"></svg>
            <p>jQuery</p>
          </div>

          <div className="skill">
            <svg id="bootstrap"></svg>
            <p>BootStrap</p>
          </div>

          <div className="skill">
            <svg id="react"></svg>
            <p>React JS</p>
          </div>

          <div className="skill">
            <svg id="node"></svg>
            <p>Node JS</p>
          </div>
          
          <div className="skill">
            <svg id="passion"></svg>
            <p className="bold-text">Passion To Learn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
