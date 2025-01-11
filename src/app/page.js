"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import mine from "/public/mine.jpg";
import Bee from "/public/Bee-Pat.jpg";
import { motion } from "framer-motion";
import React from "react";
import GrowingLine from "./GrowingLine";
import design from "/public/design.png";
import code from "/public/code.png";
import consulting from "/public/consulting.png";
import web1 from "/public/web-1sn.png";
import web2 from "/public/web2-sn.png";
import web3 from "/public/web3-sn.png";
import web4 from "/public/web4-ni.png";
import web5 from "/public/web-ni.png";
import web6 from "/public/verification.png";
import ticks from "/public/ticks.png";
import skills from "/public/skillls.png";
import tools from "/public/tools.png";
import manages from "/public/managerial.png";
import apart from "/public/apart.png";
import stuhub from "/public/stuhub.png";
import stuhubb from "/public/stuhubb.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Blessing Patrick</title>
        <meta
          name="description"
          content="Blessing Patrick is a passionate front end developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-0 md:px-20 lg:px-40 dark:bg-gray-950">
        {/* Navigation Bar */}
        <section className="min-h-screen">
          {/* <nav className="w-full py-10 mb-12 bg-gradient-to-r from-green-200 via-orange-300 to-yellow-200 shadow-md"> */}
          <nav className="py-10 mb-12 shadow-lg">
            <div className="flex justify-between items-center px-4 sm:px-8">
              <h1 className="text-sm sm:text-xl text-gray-800 font-poppins dark:text-white">
                Blessing Patrick
              </h1>

              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-600 hover:text-gray-800 transition-colors"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-md ml-8 hover:opacity-90 transition-opacity"
                    href="https://www.dropbox.com/scl/fi/wq38fw9p6y8ohnuoyfdcq/Blessing-Patrick-Resume.docx?rlkey=jins7wscsn1rs8j0mr48ql5y0&st=aji62w55&dl=0"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Brief About Section */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-green-800 font-medium md:text-6xl font-poppins">
              Get To Know Me
            </h2>
            <h3 className="text-2xl py-2 md:text-xl max-w-lg mx-auto">
              Front End Developer
            </h3>

            {/* Growing line animation */}
            <GrowingLine />

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              With a deep love for crafting beautiful, user-friendly designs, I
              pour my creativity into every project, ensuring that your vision
              comes to life in a way that resonates with your audience, taking
              them on a digital tour of your story and turning your ideas into a
              remarkable online experience!
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 text-4xl text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/techdivva/">
              <AiFillLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>

          {/* 3D Image of Blessing */}
          <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={Bee} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* My Deliverables Section */}
        <section>
          <div
            className="flex flex-col justify-center px-4 text-gray-500 pb-8 md:py-12"
            id="skills"
          >
            <h2 className="text-3xl font-bold mt-5 mb-4 mt-4 text-center dark:text-white">
              My Deliverables
            </h2>

            <div
              className="flex flex-col md:flex-row items-start md:items-center justify-between px-6
             md:px-20 py-12 "
            >
              {/* Title Section */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2
                  className="text-2xl font-bold text-gray-800 underline decoration-green-500 
                decoration-4 underline-offset-8 dark:text-white"
                >
                  Skills
                </h2>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 text-gray-600 ">
                <p className="leading-relaxed dark:text-white">
                  As the co-founder of Nivasity and Sannex, I’ve brought ideas
                  to life by building intuitive, user-friendly front-end
                  solutions. Proficient in HTML, CSS, JavaScript, Tailwind,
                  Bootstrap, React, and Git, I specialize in transforming
                  concepts into functional, visually appealing designs.
                  Additionally, I create seamless solutions with WordPress and
                  no-code mobile app development, ensuring every project is
                  delivered with precision and creativity
                </p>
              </div>
            </div>
          </div>

          {/* the card systems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={apart} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-600">
                What Sets me Apart
              </h3>

              <p className="text-gray-800 py-1 ">
                Attention to detail in UI design.
              </p>
              <p className="text-gray-800 py-1 ">
                Passionate about solving user problems.
              </p>
              <p className="text-gray-800 py-1 ">
                Quick learner and adaptive to new tech.
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={ticks} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-600">
                Core Skills
              </h3>

              <p className="text-gray-800 py-1 ">Responsive Web Design</p>
              <p className="text-gray-800 py-1 ">Clean Code Practices</p>
              <p className="text-gray-800 py-1 ">Cross-Browser Compatibility</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={skills}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-600">
                Tools I use
              </h3>

              <p className="text-gray-800 py-1 ">React</p>
              <p className="text-gray-800 py-1 ">Tailwind CSS</p>
              <p className="text-gray-800 py-1 ">Bubble</p>
            </div>
          </div>
        </section>

        <div
          className="relative h-screen bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>

          {/* Content Container */}
          <div className="relative max-w-6xl mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-12 px-6">
            {/* Text Section */}
            <div className="text-white text-center lg:text-left lg:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold">
                Elevating My Business Acumen
              </h1>
              <p className="text-lg">
                Successfully completing the FoundHerCity cohort program has
                sharpened my entrepreneurial skills, empowering me with the
                knowledge and confidence to navigate the business landscape with
                purpose and innovation.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-full h-60 sm:h-72 bg-white rounded-md shadow-lg overflow-hidden">
                <img
                  src="/Cert.png"
                  alt="Creative Visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="m-4 md:m-0">
          <div className="mt-5">
            <h3 className="text-3xl py-1 underline decoration-green-500 decoration-4 underline-offset-8 dark:text-white">
              Portfolio
            </h3>
            <p className="mt-4 dark:text-white">
              Every line of code I write is a story, blending design,
              innovation, and functionality. With a focus on creating seamless,
              user-friendly web experiences, I transform ideas into interactive
              realities. Below are my favorite projects, crafted to inspire,
              engage, and deliver exceptional digital solutions
            </p>

            <p className="text-center py-2 leading-800 mt-5 mb-5 font-extrabold dark:text-white">
              Every Website tells a
              <span className="text-orange-500"> unique story.</span> I've had
              the privilege of helping these brands bring their
              <span className="text-orange-500"> visions to life.</span> Journey
              with me
            </p>
          </div>

          {/* images on portfolio and works */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                href="https://sannex.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={web1}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://sannex.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={web2}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://nivasity.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={web5}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://nivasity.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={web4}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://tife-stuhub.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={stuhub}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1">
              <a
                href="https://tife-stuhub.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={stuhubb}
                    className="object-cover transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">
                      Visit Website
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Add more portfolio items here */}
        </section>

        {/* Footer */}
        <footer className="w-full py-6 mt-12">
          <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-800 text-sm dark:text-white">
              © {new Date().getFullYear()} Blessing Patrick. All rights
              reserved.
            </p>
            <ul className="flex space-x-6 mt-4 sm:mt-0">
              <li>
                <a
                  href="mailto:patrickblessing010@gmail.com"
                  className="text-gray-800 hover:text-gray-900 transition-colors text-sm font-bold dark:text-white"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
