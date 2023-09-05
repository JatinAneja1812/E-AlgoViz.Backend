import React, { useEffect, useState, useReducer, useRef } from "react";
import { DescriptionEnum } from "../../Enums/HomeCardsDescriptionEnum";
import { VisualizerCardWrapper } from "./VisualizerCard.styles";
import { useNavigate } from "react-router-dom";
import uploadFiles from "../../imgs/uploadFiles.gif";
import InAppMessageing from "../../imgs/InAppMessaging.gif";
import bstVis from "../../imgs/bst.gif";
import CircularStatic from "../../Utility/Hooks/LoadingWithLabel";
import codeImage from "../../imgs/code.gif";

const slides = [
  {
    title: "Sorting Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.SORTING_ALGORITHM_TEXT.toString(),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Comb_sort_demo.gif",
  },
  {
    title: "Binary Search Tree Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.BST_ALGO_TEXT.toString(),
    image: bstVis,
  },
  {
    title: "Pathfinding Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.PATHFINDING_ALGORITHM_TEXT.toString(),
    image: "https://i.gifer.com/7qRB.gif",
  },
  {
    title: "Prime Numbers Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.PRIME_NUMBER_ALGO_TEXT.toString(),
    image:
      "https://scx2.b-cdn.net/gfx/news/2018/whyprimenumb.gif",
  },
  {
    title: "Knowledge Hub: Exam Papers and Notes",
    subtitle: "Share and Access Educational Resources",
    description: DescriptionEnum.FILE_STORAGE.toString(),
    image: uploadFiles,
  },
  {
    title: "Explore Algorithms",
    subtitle: "Visualize Algorithm & their Explainations",
    description: DescriptionEnum.CODE_MANAGER.toString(),
    image: codeImage,
  },
  {
    title: "E-AlgoVis ChatRooms",
    subtitle: "Connect & Collaborate",
    description: DescriptionEnum.CHAT_APP.toString(),
    image: InAppMessageing,
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: Math.floor(slides.length / 2),
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex - 1 + slides.length) % slides.length,
    };
  }
};

function Slide({ slide, offset }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  
  const VisualizerClick = (Title) => {
    switch (Title) {
      case "Pathfinding Algorithm":
        setIsLoading(true);
        const timer1 = setTimeout(async () => {
          try {
            const path = "/pathfindingvisualizer";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer1) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Sorting Algorithm":
        setIsLoading(true);
        const timer2 = setTimeout(async () => {
          try {
            const path = "/sortingVisualizer";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer2) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Prime Numbers Algorithm":
        setIsLoading(true);
        const timer3 = setTimeout(async () => {
          try {
            const path = "/primeNumberVisualizer";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);

            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer3) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Binary Search Tree Algorithm":
        setIsLoading(true);
        const timer4 = setTimeout(async () => {
          try {
            const path = "/bstVisualizer";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer4) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Knowledge Hub: Exam Papers and Notes":
        setIsLoading(true);
        const timer5 = setTimeout(async () => {
          try {
            const path = "/filesUploadandDownload";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer5) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Explore Algorithms":
        setIsLoading(true);
        const timer6 = setTimeout(async () => {
          try {
            const path = "/codeManager";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer6) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "E-AlgoVis ChatRooms":
        setIsLoading(true);
        const timer7 = setTimeout(async () => {
          try {
            const path = "/chatRoomApp";
            const timeout = setTimeout(() => {
              navigate(path);
              setIsLoading(false);
            }, 3000);
  
            return () => clearTimeout(timeout) && setIsLoading(false);
          } catch (error) {
            navigate("/homepage");
            setIsLoading(false);
            return () => clearTimeout(timer7) && setIsLoading(false);
          }
        }, 5000);
        break;
      default:
        break;
    }
  };
  
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="imageOverlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the alpha value for darkness
            filter: "blur(3px)", // Adjust the blur value as desired
          }}
        ></div>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <div className="slideDescription">
            <p>{slide.description}</p>
          </div>
          <div className="center">
            <button
              className={!isLoading ? "btn" : "btnDisabled"}
              onClick={() => VisualizerClick(slide.title)}
              disabled={isLoading}
            >
              {isLoading ? (
                <div>
                  <CircularStatic isLoading={isLoading}  />
                </div>
              ) : (
                <>
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    className="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      className="hl-line"
                    />
                  </svg>
                  <span>Let's Explore</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VisualizerCard(props) {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const showPrevButton = state.slideIndex !== 0;
  const showNextButton = state.slideIndex !== slides.length - 1;

  return (
    <>
      <VisualizerCardWrapper>
        <div className="textContainer">
          <p> {DescriptionEnum.ALGORITHM_TEXT.toString()} </p>
        </div>
        <div className="slides">
          {showPrevButton && (
            <button
              onClick={() => dispatch({ type: "PREV" })}
              style={{ color: "#000" }}
            >
              ‹
            </button>
          )}

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}

          {showNextButton && (
            <button
              onClick={() => dispatch({ type: "NEXT" })}
              style={{ color: "#000" }}
            >
              ›
            </button>
          )}
        </div>
      </VisualizerCardWrapper>
    </>
  );
}
