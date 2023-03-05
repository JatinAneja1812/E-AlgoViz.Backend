import React from "react";
import HomepageWrapper from "./HomePage.styles";
// import InstructionModalPopup1 from "../Components/Popups/InstructionModalPopup1";
// // import moment from "moment";
// import PathVisualizer from "../PVisualizer/PathVisualizer";

const Homepage = () => {

//   const [isInstructionModalDisabled, setInstructionModalDisable] = useState(false); 

//   useEffect(() => {
//     let val = sessionStorage.getItem("InstructionDisabled");
//     setInstructionModalDisable(val === null ? false : val)
//   },[])

  return (
    <HomepageWrapper className=".Home">
      {/* { isInstructionModalDisabled === false &&
        <InstructionModalPopup1 setInstructionModalDisable={setInstructionModalDisable} isInstructionModalDisabled={isInstructionModalDisabled}/>
      }
      <PathVisualizer/> */}
    </HomepageWrapper>
  );
};

export default Homepage;
