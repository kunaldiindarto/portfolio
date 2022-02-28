import "./Project.css";
import { useState, useEffect, useRef } from "react";

function Project() {
  const [hov, setHov] = useState(false);
  const [hov2, setHov2] = useState(false);
  const [hov3, setHov3] = useState(false);
  const [hov4, setHov4] = useState(false);
  const [hov5, setHov5] = useState(false);
  const [hov6, setHov6] = useState(false);

  const imgHov = useRef(null);
  const ketHov = useRef(null);
  const imgHov2 = useRef(null);
  const ketHov2 = useRef(null);
  const imgHov3 = useRef(null);
  const ketHov3 = useRef(null);
  const imgHov4 = useRef(null);
  const ketHov4 = useRef(null);
  const imgHov5 = useRef(null);
  const ketHov5 = useRef(null);
  const imgHov6 = useRef(null);
  const ketHov6 = useRef(null);

  const hovMe = () => setHov(true);
  const removeHov = () => setHov(false);
  const hovMe2 = () => setHov2(true);
  const removeHov2 = () => setHov2(false);
  const hovMe3 = () => setHov3(true);
  const removeHov3 = () => setHov3(false);
  const hovMe4 = () => setHov4(true);
  const removeHov4 = () => setHov4(false);
  const hovMe5 = () => setHov5(true);
  const removeHov5 = () => setHov5(false);
  const hovMe6 = () => setHov6(true);
  const removeHov6 = () => setHov6(false);

  useEffect(() => {
    if (hov) {
      console.log("tes");
      imgHov.current.className = "on";
      ketHov.current.className = "on";
    } else {
      console.log("out");
      imgHov.current.className = "";
      ketHov.current.className = "";
    }
  }, [hov]);

  useEffect(() => {
    if (hov2) {
      console.log("tes2");
      imgHov2.current.className = "on";
      ketHov2.current.className = "on";
    } else {
      console.log("out2");
      imgHov2.current.className = "";
      ketHov2.current.className = "";
    }
  }, [hov2]);

  useEffect(() => {
    if (hov3) {
      console.log("tes3");
      imgHov3.current.className = "on";
      ketHov3.current.className = "on";
    } else {
      console.log("out3");
      imgHov3.current.className = "";
      ketHov3.current.className = "";
    }
  }, [hov3]);

  useEffect(() => {
    if (hov4) {
      console.log("tes4");
      imgHov4.current.className = "on";
      ketHov4.current.className = "on";
    } else {
      console.log("out4");
      imgHov4.current.className = "";
      ketHov4.current.className = "";
    }
  }, [hov4]);

  useEffect(() => {
    if (hov5) {
      console.log("tes5");
      imgHov5.current.className = "on";
      ketHov5.current.className = "on";
    } else {
      console.log("out5");
      imgHov5.current.className = "";
      ketHov5.current.className = "";
    }
  }, [hov5]);

  useEffect(() => {
    if (hov6) {
      console.log("tes6");
      imgHov6.current.className = "on";
      ketHov6.current.className = "on";
    } else {
      console.log("out6");
      imgHov6.current.className = "";
      ketHov6.current.className = "";
    }
  }, [hov6]);

  return (
    <section className="project">
      <div className="wrap-project">
        <div className="title-project">
          <div className="title-1-project">
            <h1>P</h1>
            <h1>roject</h1>
          </div>
          <div className="content-title-project">
            <p>Projects Technology created at study</p>
            <p>Electronics and Automation Engineering</p>
          </div>
        </div>
        <div className="wrap-card-project">
          <div className="container-card-project">
            <a href="http://polmanpms.online" target="_blank">
              <div
                className="card-project card-p-1"
                onMouseEnter={hovMe}
                onMouseLeave={removeHov}
              >
                <figure>
                  <h4 ref={ketHov}>Lihat Selengkapnya</h4>
                  <img ref={imgHov} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Final Project D4</p>
                    </div>
                    <div className="judul-berita">
                      <p>
                        Monitoring Performance System on Prototype Press Machine
                        Based IoT
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
            <a href="#">
              <div
                className="card-project card-p-2"
                onMouseEnter={hovMe2}
                onMouseLeave={removeHov2}
              >
                <figure>
                  <h4 ref={ketHov2}>Lihat Selengkapnya</h4>
                  <img ref={imgHov2} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="judul-berita">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
            <a href="#">
              <div
                className="card-project card-p-3"
                onMouseEnter={hovMe3}
                onMouseLeave={removeHov3}
              >
                <figure>
                  <h4 ref={ketHov3}>Lihat Selengkapnya</h4>
                  <img ref={imgHov3} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="judul-berita">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
            <a href="#">
              <div
                className="card-project card-p-4"
                onMouseEnter={hovMe4}
                onMouseLeave={removeHov4}
              >
                <figure>
                  <h4 ref={ketHov4}>Lihat Selengkapnya</h4>
                  <img ref={imgHov4} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="judul-berita">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
            <a href="#">
              <div
                className="card-project card-p-5"
                onMouseEnter={hovMe5}
                onMouseLeave={removeHov5}
              >
                <figure>
                  <h4 ref={ketHov5}>Lihat Selengkapnya</h4>
                  <img ref={imgHov5} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="judul-berita">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
            <a href="#">
              <div
                className="card-project card-p-6"
                onMouseEnter={hovMe6}
                onMouseLeave={removeHov6}
              >
                <figure>
                  <h4 ref={ketHov6}>Lihat Selengkapnya</h4>
                  <img ref={imgHov6} src="./pmspolman.jpg" alt="" />
                </figure>
                <article>
                  <div className="title-card-project">
                    <h4>News</h4>
                  </div>
                  <div className="content-card-project">
                    <div className="datetime">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="judul-berita">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
