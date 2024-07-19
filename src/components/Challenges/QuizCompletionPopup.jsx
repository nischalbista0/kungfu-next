import React from "react";
import { useAtom } from "jotai";
import { userPointsAtom, quizCompletionAtom } from "@/atoms/atoms";

const QuizCompletionPopup = () => {
  const [userPoints] = useAtom(userPointsAtom);
  const [quizCompletion] = useAtom(quizCompletionAtom);
  const [showCompletionPopup, setShowCompletionPopup] =
    useAtom(quizCompletionAtom);

  if (!quizCompletion) {
    return null;
  }

  const handleClose = () => {
    setShowCompletionPopup(false);
  };

  return (
    <section className="kfq-sample-section">
      <div className="completion-popup-overlay">
        <div className="completion-popup-container">
          <h2 class="_typography_kzf5d_17 _typographyPrimary_kzf5d_25 _endWrapper--content--heading_1cqae_42 _hansLarge_kzf5d_70">
            Congratulations!
          </h2>

          <div className="vstack">
            <p class="_typography_kzf5d_17 _typographyTertiary_kzf5d_41  _hans20_kzf5d_84">
              You have successfully completed the quiz.
            </p>

            <div className="_leaderBoard_1cqae_70">
              <div class="_typography_kzf5d_17 _typographyCommonNeutralsGray_kzf5d_53 _leaderBoard--card_1cqae_75 false _hans20_kzf5d_84">
                <div class="hstack">
                  <p class="_typography_kzf5d_17   ">1</p>
                  <div class="px-3 gap-2 hstack">
                    <div class="_leaderBoard--avatar_1cqae_87 vstack">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1272_17296)">
                          <path
                            d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                            fill="#FF7CB7"
                          ></path>
                          <path
                            d="M59.528 35.3278L36.5126 12.3123L35.7295 13.0955L31.5524 8.91843L28.4475 12.0234L44.4944 28.0704L43.8128 28.7519L31.7319 16.671L29.3105 19.0923L25.7151 15.4969L24.0514 17.1606L27.6468 20.756L29.1045 25.1677L24.9248 29.3474L17.9366 29.8612L13.6863 38.6454L22.2357 47.1948L23.3005 50.7831L32.4201 59.9027C46.0751 58.8123 57.1529 48.5798 59.528 35.3278Z"
                            fill="#FF5CA7"
                          ></path>
                          <path
                            d="M24.1979 31.4211C24.1979 28.5184 21.8448 26.1654 18.9421 26.1654C16.0395 26.1654 13.6864 28.5185 13.6864 31.4211V38.6453C13.6864 38.6453 18.2259 37.2996 18.2259 31.8652H24.1979V31.4211Z"
                            fill="#00ED83"
                          ></path>
                          <path
                            d="M22.4402 40.1947L20.5069 42.1281C19.2606 43.3744 19.1311 45.3516 20.2044 46.7497L23.3005 50.783C24.262 49.8214 24.5504 48.3756 24.0313 47.1187L23.6315 46.1507L25.4409 43.7248L22.4402 40.1947Z"
                            fill="#00ED83"
                          ></path>
                          <path
                            d="M35.802 31.4211C35.802 28.5184 38.1551 26.1654 41.0577 26.1654C43.9604 26.1654 46.3135 28.5185 46.3135 31.4211V38.6453C46.3135 38.6453 41.774 37.2996 41.774 31.8652H35.802V31.4211Z"
                            fill="#00CB71"
                          ></path>
                          <path
                            d="M37.5597 40.1947L39.493 42.1281C40.7393 43.3744 40.8688 45.3516 39.7955 46.7497L36.6994 50.783C35.7379 49.8214 35.4495 48.3756 35.9686 47.1187L36.3685 46.1507L34.559 43.7248L37.5597 40.1947Z"
                            fill="#00CB71"
                          ></path>
                          <path
                            d="M30.0003 15.9552C29.3189 15.9551 28.6375 16.2364 28.1485 16.7992L27.2403 17.8446C26.1411 19.1098 25.9237 20.9169 26.6913 22.4066L28.3834 25.6908H30.0003L31.8818 20.4868L30.0003 15.9552Z"
                            fill="#00ED83"
                          ></path>
                          <path
                            d="M30.0002 25.6908H31.6163L33.3084 22.4066C34.076 20.9168 33.8586 19.1096 32.7594 17.8446L31.8512 16.7992C31.3624 16.2366 30.6813 15.9553 30.0002 15.9552V25.6908Z"
                            fill="#00CB71"
                          ></path>
                          <path
                            d="M30.0003 45.4891L29.9999 45.4888L27.8032 47.5534C27.8032 49.1672 29.9999 51.7246 29.9999 51.7246L30.0003 51.7241L30.6708 48.2197L30.0003 45.4891Z"
                            fill="#00ED83"
                          ></path>
                          <path
                            d="M30.0002 51.7241C30.0089 51.714 32.1966 49.164 32.1966 47.5534L30.0002 45.4891V51.7241Z"
                            fill="#00CB71"
                          ></path>
                          <path
                            d="M30.0003 23.5618H29.9999C28.1816 23.5618 26.4698 23.8845 24.9714 24.4929L24.8229 26.1654L23.399 25.2851C20.9196 26.8109 19.3278 29.2915 19.3278 32.4914C19.3278 32.9896 19.3669 33.5232 19.4414 34.0814L20.6166 34.9928L19.7748 35.8392C20.4496 38.6331 21.85 41.7401 23.7054 44.1063L25.1148 44.1879L24.9347 45.4927C26.4417 46.9793 28.1667 47.9374 29.9999 47.9374H30.0003L33.7634 34.9603L30.0003 23.5618Z"
                            fill="#B25F49"
                          ></path>
                          <path
                            d="M36.6008 25.2848L35.1769 26.1653L35.0284 24.4928C33.5302 23.8845 31.8185 23.5618 30.0004 23.5618V47.9373C31.8335 47.9372 33.5585 46.9788 35.0657 45.4921L34.8853 43.7082L36.2949 44.1056C38.1501 41.7394 39.5503 38.6326 40.2251 35.839L39.3143 35.0659L40.5584 34.0812C40.6329 33.523 40.672 32.9893 40.672 32.4912C40.6722 29.2914 39.0803 26.8106 36.6008 25.2848Z"
                            fill="#8C4A37"
                          ></path>
                          <path
                            d="M30.0004 39.191H27.5581L25.1149 34.9595L27.5572 30.7293H30.0004L31.1722 29.862L30.0004 28.9714H27.5572L24.9715 24.4928C24.4163 24.7182 23.8901 24.9826 23.3991 25.2848L26.035 29.8502L23.5922 34.0812H19.4415C19.5168 34.6453 19.6289 35.2348 19.7749 35.839H23.5923L26.0354 40.0705L23.7055 44.106C24.0961 44.6041 24.5065 45.0697 24.9348 45.4923L27.5581 40.9487H30.0004L31.055 40.0773L30.0004 39.191Z"
                            fill="#8C4A37"
                          ></path>
                          <path
                            d="M33.9648 29.8504L36.6007 25.2848C36.1096 24.9826 35.5835 24.7182 35.0283 24.4928L32.4426 28.9714H30.0004V30.7293H32.4426L34.8853 34.9602L33.664 37.0757L32.4427 39.1911H30.0005V40.9489H32.4427L35.0657 45.4922C35.494 45.0696 35.9044 44.6039 36.295 44.1057L33.9649 40.07L35.1863 37.9546L36.4076 35.8391H40.2251C40.371 35.2349 40.4831 34.6454 40.5585 34.0813H36.4077L33.9648 29.8504Z"
                            fill="#663325"
                          ></path>
                          <path
                            d="M35.3362 15.1523C36.255 15.1523 36.9998 14.4075 36.9998 13.4888C36.9998 12.57 36.255 11.8252 35.3362 11.8252C34.4174 11.8252 33.6726 12.57 33.6726 13.4888C33.6726 14.4075 34.4174 15.1523 35.3362 15.1523Z"
                            fill="#00CDF4"
                          ></path>
                          <path
                            d="M24.8834 17.5051C25.533 17.5051 26.0597 16.9785 26.0597 16.3288C26.0597 15.6791 25.533 15.1525 24.8834 15.1525C24.2337 15.1525 23.707 15.6791 23.707 16.3288C23.707 16.9785 24.2337 17.5051 24.8834 17.5051Z"
                            fill="#75E1F7"
                          ></path>
                          <path
                            d="M31.5532 10.4709L30 12.6666C28.7874 12.6666 27.8044 11.6836 27.8044 10.4711C27.8044 9.25851 28.7874 8.27543 30 8.27543L31.5532 10.4709Z"
                            fill="#75E1F7"
                          ></path>
                          <path
                            d="M32.1955 10.4709C32.1955 11.6835 31.2125 12.6664 30 12.6664V8.27543C31.2125 8.27543 32.1955 9.2584 32.1955 10.4709Z"
                            fill="#00CDF4"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1272_17296">
                            <rect width="60" height="60" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p class="_typography_kzf5d_17">You</p>
                  </div>
                </div>
                <p class="_typography_kzf5d_17 _typographyPrimary_kzf5d_25 px-3 ">
                  {userPoints}
                </p>
              </div>
            </div>
          </div>

          <button className="kungfu-btn submit-btn" onClick={handleClose}>
            <img src="/img/static/buttonBg.svg" alt="Background" />
            <p className="btn-label">End Game</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizCompletionPopup;
