import "./Home.css";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebookSquare,
  FaGithub,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="home">
        <div className="hero">
          <div className="describe">
            <div className="hello">
              <h4>Hello, I'm</h4>
              <span></span>
            </div>

            <h1>Kun Aldi Indarto</h1>
            <h2>[Automation Engineer]</h2>

            <div className="intro-detail">
              <p>
                I'm interesting about Web technology, IoT, Industry 4.0, SCADA
                System, and also i really so excited about managing people.
              </p>
            </div>
          </div>

          <button>
            <Link to="/resume">
              <p>GET IN TOUCH</p>
            </Link>
          </button>
        </div>
        <div className="profile">
          <figure>
            <img src="./profile3.png" alt="" />
            <figcaption>Contact me</figcaption>
          </figure>
          <div className="logo-contact">
            <a href="#" target="_blank">
              <MdOutlineEmail className="logo-pic" />
            </a>
            <a
              href="https://www.linkedin.com/in/kun-aldi-indarto-241622174/"
              target="_blank"
            >
              <FaLinkedin className="logo-pic" />
            </a>
            <a href="#" target="_blank">
              <FaWhatsapp className="logo-pic" />
            </a>
            <a href="https://www.facebook.com/KunAldiIndarto" target="_blank">
              <FaFacebookSquare className="logo-pic" />
            </a>
            <a href="https://github.com/kunaldiindarto" target="_blank">
              <FaGithub className="logo-pic" />
            </a>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container-about">
          <div className="title-about">
            <h2>About Me</h2>
          </div>
          <article>
            <p>
              I am kind of person that, honest discipline, caring, and always
              try to learn for something new. I have experience job for team
              leader production. The job is managing and mapping position
              operator, material handling, and made report production. I have
              also joined with organization on campus to practice communication,
              team work, set priority scale, and manage the risk.
            </p>
          </article>
        </div>
      </section>
      <section className="skills-technology">
        <div className="title">
          <h2>Skills & </h2>
          <h2>Technology</h2>
        </div>
        <div className="garis">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className="container-skills">
        <div className="card card-ci">
          <div className="card-title">
            <h4>CodeIgniter</h4>
            <img src="./skill/ci.jpg" alt="" />
          </div>
          <p>
            CodeIgniter is an Application Development Framework - a toolkit -
            for people who build web sites using PHP
          </p>
        </div>
        <div className="card card-nodejs">
          <div className="card-title">
            <h4>Node JS</h4>
            <img src="./skill/nodejs.png" alt="" />
          </div>
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment outside a web browser.
          </p>
        </div>
        <div className="card card-react">
          <div className="card-title">
            <h4>React</h4>
            <img src="./logo192.png" alt="" />
          </div>
          <p>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components
          </p>
        </div>
        <div className="card card-express">
          <div className="card-title">
            <h4>Express.js</h4>
            <img src="./skill/expressjs.png" alt="" />
          </div>
          <p>
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web
          </p>
        </div>
        <div className="card card-arduino">
          <div className="card-title">
            <h4>Arduino</h4>
            <img src="./skill/arduino.jpg" alt="" />
          </div>
          <p>
            Arduino is an open-source electronics platform based on easy-to-use
            hardware and software.
          </p>
        </div>
        <div className="card card-raspberry">
          <div className="card-title">
            <h4>Raspberry Pi</h4>
            <img src="./skill/raspberry.png" alt="" />
          </div>
          <p>
            Raspberry Pi is a series of small single-board computers (SBCs)
            developed in the United Kingdom.
          </p>
        </div>
        <div className="card card-iot">
          <div className="card-title">
            <h4>Internet of Things</h4>
            <p>IoT</p>
          </div>
          <p>
            IOT describes physical objects that are embedded with sensors,
            processing ability, software, and other technologies that connect
            and exchange data with other devices and systems over the Internet
            or other communications networks
          </p>
        </div>
        <div className="card card-wonderware">
          <div className="card-title">
            <h4>Wonderware Intouch</h4>
            <img src="./skill/wonderware.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            odit sit quaerat assumenda pariatur, accusamus ullam amet iste quae
            odio?
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
