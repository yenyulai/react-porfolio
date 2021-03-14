import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkList from "../components/WorkList";
import TravelImgs from "../images/Let's go travel planner-p1.png"
import QuarantineImg from "../images/Quarantine-Match.jpg"
import ScheduleImg from "../images/Schedule-Perfect.png"
import WeatherImg from "../images/Weather-Forecast.png"

const projects = [
  {
    id: 1,
    name: "Travel Planner",
    url: "https://stormy-springs-60842.herokuapp.com",
    repo: "https://github.com/yenyulai/travel-planner",
    // img: "./images/Let's go travel planner- p1.png"
    img: TravelImgs
  },
  {
    id: 2,
    name: "Quarantine-Match",
    url: "https://elogonme.github.io/quarantine-match/",
    repo: "https://github.com/yenyulai/Quarantine-Match",
    img: QuarantineImg
  },
  {
    id: 3,
    name: "Schadule-perfect",
    url: "https://yenyulai.github.io/Schedule-Perfect",
    repo: "https://github.com/yenyulai/Schedule-Perfect",
    img: ScheduleImg
  },
  {
    id: 4,
    name: "Weather_Forecast",
    url: "https://yenyulai.github.io/Weather_Forecast/",
    repo: "https://github.com/yenyulai/Weather_Forecast",
    img: WeatherImg
  },
];

function Project() {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 maincolumn">
            <header>
              <h1>Portfolio</h1>
            </header>
            <hr />
          </div>
          <WorkList projects={projects} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
