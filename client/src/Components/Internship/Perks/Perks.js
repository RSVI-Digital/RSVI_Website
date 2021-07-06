import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Style from "./Perks.module.css";

function Perks() {
  return (
    <React.Fragment>
      <body>
        <h1 className={Style.heading}>PERKS</h1>

        <div className={Style.containerfluid}>
          <div className={Style.row}>
            {/* card1 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=1TPaKoxVhNQfUbcIS-1HNezQaaSnycWu4"
                  className={Style.cardimgtop}
                  alt="error"
                />
              </div>

              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">WORK FROM HOME</h5>
                <p>You can work from anywhere in country.</p>
              </div>
            </div>

            {/* card2 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=16ySjfcR-mYtzD5ID6h_tpqeO4TUmLjU1"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>

              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">PART-TIME</h5>
                <p>
                  Have prior commitments, classes or assignments? No problem
                </p>
              </div>
            </div>

            {/* card3 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=1ZeJTvFOH9w9_rJWYNvXSv3iPUxW0GK23"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>
              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">FLEXIBLE HOURS</h5>
                <p>You will require 3 hours a day but at your convenience.</p>
              </div>
            </div>

            {/* card4 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=1cLi_bcnZ1xDn2wVZuQ7t10dMKcE2xjpg"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>
              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">
                  DEVELOP MARKETING SKILLS
                </h5>

                <p>
                  Develop crucial skills like poaching and interpersonal
                  communication,and persuasion.
                </p>
              </div>
            </div>

            {/* card5 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=155qoelx0Oxqmr84C-mRZMK0ofh-fQn-0"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>
              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">
                  SOCIAL MEDIA SHOUTOUT
                </h5>

                <p>Get shoutout for your efforts.</p>
              </div>
            </div>

            {/* card6 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=1NsD6TdjwIXA-zizKtJTbytv3_QCxZzi7"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>
              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">
                  LETTER OF RECOMMENDATION
                </h5>
                <p>Have a chance to get a LOR from the president of the NGO.</p>
              </div>
            </div>

            {/* card7 */}
            <div className={Style.cardmain}>
              <div className={Style.card}>
                <img
                  src="https://docs.google.com/uc?id=1d1gQWr1lEzOnA7XGlKIznGLlS0GBaq5p"
                  className={Style.cardimgtop}
                  alt="..."
                />
              </div>
              <div className={Style.cardbody}>
                <h5 class="card-title text-center fw-bold ">
                  INTERNSHIP COMPLETION CERTIFICATE
                </h5>
                <p>get your internship completion certificate.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Perks;

