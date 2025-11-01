"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I joined Tech
        Mahindra to deepen my understanding of cloud technologies, where I
        gained hands-on experience with AWS services while contributing as a
        Contact Center Developer. I am currently learning{" "}
        <span className="font-medium"> JavaScript and MERN stack</span>. I actively
        seek opportunities to enhance my expertise by exploring and mastering
        new tools and technologies, ensuring I stay ahead in the ever-evolving
        tech landscape.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching web series. I also enjoy{" "}
        <span className="font-medium">
          reading books on personal and professional growth.
        </span>
        .
      </p>
    </motion.section>
  );
};

export default About;
