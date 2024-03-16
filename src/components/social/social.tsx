"use client";

import { useEffect, useRef } from "react";
import "./social.scss";

export default function Social() {
  return (
    <div className="social">
      <div className="content">
        <h6 className="h1 wow fadeInUP" data-wow-delay=".25s">
          Need help with your next project, or just want to say hello?
        </h6>
        <a
          className="wow fadeInUP"
          data-wow-delay=".5s"
          data-toggle="modal"
          data-target="#myModal"
          href="#"
        >
          {" "}
          Get in touch{" "}
        </a>
      </div>
    </div>
  );
}
