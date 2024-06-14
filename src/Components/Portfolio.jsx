/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Job-Connect",
    description:
      "Job Connect is a dynamic and robust web application designed to bridge the gap between job seekers and employers. Developed using a modern tech stack comprising TypeScript, React, Node.js, and MongoDB, the platform facilitates seamless job searches and streamlined job posting processes.",
    url: "https://github.com/Pranav1703/Job-Connect",
  },
  {
    title: "File-Stash",
    description:
      "Job Connect is and file storage application designed to store and download the stored files. Files are stored locally within the project directory. This project is built using TypeScript, React, Node.js, and MongoDB.",
    url: "https://github.com/Pranav1703/File-Stash",
  },
  {
    title: "WeatherCLI",
    description:
      "Command-line interface (CLI) tool developed in Go.The tool provides users with instant access to temperature and Air Quality Index (AQI) information for a specified location.",
    url: "https://github.com/Pranav1703/Weather_CLI",
  },
  {
    title: "Ani-manga_scraper",
    description:
      "Built Desktop app using Wails framework in Go. Scrapes manga and anime data from websites using Colly framework, displaying and redirecting to read or watch content directly",
    url: "https://github.com/Pranav1703/Ani-manga_scraper",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
