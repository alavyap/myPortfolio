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
        Mahindra to gain an understanding of how the corporate world works,
        where I worked on AWS and similar contact center providers. My core
        stack is{" "}
        <span className="font-medium">
          MERN (MongoDB, Express, React, Node.js)
        </span>
        . I am currently learning{" "}
        <span className="font-medium">TypeScript and Next.js</span>. I am always
        eager to expand my knowledge and learn new technologies. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a frontend developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching web series. I also enjoy{" "}
        <span className="font-medium">reading</span>. I am currently reading
        <span className="font-medium"> Level Up </span> by Rob Dial.
      </p>
    </motion.section>
  );
};

export default About;
