import React from "react";
import Layout from "../components/layout/Layout.js";
import "./Homepage.css";
import hero from "../assets/hero.gif";
import { GiSelfLove } from "react-icons/gi";

const Homepage = () => {
  return (
    <>
      <Layout title={"Neha/Home"}>
        {/* Hero Banner */}
        <section className="Hero ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copy">
                  <div className="text-bold">Meenamma...!👧🏻</div>
                  <div className="text-hero-regular">
                    Sorry meenamma nade tappu telusukunna inkeppudu ela cheyyanu
                    okka last chance istava pls....
                  </div>

                  <a href="/pain" className="btn btn-outline filled">
                    IKKADA PAIN UNDI
                    <span className="love">{<GiSelfLove />}</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-12"></div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <img src={hero} alt="mana gif" className="hero-giff w-100" />
              </div>
            </div>
          </div>
        </section>
        <h1>
          Nehu poi Ede link laptop lo open cheyyu I love you soo much nehuuu...
        </h1>
      </Layout>
    </>
  );
};

export default Homepage;
