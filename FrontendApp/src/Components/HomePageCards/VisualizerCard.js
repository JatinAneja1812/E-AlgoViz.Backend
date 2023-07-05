import React, { useEffect, useState, useReducer, useRef } from "react";
import { DescriptionEnum } from "../../Enums/DescriptionEnum";
import { VisualizerCardWrapper } from "./VisualizerCard.styles";
import { useNavigate } from "react-router-dom";
import CircularStatic from "../../Utility/Hooks/LoadingWithLabel";

const slides = [
  {
    title: "Sorting Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.SORTING_ALGORITHM_TEXT.toString(),
    image:
      "https://media.istockphoto.com/id/901172818/vector/financial-data-graph-chart-vector-illustration-trend-lines-columns-market-economy-information.jpg?s=612x612&w=0&k=20&c=lHK7Vbt6ifSUTLWjxRHNM2tqI1YPntzhVjkpFVT22uA=",
  },
  {
    title: "Pathfinding Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.PATHFINDING_ALGORITHM_TEXT.toString(),
    image: "https://i.gifer.com/7qRB.gif",
  },
  {
    title: "Machine Learning Algorithm",
    subtitle: "Visualizer",
    description: "",
    image:
      "https://img.freepik.com/premium-vector/abstract-gear-wheel-mechanism-background_41981-299.jpg",
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return () => {};
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return () => {};
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

  return () => ref;
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
        const timer = setTimeout(async () => {
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
            return () => clearTimeout(timer) && setIsLoading(false);
          }
        }, 5000);
        break;
      case "Sorting Algorithm":
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
                  <CircularStatic isLoading={isLoading} />
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
