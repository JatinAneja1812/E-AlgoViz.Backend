import React, { useEffect, useReducer, useRef } from 'react';
import { DescriptionEnum } from "../../Enums/DescriptionEnum";
import { VisualizerCardWrapper } from "./VisualizerCard.styles";

const slides = [
 
  {
    title: "Sorting Algorithm",
    subtitle: "Visualizer",
    description: "",
    image:
      "https://media.istockphoto.com/id/901172818/vector/financial-data-graph-chart-vector-illustration-trend-lines-columns-market-economy-information.jpg?s=612x612&w=0&k=20&c=lHK7Vbt6ifSUTLWjxRHNM2tqI1YPntzhVjkpFVT22uA="
  },
  {
    title: "Pathfinding Algorithm",
    subtitle: "Visualizer",
    description: DescriptionEnum.PATHFINDING_ALGORITHM_TEXT.toString(),
    image:"https://www.wallpaperup.com/uploads/wallpapers/2013/03/11/50755/3d4dc9513f36aeb3763c4d9c6fbab491.jpg"
  },
  {
    title: "Machine Learning Algorithm",
    subtitle: "Visualizer",
    description: "",
    image:
      "https://img.freepik.com/premium-vector/abstract-gear-wheel-mechanism-background_41981-299.jpg"
  }
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
      mouseY: undefined
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
  slideIndex: Math.floor(slides.length / 2)
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex - 1 + slides.length) % slides.length
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
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
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the alpha value for darkness
            filter: "blur(3px)", // Adjust the blur value as desired
          }}
        ></div>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <div className="slideDescription">
            <p>{slide.description}</p>
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

  return(
    <>
      <VisualizerCardWrapper>
        <div className="textContainer">
          <p> {DescriptionEnum.ALGORITHM_TEXT.toString()} </p>
        </div>
        <div className="slides">
          {showPrevButton && (
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
          )}

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}

          {showNextButton && (
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
          )}
        </div>
      </VisualizerCardWrapper>
    </>
  )
}