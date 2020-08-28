import React, { useState, useEffect } from "react";
import "./visualizer.css";

const Visualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const mergeSort = () => {

  }

  const quickSort = () => {};
  const bubbleSort = () => {};


  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 200; i++) {
      array.push(randomIntFromInterval(5, 800));
    }
    setArray(array);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <div className="container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button className="btn" onClick={() => resetArray()}>
          Generate New Array
        </button>
        <button className="btn" onClick={() => mergeSort()}>
          Merge Sort
        </button>
        <button className="btn" onClick={() => bubbleSort()}>
          Bubble Sort
        </button>
        <button className="btn" onClick={() => quickSort()}>
          Quick Sort
        </button>
      </div>
    </>
  );
};

export default Visualizer;
