import styled from "styled-components";

const VisualizerCardWrapper = styled.div` 

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap");

.textContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}

@keyframes textFadeAnimation {
  0% {
    opacity: 0;
    transform: translate3d(
      calc(100vw * (Math.random() - 0.5)),
      calc(100vh * (Math.random() - 0.5)),
      0
    );
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}


.textContainer p {
  margin: 0 18vh;
  display: flex;
  justify-content: center;
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to right, #000, #000);
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textFadeAnimation 2s ease-in-out forwards;
}


.slides {
  display: grid;
  top: 30px;
  position: relative;
  overflow: hidden;
  > .slide {
    grid-area: 1 / 2;
    border-radius: 10px; /* Adjust the value as per your preference */
  }

  > button {
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    top: 30%;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: 0%;
    }
    &:last-child {
      right: 0%;
    }
  }
}

.slideContent {
  width: 40vw;
  height: 40vw;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.4;
  background: rgb(0,0,0,0.5);
  color: #000;
  display: grid;
  align-content: center;
  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(100% * var(--offset)))
    rotateY(calc(-45deg * var(--dir)));
}

.slideContentInner {
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;

  .slideSubtitle,
  .slideTitle {
    font-size: 2.5rem;
    font-weight: normal;
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    margin: 0;
  }

  .slideSubtitle::before {
    content: "— ";
  }

  .slideDescription {
    margin: 50px;
    font-size: 0.90rem;
    display: flex;
    background-color: rgba(7, 101, 133, 0.8); /* Set the background color with transparency */
    padding: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    border: 1px solid #000;
  }

  .slideDescription p{
    color: #fff;
  }

  .center {
    margin-left: 28vh;
    margin-right: 28vh;
    width: 180px;
    height: 60px;
    position: absolute;
  }
  
  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 2px solid #000;
    outline: none;
    transition: 1s ease-in-out;
  }
  .btnDisabled {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: rgba(0,0,0,0.2);
    border: 2px solid #000;
    outline: none;
    transition: 1s ease-in-out;
  }
  
  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }
  
  .btn:hover {
    transition: 1s ease-in-out;
    background-color: rgba(7, 101, 133, 1); /* Set the background color with transparency */
    span {
      transition: 1s ease-in-out;
      color: #fff;
    }
  }
  
  .btn:hover svg {
    stroke-dashoffset: -480;
  }
  
  .btn span {
    color: #000;
    font-size: 18px;
    font-weight: 100;
  }
}

.slide[data-active] {
  z-index: 2;
  pointer-events: auto;

  .slideBackground {
    opacity: 0.2;
    transform: none;
  }

  .slideContentInner {
    opacity: 1;
  }

  .slideContent {
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
    opacity: 1;

    transform: perspective(1000px);

    &:hover {
      transition: none;
      transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
        rotateX(calc(var(--y) * -45deg));
    }
  }
}
`;

export { VisualizerCardWrapper };