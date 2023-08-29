import React, { useEffect, useState } from "react";
import { AlgorithmTabWrapper } from "../AlgorithmsTabs.styles";
import { GetAllAlgorithmsData } from "../../../../Utility/LibraryFunctions/GetAllAlgorithmsData";
import Nodata from "../../../../imgs/NoData.svg";

export default function SortingAlgorithmsTab(props) {

  const [data, setData] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const result = await GetAllAlgorithmsData(props.SortingAlgorithms);
        setData(result);
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error(error);
      }
    }
    // Call the async function to fetch data
    fetchData();
  }, [props.SortingAlgorithms]);

  const handleAlgorithmClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <AlgorithmTabWrapper>
      <div className="button-container">
        <ul className="bubble">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {data.map((algorithm) => (
          <button
            className="Tab_button"
            key={algorithm.key}
            onClick={() => handleAlgorithmClick(algorithm)}
          >
            {algorithm.title}
          </button>
        ))}
      </div>

      <div className="info-container">
        {selectedAlgorithm ? (
          <>
            <h2>{selectedAlgorithm.title}</h2>
            <h4>{selectedAlgorithm.description}</h4>
          </>
        ) : (
          <div className="no-data">
            <img src={Nodata} alt="No Data" />
            <p>No data available</p>
            <p
              style={{
                top: "-24px",
                left: "14px",
              }}
            >
              Select an Algorithm to View{" "}
            </p>
          </div>
        )}
      </div>
    </AlgorithmTabWrapper>
  );
}
