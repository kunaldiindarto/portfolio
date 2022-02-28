import "./Resume.css";

function Resume() {
  return (
    <section className="resume">
      <div className="wrap-resume">
        <div className="title-resume">
          <div className="title-1">
            <h1>R</h1>
            <h1>esume</h1>
          </div>
          <div className="content-title-resume">
            <p>explore my experiences, rewards,</p>
            <p>and education, as well as my activeness</p>
          </div>
        </div>
        <div className="summary">
          <figure>
            <img src="../01.jpg" alt="" />
            <figcaption>
              <h3>Kun Aldi Indarto</h3>
              <p>31 May 1997</p>
              <p>Bandung, West Java</p>
              <p>Automation Engineer</p>
            </figcaption>
          </figure>
          <article>
            <h2>Profile Summary</h2>
            <ul>
              <li>
                <h4>Overview</h4>
                <p>
                  Graduated 2021 Diploma 4 Automation Engineering Polman
                  Bandung.
                </p>
              </li>
              <li>
                <h4>Personality</h4>
                <p>
                  Honest, dicipline, caring, and always try to learn for
                  something new.
                </p>
              </li>
              <li>
                <h4>Job Experiences</h4>
                <p>
                  Team Leader of Production PT. Garuda Food Putra Putri Jaya
                  Tbk.
                </p>
                <p>January 2019 - August 2020</p>
              </li>
              <li>
                <h4>Organization Experiences</h4>
                <p>
                  Leader of division Advocacy student HME POLBAN (2016-2017)
                </p>
                <p>Member PSDM Department BEM Kema POLBAN (2015-2016)</p>
              </li>
            </ul>
          </article>
        </div>
        <div className="dash-resume">
          <header>
            <h3>Education Background</h3>
            <div className="liner-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </header>
          {/*//? awal content timeline 1 */}
          <div className="liner-acc">
            <span></span>
            <span></span>
          </div>
          <div className="sub-title-resume">
            <div className="part-content-dash">
              <div className="time-dash-resume">
                <p>Sep 2020-Oct 2021</p>
              </div>
              <a href="#" target="_?blank">
                <h4>POLMAN Bandung</h4>
              </a>
              <p>D4 Automation Engineering</p>
            </div>
          </div>
          <article>
            <ul>
              <li>
                <h3>Undergraduated Thesis</h3>
                <p>
                  Performance Monitoring System On Press Machine Prototype Based
                  Internet of Things.
                </p>
                <p>
                  Made monitoring performance system (OEE, MTBF, MTTR) and alarm
                  system which has can be see in website
                </p>
              </li>
            </ul>
          </article>
          {/*//? akhir content timeline 1 */}
          {/*//? awal content timeline 2 */}
          <div className="liner-acc2">
            <span></span>
            <span></span>
          </div>
          <div className="sub-title-resume2">
            <div className="part-content-dash2">
              <div className="time-dash-resume2">
                <p>Agt 2015-Sep 2018</p>
              </div>
              <a href="#" target="_?blank">
                <h4>POLBAN</h4>
              </a>
              <p>D3 Electronics Engineering</p>
            </div>
          </div>
          <article className="content-2">
            <ul>
              <li>
                <h3>Final Project</h3>
                <p>
                  HMI SCADA and Control System Fuzzy Logic On Simulation Three
                  Sluices Gates.
                </p>
                <p>
                  Made Simulation SCADA system three sluices gates. Control
                  system by Microcontroller Arduino, HMI made with Wonderware
                  Intouch, protocol communication Modbus and used OPC Kepserver
                  Ex.
                </p>
              </li>
            </ul>
          </article>
          {/*//? akhir content timeline 2 */}
        </div>

        {/*//todo Bagian Experiences Job */}
        <div className="dash-resume2">
          <header>
            <h3>Experiences Job & Internship</h3>
            <div className="liner-header2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </header>
          {/*//? awal content timeline dash-resume2 */}
          <div className="liner-acc3">
            <span></span>
            <span></span>
          </div>
          <div className="sub-title-resume3">
            <div className="part-content-dash3">
              <div className="time-dash-resume3">
                <p>Jan 2019-Agt 2020</p>
              </div>
              <a href="#" target="_?blank">
                <h4>PT. Garuda Food Putra Putri Jaya Tbk.</h4>
              </a>
              <p>Team Leader Production</p>
            </div>
          </div>
          <article className="content-3">
            <ul>
              <h3>Jobs and Responsible</h3>
              <li>
                <p>
                  Manage and mapping for position operator and packer (85
                  member)
                </p>
              </li>
              <li>
                <p>
                  Material handling (Handling raw material and packaging
                  material process production malkist based on standard
                  procedure)
                </p>
              </li>
              <li>
                <p>
                  Process production (Coordinate about process production and
                  execute packing process)
                </p>
              </li>
              <li>
                <p>Made shift report production (yield rm, yield pm, OEE).</p>
              </li>
            </ul>
          </article>
          {/*//? akhir content timeline dash-resume2 */}
          {/*//? awal content timeline dash-resume3 */}
          <div className="liner-acc4">
            <span></span>
            <span></span>
          </div>
          <div className="sub-title-resume4">
            <div className="part-content-dash4">
              <div className="time-dash-resume4">
                <p>Sep 2020-Feb 2021</p>
              </div>
              <a href="#" target="_?blank">
                <h4>PPI POLMAN Bandung</h4>
              </a>
              <p>Lab. Driver and Motor</p>
            </div>
          </div>
          <article className="content-4">
            <ul>
              <h3>Jobs</h3>
              <li>
                <p>Repair Power supply module 15V 3A and oscillator module</p>
              </li>
              <li>
                <p>
                  Made power supply and oscillator module routing PCB in
                  software Altium
                </p>
              </li>
            </ul>
          </article>
          {/*//? akhir content timeline dash-resume3 */}
          {/*//? awal content timeline dash-resume4 */}
          <div className="liner-acc5">
            <span></span>
            <span></span>
          </div>
          <div className="sub-title-resume5">
            <div className="part-content-dash5">
              <div className="time-dash-resume5">
                <p>Sep 2020-Feb 2021</p>
              </div>
              <a href="#" target="_?blank">
                <h4>PT. Dirgantara Indonesia</h4>
              </a>
              <p>Avionic Electrical Instrumentation</p>
            </div>
          </div>
          <article className="content-5">
            <ul>
              <h3>Jobs and Responsible</h3>
              <li>
                <p>Harness wiring instrument CN-235 Airplane</p>
              </li>
              <li>
                <p>Learn and made report deicing system in CN-235 Airplane</p>
              </li>
            </ul>
          </article>
          {/*//? akhir content timeline dash-resume4 */}
          {/*//* Akhir Experiences Job */}
        </div>
      </div>
    </section>
  );
}

export default Resume;
