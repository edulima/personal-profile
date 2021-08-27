import cx from 'classnames'

import Head from 'next/head'
import Image from 'next/image'
import devImg from "../public/static/images/dev.png"

import H2 from './components/h2'
import Button from './components/button'
import IconWrapper from './components/iconWrapper'
import ContactDetails from './components/contactDetails'

import { FaGem } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaBalanceScale } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const experienceData = (() => {
  return [
    {'employer': 'Blandit Turpis', 'title': 'Developer'},
    {'employer': 'Etiam', 'title': 'Developer'},
    {'employer': 'Vivamus', 'title': 'Software Engineer'},
    {'employer': 'Pellentesque', 'title': 'Software Engineer'},
    {'employer': 'Fusce molestie ', 'title': 'Software Engineer'},
    {'employer': 'Donec', 'title': 'Software Engineer'},
  ] 
})

const latestProjectsData = (() => {
  return [
    {'project': 'Curabitur', 'stack': 'Fullstack Web Developer'},
    {'project': 'Losuere', 'stack': 'Developer'},
    {'project': 'Libero', 'stack': 'Software Engineer'},
    {'project': 'Quisque at', 'stack': 'Software Engineer'},
    {'project': 'Morbi ornane', 'stack': 'Software Engineer'},
    {'project': 'Orci Varius', 'stack': 'Software Engineer'},
  ]
})

export default function Home() {
  return (
    <div className="text-gray-100 bg-gray-900">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="grid py-4 place-items-center">
        <div className="inline-flex">
          <IconWrapper color="#eee">
            <FaGithubSquare size={40} />
          </IconWrapper>
          <IconWrapper color="#eee">
            <FaLinkedin size={40} />
          </IconWrapper>
        </div>
      </div>
      <div className={cx([
        "grid",
        "p-20",
        "2xl:px-80",
        "grid-cols-1",
        "to-black-900",
        "items-center",
        "bg-gray-900",
        "via-gray-800",
        "sm:grid-cols-1",
        "lg:grid-cols-2",
        "from-gray-900",
        "bg-gradient-to-r",
      ])}>
        <div className="text-white text-center lg:text-left">
          <p className="text-xl pt-2">
            <span className="animate-pulse text-blue-800 font-bold pr-2">
              {'>>'}
            </span> 
            Hello, I\'m Eddie
          </p>
          <h1 className="text-5xl pt-2">Fullstack Web Developer</h1>
          <p className="text-2xl pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button>View Portfolio</Button>
            <Button secondary>Contact me</Button>
          </div>
        </div>
        <div className="relative py-3 sm:max-w-xl mx-auto mt-16 lg:mt-0">
          <div className={cx([
            "inset-0",
            "absolute",
            "shadow-lg",
            "transform",
            "-skew-y-6",
            "-rotate-6",
            "rounded-3xl",
            "sm:skew-y-0",
            "to-blue-500",
            "from-blue-900",
            "bg-gradient-to-r",
          ])}></div>
          <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden">
            <div className="max-w-md mx-auto">
              <Image src={devImg} width="500" height="500" />
            </div>
          </div>
        </div>
      </div>
      <div className={cx([
          "grid",
          "px-20",
          "py-20",
          "2xl:px-80",
          "text-center",
          "grid-cols-1",
          "lg:text-left",
          "lg:grid-cols-2",
        ])}
      >
        <div>
          <H2 text="About me" />
          <p className="text-xl">
            Donec eu odio eleifend, blandit quam ut, condimentum sapien. 
            Quisque at orci vitae felis ullamcorper interdum. Maecenas placerat 
            feugiat quam commodo vestibulum. Integer elementum, velit in 
            pellentesque efficitur, dolor odio sodales urna, a porta odio diam 
            nec sem. Nulla facilisi. Vestibulum vel sem faucibus mauris 
            venenatis placerat. Fusce non arcu a tellus posuere dictum eu ut 
            purus.
          </p>
        </div>
        <div className={cx([
            "pt-5",
            "flex",
            "lg:pt-0",
            "flex-col",
            "sm:flex-row",
            "items-center",
            "sm:items-start",
            "justify-center",
          ])}
        >
          <div className="text-center max-w-max p-4">
            <IconWrapper color="white">
              <div className="flex justify-center align-center">
                <FaUserTie size={60} />
              </div>
              <p className="text-2xl pt-2 font-extrabold text-blue-500">
                6 Tellus
              </p>
              <p>eu posuere</p>
            </IconWrapper> 
          </div>
          <div className="text-center max-w-max p-4">
            <IconWrapper color="white">
              <div className="flex justify-center align-center">
                <FaBalanceScale size={60} />
              </div>
              <p className="text-2xl pt-2 font-extrabold text-blue-500">
                Vestibulum vel
              </p>
              <p>dictum eu ut</p>
            </IconWrapper>
          </div>
        </div>
      </div>
      <div className={cx([
          "grid",
          "px-20",
          "py-20",
          "2xl:px-80",
          "grid-cols-1",
          "text-center",
          "lg:text-left",
          "bg-gray-800",
          "md:grid-cols-3",
        ])}
      >
        <div className="col-span-1 md:col-span-3">
          <H2 text="Previous experience" />
        </div>
        {experienceData().map((e) => {
          return (
            <div key={e.employer} className={cx([
              "my-4", 
              "mx-2", 
              "py-6", 
              "px-3", 
              "w-full", 
              "rounded", 
              "border-2", 
              "md:w-auto", 
              "text-center",
            ])}
          >
            <p className="text-xl font-extrabold">{e.employer}</p>
            <p className="text-lg text-blue-500 font-bold">{e.title}</p>
            <p className="text-gray-500">{e.time}</p>
          </div>
          )
        })}
        <div className="col-span-1 md:col-span-3 text-center">
          <Button>Download CV</Button>
        </div>
      </div>
      <div className={cx([
          "grid",
          "py-20",
          "gap-4",
          "px-20",
          "2xl:px-80",
          "text-center", 
          "grid-cols-1",
          "md:grid-cols-3",
        ])}
      >
        <div className="col-span-1 md:col-span-3">
          <H2 text="Latest Projects" />
        </div>
        { latestProjectsData().map((e) => {
          return (
            <div className="rounded bg-gray-800 px-8 py-5" key={e.project}>
              <div className="flex flex-col">
                <div>
                  <div className={cx([
                      "px-2",
                      "pt-4",
                      "rounded",
                      "-rotate-1",
                      "transform",
                      "bg-white",
                    ])}
                  >
                    <Image src={devImg} width="500" height="500" />
                  </div>
                  <div className="pt-5 text-lg text-blue-500 font-bold">
                    {e.project}
                  </div>
                  <div className="pb-2">{e.stack}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={cx([
          "grid",
          "py-4",
          "px-20",
          "space-y-4",
          "2xl:px-80",
          "grid-cols-3",
          "lg:text-left",
          "md:grid-cols-6",
          "justify-between",
          "place-items-center",
        ])}
      >
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#E06C00">
            <FaJava size={60} />
          </IconWrapper>
        </div>
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#7377AD">
            <FaPhp size={60} />
          </IconWrapper>
        </div>        
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#EDD718">
            <FaJsSquare size={60} />
          </IconWrapper>
        </div>
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#C76494">
            <FaSass size={60} />
          </IconWrapper>
        </div>
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#E0E0E0">
            <FaGithubAlt size={60} />
          </IconWrapper>
        </div>
        <div className="w-min bg-gray-800 rounded-full p-4">
          <IconWrapper color="#E80E12">
            <FaGem size={60} />
          </IconWrapper>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-20 gap-4 2xl:px-80">
        <div className="space-y-7">
          <ContactDetails label="My email" text="eddie.email@email.com" />
          <ContactDetails label="Phone number" text="+44 7565 5656 5656" />
          <ContactDetails label="Skype id" text="eddie.dev" />
        </div>
        <div>
          <div className="flex flex-col space-y-4 bg-gray-800 p-10 rounded">
            <H2 text="Say hello :)" />
            <label>Name</label>
            <input type="text" className="p-2 rounded text-black" placeholder="Bob Smith" />
            <label>Email</label>
            <input type="email" className="p-2 rounded text-black" placeholder="bob@smith.email.com" />
            <label>Message</label>
            <textarea type="textarea" className="px-2 rounded text-black h-24" placeholder="Hello Eddie..." />
            <Button>Get in touch</Button>          
          </div>
        </div>
      </div>
    </div>
  )
}
