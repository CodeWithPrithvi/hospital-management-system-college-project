import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | CareConnect Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/headerimg.png"} />
    </>
  );
};

export default AboutUs;
