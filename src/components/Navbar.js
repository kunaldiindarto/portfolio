import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import vintageImg from '../public/vintage.svg'

function Navbar(props) {
  const [active, setActive] = useState(false);
  const [liner, setLiner] = useState(false);
  const [liner2, setLiner2] = useState(false);
  const [liner3, setLiner3] = useState(false);
  const [liner4, setLiner4] = useState(false);

  const [click, setClick] = useState(false);

  const toggle = useRef(null);
  const navUl = useRef(null);
  const line = useRef(null);
  const posHome = useRef(null);
  const posResume = useRef(null);
  const posProjects = useRef(null);
  const posContacts = useRef(null);

  const hoverMe = () => setLiner(true);
  const removeHover = () => setLiner(false);
  const hoverMe2 = () => setLiner2(true);
  const removeHover2 = () => setLiner2(false);
  const hoverMe3 = () => setLiner3(true);
  const removeHover3 = () => setLiner3(false);
  const hoverMe4 = () => setLiner4(true);
  const removeHover4 = () => setLiner4(false);

  const clickMe = () => setClick((prevState) => !prevState);

  useEffect(() => {
    // console.log(toggle.current.checked);
    if (liner) {
      line.current.className = "coba";
    } else if (liner2) {
      line.current.className = "coba2";
    } else if (liner3) {
      line.current.className = "coba3";
    } else if (liner4) {
      line.current.className = "coba4";
    } else {
      line.current.className = "";
    }

    if (click === true) {
      toggle.current.checked = false;
      clickMe();
    }

    // if (click === true) {
    //   console.log("true");
    // } else {
    //   toggle.current.checked = false;
    //   // navUl.current.className = "";
    // }
    console.log(toggle.current.checked);
    console.log(`hasil click ${click}`);

    if (toggle.current.checked) navUl.current.className = "active";
    else navUl.current.className = "";
  });

  useEffect(() => {
    if (props.address === "/") {
      posHome.current.className = "position";
      posResume.current.className = "";
      posProjects.current.className = "";
      posContacts.current.className = "";
    } else if (props.address === "/resume") {
      posHome.current.className = "";
      posResume.current.className = "position";
      posProjects.current.className = "";
      posContacts.current.className = "";
    } else if (props.address === "/projects") {
      posHome.current.className = "";
      posResume.current.className = "";
      posProjects.current.className = "position";
      posContacts.current.className = "";
    } else if (props.address === "/contact") {
      posHome.current.className = "";
      posResume.current.className = "";
      posProjects.current.className = "";
      posContacts.current.className = "position";
    }
  }, [props.address]);

  return (
    <nav>
      <div className="logo">
        <h4>Kun Blog ...</h4>
      </div>
      <ul ref={navUl} onClick={clickMe}>
        <li>
          <Link
            to="/"
            onMouseEnter={hoverMe}
            onMouseLeave={removeHover}
            ref={posHome}
          >
            Home
            <span ref={line}></span>
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            onMouseEnter={hoverMe2}
            onMouseLeave={removeHover2}
            ref={posResume}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onMouseEnter={hoverMe3}
            onMouseLeave={removeHover3}
            ref={posProjects}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onMouseEnter={hoverMe4}
            onMouseLeave={removeHover4}
            ref={posContacts}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="menu-toggle">
        <input
          type="checkbox"
          value={active}
          ref={toggle}
          onChange={() => setActive((active) => !active)}
        />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
