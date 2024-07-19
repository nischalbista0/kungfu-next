import React, { useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaBackward,
  FaForward,
  FaTv,
  FaTabletAlt,
  FaCog,
  FaDotCircle,
} from "react-icons/fa";
import quizData from "../../data/quizQuestions.json";
import QuizCardPopup from "./QuizCardPopup";
import { quizCompletionAtom, submittedAnswersAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";
import QuizCompletionPopup from "./QuizCompletionPopup";

// Function to convert timestamp to seconds
const convertToSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

// Function to convert timestamp to percentage
const timestampToPercentage = (videoLength, timestamp) => {
  const videoLengthInSeconds = convertToSeconds(videoLength);
  const timestampInSeconds = convertToSeconds(timestamp);
  return (timestampInSeconds / videoLengthInSeconds) * 100;
};

const CreateChallengeSection = () => {
  const videoLength = quizData.videoLength;

  const [submittedAnswers, setSubmittedAnswers] = useAtom(submittedAnswersAtom);

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const video = document.querySelector("video");
    video.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const video = document.querySelector("video");
    const fullscreen = document.querySelector(".fullscreen-btn");
    const playPause = document.querySelector(".play-pause");
    const volume = document.querySelector(".volume");
    const currentTime = document.querySelector(".current-time");
    const duration = document.querySelector(".duration");
    const buffer = document.querySelector(".buffer");
    const totalDuration = document.querySelector(".total-duration");
    const currentDuration = document.querySelector(".current-duration");
    const controls = document.querySelector(".controls");
    const videoContainer = document.querySelector(".video-container");
    const currentVol = document.querySelector(".current-vol");
    const totalVol = document.querySelector(".max-vol");
    const mainState = document.querySelector(".main-state");
    const muteUnmute = document.querySelector(".mute-unmute");
    const forward = document.querySelector(".forward");
    const backward = document.querySelector(".backward");
    const hoverTime = document.querySelector(".hover-time");
    const hoverDuration = document.querySelector(".hover-duration");
    const miniPlayer = document.querySelector(".mini-player");
    const settingsBtn = document.querySelector(".setting-btn");
    const settingMenu = document.querySelector(".setting-menu");
    const theaterBtn = document.querySelector(".theater-btn");
    const speedButtons = document.querySelectorAll(".setting-menu li");
    const backwardSate = document.querySelector(".state-backward");
    const forwardSate = document.querySelector(".state-forward");
    // const loading = document.querySelector(".custom-loader");

    let mouseDownProgress = false,
      mouseDownVol = false,
      isCursorOnControls = false,
      muted = false,
      timeout,
      volumeVal = 1,
      mouseOverDuration = false,
      touchClientX = 0,
      touchPastDurationWidth = 0,
      touchStartTime = 0;

    currentVol.style.width = volumeVal * 100 + "%";
    // Video Event Listeners
    video.addEventListener("loadedmetadata", canPlayInit);
    video.addEventListener("play", play);
    video.addEventListener("pause", pause);
    video.addEventListener("progress", handleProgress);

    // video.onwaiting = function () {
    //   loading.style.display = "block";
    // };
    // video.onplaying = function () {
    //   loading.style.display = "none";
    // };

    fullscreen.addEventListener("click", toggleFullscreen);
    videoContainer.addEventListener("fullscreenchange", () => {
      videoContainer.classList.toggle("fullscreen", document.fullscreenElement);
    });

    // playPause.addEventListener("click", (e) => {
    //   if (!isPlaying) {
    //     play();
    //   } else {
    //     pause();
    //   }
    // });

    duration.addEventListener("click", navigate);

    duration.addEventListener("mousedown", (e) => {
      mouseDownProgress = true;
      navigate(e);
    });

    totalVol.addEventListener("mousedown", (e) => {
      mouseDownVol = true;
      handleVolume(e);
    });

    document.addEventListener("mouseup", (e) => {
      mouseDownProgress = false;
      mouseDownVol = false;
    });

    document.addEventListener("mousemove", handleMousemove);

    duration.addEventListener("mouseenter", (e) => {
      mouseOverDuration = true;
    });
    duration.addEventListener("mouseleave", (e) => {
      mouseOverDuration = false;
      hoverTime.style.width = 0;
      hoverDuration.innerHTML = "";
    });

    videoContainer.addEventListener("mouseleave", hideControls);
    videoContainer.addEventListener("mousemove", (e) => {
      controls.classList.add("show-controls");
      hideControls();
    });

    videoContainer.addEventListener("touchstart", (e) => {
      controls.classList.add("show-controls");
      touchClientX = e.changedTouches[0].clientX;
      const currentTimeRect = currentTime.getBoundingClientRect();
      touchPastDurationWidth = currentTimeRect.width;
      touchStartTime = e.timeStamp;
    });
    videoContainer.addEventListener("touchend", () => {
      hideControls();
      touchClientX = 0;
      touchPastDurationWidth = 0;
      touchStartTime = 0;
    });
    videoContainer.addEventListener("touchmove", touchNavigate);

    function touchNavigate(e) {
      hideControls();
      if (e.timeStamp - touchStartTime > 500) {
        const durationRect = duration.getBoundingClientRect();
        const clientX = e.changedTouches[0].clientX;
        const value = Math.min(
          Math.max(0, touchPastDurationWidth + (clientX - touchClientX) * 0.2),
          durationRect.width
        );
        currentTime.style.width = value + "px";
        video.currentTime = (value / durationRect.width) * video.duration;
        currentDuration.innerHTML = showDuration(video.currentTime);
      }
    }

    controls.addEventListener("mouseenter", (e) => {
      controls.classList.add("show-controls");
      isCursorOnControls = true;
    });

    controls.addEventListener("mouseleave", (e) => {
      isCursorOnControls = false;
    });

    mainState.addEventListener("animationend", handleMainSateAnimationEnd);

    muteUnmute.addEventListener("click", toggleMuteUnmute);

    muteUnmute.addEventListener("mouseenter", (e) => {
      if (!muted) {
        totalVol.classList.add("show");
      } else {
        totalVol.classList.remove("show");
      }
    });

    muteUnmute.addEventListener("mouseleave", (e) => {
      if (e.relatedTarget != volume) {
        totalVol.classList.remove("show");
      }
    });

    forward.addEventListener("click", handleForward);

    forwardSate.addEventListener("animationend", () => {
      forwardSate.classList.remove("show-state");
      forwardSate.classList.remove("animate-state");
    });

    backward.addEventListener("click", handleBackward);

    backwardSate.addEventListener("animationend", () => {
      backwardSate.classList.remove("show-state");
      backwardSate.classList.remove("animate-state");
    });

    miniPlayer.addEventListener("click", toggleMiniPlayer);

    theaterBtn.addEventListener("click", toggleTheater);

    settingsBtn.addEventListener("click", handleSettingMenu);

    speedButtons.forEach((btn) => {
      btn.addEventListener("click", handlePlaybackRate);
    });

    document.addEventListener("keydown", (e) => {
      const tagName = document.activeElement.tagName.toLowerCase();
      if (tagName === "input") return;
      if (e.key.match(/[0-9]/gi)) {
        video.currentTime = (video.duration / 100) * (parseInt(e.key) * 10);
        currentTime.style.width = parseInt(e.key) * 10 + "%";
      }
      switch (e.key.toLowerCase()) {
        case " ":
          if (tagName === "button") return;
          if (isPlaying) {
            video.pause();
          } else {
            video.play();
          }
          break;
        case "f":
          toggleFullscreen();
          break;
        case "arrowright":
          handleForward();
          break;
        case "arrowleft":
          handleBackward();
          break;
        case "t":
          toggleTheater();
          break;
        case "i":
          toggleMiniPlayer();
          break;
        case "m":
          toggleMuteUnmute();
          break;
        case "+":
          handlePlaybackRateKey("increase");
          break;
        case "-":
          handlePlaybackRateKey();
          break;

        default:
          break;
      }
    });

    function canPlayInit() {
      totalDuration.innerHTML = showDuration(video.duration);
      video.volume = volumeVal;
      muted = video.muted;
      if (video.paused) {
        controls.classList.add("show-controls");
        mainState.classList.add("show-state");
        handleMainStateIcon(<FaPlay />);
      }
    }

    function play() {
      video.play();
      setIsPlaying(true);
      // playPause.innerHTML = <FaPause />;
      // mainState.classList.remove("show-state");
      // handleMainStateIcon(<FaPause />);
    }

    video.ontimeupdate = handleProgressBar;

    function handleProgressBar() {
      currentTime.style.width =
        (video.currentTime / video.duration) * 100 + "%";
      currentDuration.innerHTML = showDuration(video.currentTime);
    }

    function pause() {
      video.pause();
      setIsPlaying(false);
      // playPause.innerHTML = <FaPlay />;
      // controls.classList.add("show-controls");
      // mainState.classList.add("show-state");
      // handleMainStateIcon(<FaPlay />);
      // if (video.ended) {
      //   currentTime.style.width = 100 + "%";
      // }
    }

    function navigate(e) {
      const totalDurationRect = duration.getBoundingClientRect();
      const width = Math.min(
        Math.max(0, e.clientX - totalDurationRect.x),
        totalDurationRect.width
      );
      currentTime.style.width = (width / totalDurationRect.width) * 100 + "%";
      video.currentTime = (width / totalDurationRect.width) * video.duration;
    }

    function handleMousemove(e) {
      if (mouseDownProgress) {
        navigate(e);
      }
      if (mouseDownVol) {
        handleVolume(e);
      }
      if (mouseOverDuration) {
        const totalDurationRect = duration.getBoundingClientRect();
        const width = Math.min(
          Math.max(0, e.clientX - totalDurationRect.x),
          totalDurationRect.width
        );
        hoverTime.style.width = width + "px";
        hoverDuration.innerHTML = showDuration(
          (width / totalDurationRect.width) * video.duration
        );
      }
    }

    function handleProgress() {
      if (video.buffered.length > 0) {
        // Safely access the last buffered range
        const currentBuffer = video.buffered.end(video.buffered.length - 1);
        buffer.style.width = (currentBuffer / video.duration) * 100 + "%";
      }
    }

    function hideControls() {
      clearTimeout(timeout);
      if (!video.paused) {
        timeout = setTimeout(() => {
          if (!isCursorOnControls) {
            controls.classList.remove("show-controls");
          }
        }, 3000);
      }
    }

    function showDuration(duration) {
      const s = Math.floor(duration % 60);
      const m = Math.floor((duration % 3600) / 60);
      const h = Math.floor(duration / 3600);
      if (h === 0) {
        return m + ":" + (s < 10 ? "0" : "") + s;
      } else {
        return (
          h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s
        );
      }
    }

    function handleVolume(e) {
      const totalVolRect = totalVol.getBoundingClientRect();
      const width = Math.min(
        Math.max(0, e.clientX - totalVolRect.x),
        totalVolRect.width
      );
      currentVol.style.width = width + "px";
      video.volume = width / totalVolRect.width;
      volumeVal = video.volume;
      muted = video.volume === 0;
      handleVolumeIcons();
    }

    function handleVolumeIcons() {
      if (muted) {
        muteUnmute.innerHTML = <FaVolumeMute />;
      } else if (video.volume <= 0.5) {
        muteUnmute.innerHTML = <FaVolumeUp />;
      } else {
        muteUnmute.innerHTML = <FaVolumeUp />;
      }
    }

    function toggleFullscreen() {
      if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }

    function toggleMuteUnmute() {
      muted = !muted;
      video.muted = muted;
      if (muted) {
        currentVol.style.width = 0;
      } else {
        currentVol.style.width = volumeVal * 100 + "%";
      }
      handleVolumeIcons();
    }

    function handleMainSateAnimationEnd() {
      mainState.classList.remove("show-state");
    }

    function handleForward() {
      forwardSate.classList.add("show-state");
      forwardSate.classList.add("animate-state");
      video.currentTime += 10;
      handleProgressBar();
    }

    function handleBackward() {
      backwardSate.classList.add("show-state");
      backwardSate.classList.add("animate-state");
      video.currentTime -= 10;
      handleProgressBar();
    }

    function handleMainStateIcon(icon) {
      mainState.innerHTML = icon;
    }

    function toggleMiniPlayer() {
      if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture();
      } else {
        video.requestPictureInPicture();
      }
    }

    video.addEventListener("enterpictureinpicture", () => {
      videoContainer.classList.add("mini-player");
    });

    video.addEventListener("leavepictureinpicture", () => {
      videoContainer.classList.remove("mini-player");
    });

    function toggleTheater() {
      videoContainer.classList.toggle("theater-mode");
    }

    function handleSettingMenu() {
      settingMenu.classList.toggle("show-menu");
      settingsBtn.classList.toggle("active");
    }

    function handlePlaybackRate(e) {
      video.playbackRate = e.target.dataset.speed;
      speedButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
    }

    function handlePlaybackRateKey(type) {
      if (type === "increase" && video.playbackRate <= 1.75) {
        video.playbackRate += 0.25;
      } else if (type !== "increase" && video.playbackRate >= 0.5) {
        video.playbackRate -= 0.25;
      }
      speedButtons.forEach((btn) => {
        if (video.playbackRate == btn.dataset.speed) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }
  }, []);

  // Popup Quiz Logic

  const [showPopup, setShowPopup] = useState(false);
  const [quizItems, setQuizItems] = useState([]);
  const [showQuizCompletionPopup, setShowQuizCompletionPopup] =
    useAtom(quizCompletionAtom);

  useEffect(() => {
    const video = document.querySelector("video");

    const checkTimestamp = () => {
      quizData.quiz.forEach((quizItem) => {
        if (
          convertToSeconds(quizItem.timestamp) <= video.currentTime &&
          !submittedAnswers[quizItem.question]
        ) {
          video.pause();
          setIsPlaying(false);
          setQuizItems(quizItem);
          setShowPopup(true);
        }
      });
    };

    video.addEventListener("timeupdate", checkTimestamp);

    return () => {
      video.removeEventListener("timeupdate", checkTimestamp);
    };
  }, [submittedAnswers]);

  // Check if all questions have been answered
  // Object.keys(submittedAnswers).length === quizData.quiz.length - 1;
  // if (allAttempted) {
  //   setQuizCompletion(true);
  // }

  useEffect(() => {
    Object.keys(submittedAnswers).length === quizData.quiz.length
      ? setShowQuizCompletionPopup(true)
      : setShowQuizCompletionPopup(false);
  }, [submittedAnswers]);

  return (
    <section id="content-wrapper">
      <div className="custom-container create-challenge-container">
        <div className="section-container type-small center">
          <div className="section-title">
            <h1>Give it a try!</h1>
          </div>
        </div>

        <section className="kfq-sample-section">
          <div className="video-container">
            <video
              id="video"
              disableRemotePlayback
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ></video>
            <div className="player-state">
              <span className="state-btn state-backward">
                <FaBackward />
                <span className="backward-duration">5</span>
              </span>
              <span className="main-state state-btn">
                <FaPlay />
              </span>
              <span className="custom-loader"></span>
              <span className="state-btn state-forward">
                <span className="forward-duration">5</span>
                <FaForward />
              </span>
            </div>
            <div className="controls">
              <div className="duration">
                <div className="current-time"></div>
                <div className="hover-time">
                  <span className="hover-duration"></span>
                </div>
                <div className="buffer"></div>

                <div className="quiz-questions">
                  {quizData.quiz.map((quizItem, index) => (
                    <div
                      key={index}
                      className="quiz-question-timestamp"
                      style={{
                        left:
                          timestampToPercentage(
                            videoLength,
                            quizItem.timestamp
                          ).toFixed(2) + "%",
                        backgroundColor: submittedAnswers[quizItem.question]
                          ? "#faedca" // Change to your desired background color
                          : "#bcf0da",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        video.pause();

                        setQuizItems(quizItem);
                        setShowPopup(true);
                      }}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill={
                          submittedAnswers[quizItem.question]
                            ? "#d1a350"
                            : "#000"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        class="_mark--primary_1hg4o_38"
                      >
                        <path d="M12.0287 8.99958C12.4333 9.70309 13.519 9.83437 14.4535 9.29281C15.3881 8.75125 15.8176 7.74193 15.4129 7.03842C15.0083 6.33492 13.9226 6.20363 12.9881 6.74519C12.0536 7.28675 11.624 8.29607 12.0287 8.99958Z"></path>
                        <path d="M8.80564 6.33818C9.21031 7.04169 10.2959 7.17297 11.2305 6.63141C12.165 6.08985 12.5946 5.08053 12.1899 4.37702C11.7852 3.67352 10.6996 3.54223 9.76506 4.08379C8.83052 4.62535 8.40098 5.63467 8.80564 6.33818Z"></path>
                        <path d="M12.7134 13.1318C13.1181 13.8353 14.2038 13.9666 15.1383 13.425C16.0728 12.8835 16.5024 11.8741 16.0977 11.1706C15.693 10.4671 14.6074 10.3358 13.6729 10.8774C12.7383 11.419 12.3088 12.4283 12.7134 13.1318Z"></path>
                        <path d="M11.1827 9.48983C9.86726 7.20303 6.64702 6.45684 4.933 7.4501C3.39124 8.34354 3.35351 10.5877 4.83718 13.167C6.32085 15.7463 8.27599 16.8356 9.81775 15.9422C11.5318 14.9489 12.4981 11.7766 11.1827 9.48983ZM9.72741 14.0509C9.638 14.0087 9.56365 13.9399 9.51442 13.8539C9.47471 13.7851 9.45228 13.7076 9.44907 13.6281C9.44586 13.5486 9.46197 13.4696 9.496 13.3977C9.69091 13.0044 9.80634 12.5762 9.83564 12.1379C9.86494 11.6995 9.80754 11.2597 9.66673 10.8438C9.62075 10.7222 9.62477 10.5872 9.67792 10.4686C9.73107 10.35 9.82898 10.2574 9.95013 10.2113C10.0713 10.1651 10.2057 10.1691 10.3239 10.2225C10.4421 10.2758 10.5343 10.3741 10.5803 10.4957C10.7669 11.0356 10.8451 11.6072 10.8105 12.1776C10.7758 12.748 10.629 13.3059 10.3784 13.8191C10.3508 13.8772 10.3121 13.9293 10.2645 13.9724C10.2169 14.0155 10.1612 14.0488 10.1008 14.0703C10.0403 14.0919 9.97622 14.1012 9.91216 14.0979C9.8481 14.0946 9.78532 14.0786 9.72741 14.0509Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="btn-controls">
                <div className="btn-con">
                  <span
                    className="play-pause control-btn"
                    onClick={() => {
                      if (isPlaying) {
                        video.pause();
                        setIsPlaying(false);
                      } else {
                        video.play();
                        setIsPlaying(true);
                      }
                    }}
                  >
                    {/* <FaPlay /> */}
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </span>
                  <span className="volume">
                    <span className="mute-unmute control-btn">
                      <FaVolumeUp />
                    </span>
                    <div className="max-vol">
                      <div className="current-vol"></div>
                    </div>
                  </span>
                  <span className="time-container">
                    <span className="current-duration">0:00</span>
                    <span>/</span>
                    <span className="total-duration">0:00</span>
                  </span>
                </div>
                <div className="right-controls">
                  <span className="backward control-btn" title="5 backward">
                    <FaBackward />
                  </span>
                  <span className="forward control-btn" title="5 forward">
                    <FaForward />
                  </span>
                  <span className="mini-player control-btn">
                    <FaDotCircle />
                  </span>
                  <span className="settings control-btn">
                    <span className="setting-btn">
                      <FaCog />
                    </span>
                    <ul className="setting-menu">
                      <li data-value="0.25">0.25x</li>
                      <li data-value="0.5">0.5x</li>
                      <li data-value="0.75">0.75x</li>
                      <li data-value="1" className="speed-active">
                        1x
                      </li>
                      <li data-value="1.25">1.25x</li>
                      <li data-value="1.5">1.5x</li>
                      <li data-value="1.75">1.75x</li>
                      <li data-value="2">2x</li>
                    </ul>
                  </span>
                  <span className="theater-btn control-btn">
                    <span className="theater-default">
                      <FaTabletAlt />
                    </span>
                    <span className="theater-active">
                      <FaTv />
                    </span>
                  </span>
                  <span
                    className="fullscreen-btn control-btn"
                    title="fullscreen"
                  >
                    <span className="full">
                      <FaExpand />
                    </span>
                    <span className="contract">
                      <FaCompress />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {showPopup && (
            <QuizCardPopup
              setShowPopup={setShowPopup}
              showPopup={showPopup}
              quizItem={quizItems}
              play={play}
              allQuizes={quizData}
            />
          )}

          {showQuizCompletionPopup && <QuizCompletionPopup />}
        </section>
      </div>
    </section>
  );
};

export default CreateChallengeSection;
