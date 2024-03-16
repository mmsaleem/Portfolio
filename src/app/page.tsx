"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/src/components/hero/hero";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Social from "../components/social/social";
import Nav from "../components/nav/nav";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <div className="portfolio-container container">
        <Nav></Nav>
        <main>
          <Hero />
          <About />
          <Projects />
          <Social />
        </main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-wrapper">
              <ul>
                <li>
                  <a href="https://github.com/mmsaleem" target="_blank">
                    <span className="fab fa-github-square"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/saleem-mohamed/"
                    target="_blank"
                  >
                    <span className="fab fa-linkedin"></span>
                  </a>
                </li>
              </ul>
              <p>&copy; {new Date().getFullYear()} Saleem Mohamed</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
