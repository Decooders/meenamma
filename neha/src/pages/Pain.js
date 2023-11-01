import React from "react";
import Layout from "./../components/layout/Layout";
import "../pages/Pain.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import pain from "../assets/pain.gif";

const Pain = () => {
  return (
    <>
      <Layout title={"Neha/Pain"}>
        {/* Pain Banner */}
        <section className="Pain ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="title">Sorry Nehu....🙇‍♂️</div>
                <div className="pain-text">
                  I swear that I will put more effort into our relationship to
                  be successful. Please bear with me; I'm sorry.
                  <br /> Ne chubbuluuu kada kshaminchu nehu pls... I love you
                  🫰🏼!
                </div>
                <div className="icons-head">
                  Unblock Chestava pls... click chey okkoti..👇
                </div>
                <div className="icons">
                  <a href="https://wa.me/9010611618" target="_blank">
                    <BsFillSuitHeartFill />
                  </a>
                  <a
                    href="https://www.instagram.com/maisubhanihoon/"
                    target="_blank"
                  >
                    <BsFillSuitHeartFill />
                  </a>
                  <a href="tel:+9010611618" target="_blank">
                    <BsFillSuitHeartFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 pain">
                <img src={pain} alt="mana gif" className="pain-giff" />
              </div>
              <a href="/" className="btn btn-outline filled">
                INTAKU MUNDU LA UNDAMA CLICK CHEY...🙏🏼
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pain;
