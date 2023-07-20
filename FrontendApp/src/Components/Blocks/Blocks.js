import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import "./Blocks.css";

const Blocks = (props) => {
  // Variables
  let marginSubtract = 8; // value that is subtracted from the width equation in order to obtain the desired margin
  const [width, setWidth] = useState(() => {
    // state to store what the width of each block is
    Math.min(22, Math.ceil(window.innerWidth / props.blocks.length) - 5);
  });

  useEffect(() => {
    // changing the size of the margin to mantain a visually appealing ratio
    if (window.innerWidth <= 800) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      marginSubtract = 5;
    } else if (window.innerWidth < 1000) {
      marginSubtract = 7;
    } else {
      marginSubtract = 8;
    }

    // changing the width when screen change is detected
    if (window.innerWidth >= 500) {
      const handleResize = () => {
        setWidth(
          Math.min(
            22,
            Math.ceil(window.innerWidth / props.blocks.length) - marginSubtract
          )
        );
      };

      window.addEventListener("resize", handleResize);

      if (window.innerWidth <= 800) {
        marginSubtract = 5;
      } else if (window.innerWidth < 1000) {
        marginSubtract = 7;
      } else {
        marginSubtract = 8;
      }

      setWidth(
        Math.min(
          22,
          Math.ceil(window.innerWidth / props.blocks.length) - marginSubtract
        )
      );
    } else {
      // 4 and 2 allow for bigger blocks without any overflow
      if (props.blocks.length > 60) {
        setWidth(
          Math.min(2, Math.floor(window.innerWidth / props.blocks.length) - 1)
        );
      } else {
        setWidth(
          Math.min(4, Math.floor(window.innerWidth / props.blocks.length) - 1)
        );
      }
    }
  }, [props.blocks.length]);

  // JSX for creating the blocks and any required containers for positioning
  return (
    <div className="back">
      <Typography
        style={{
          marginTop: "12vh",
          fontSize: "30px",
          marginLeft: "75vw",
          fontFamily: "freight-big-pro",
          fontWeight: "600",
          letterSpacing: "1.5px",
        }}
      >
        {props.statusMessage}
      </Typography>
      <div className="blocks">
        <div
          className="blockHeight"
          style={{ width: 1, height: 630, overflow: "hidden" }}
        />
        {props.blocks.map((block, i) => {
          // changing the color of the block if needed
          let backgroundColor;

          // color yellow for values beign compared and return color to default when finished
          if (props.sortedValue.includes(i) && props.sortedValue) {
            backgroundColor = "linear-gradient(lime, yellow)";
          } else if (
            props.compare &&
            (props.compare[0] === i || props.compare[1] === i)
          ) {
            backgroundColor = "linear-gradient(to top, orange, yellow)";
          } else {
            backgroundColor = "linear-gradient(#fff,#00FFD1, #00A3FF, #076585)";
          }

          // special case for quick sorts index
          if (props.quickIndex && props.quickIndex === i) {
            backgroundColor = "linear-gradient(red,  #fe8c00)";
          }

          // overriding existing color in order to swap
          if (props.swap && (props.swap[0] === i || props.swap[1] === i)) {
            backgroundColor = "linear-gradient(magenta, #9921e8)";
          }

          // calculating the height of the current block based on the number of total blocks
          const height = (block * 630) / props.blocks.length;
          let margin = 4;

          if (window.innerWidth <= 500) {
            margin = 1;
          } else if (window.innerWidth <= 1000) {
            margin = 2;
          }

          // Inline styling for block, needed since width and height of blocks changes
          const styles = {
            width: width,
            height: height,
            marginRight: margin,
            backgroundImage: backgroundColor,
            overflow: "hidden",
          };

          // Each block element
          return (
            <div key={i} className="block" style={styles}>
              <div
                style={{
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {block} {/* Display the number on top of the block */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blocks;
