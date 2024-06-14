/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/pixel_background.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Passionate and driven Web Developer pursuing a degree at SRM-AP University.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
// eslint-disable-next-line prettier/prettier
const skillsList = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "NodeJS",
  "Go",
  "MongoDB",
  "SQL",
  "Git",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Skilled in crafting responsive, dynamic websites and continuously exploring new technologies to enhance my development capabilities, With a strong foundation in front-end and back-end development, I bring creativity and a problem-solving mindset to every project. Dedicated to learning and implementing the latest trends in web development, I aim to build user-friendly and innovative web solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
