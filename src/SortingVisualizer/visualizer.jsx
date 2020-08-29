import React, { useState, useEffect } from "react";
import "./visualizer.css";
import { getBubbleBars }  from '../SortingAlgorithms/sortingAlgos'

// Change this value for the speed of the animations.
const ITTERATION_SPEED = 2;
const COUNT_OF_BARS = 50;
const PRIMARY_COLOR = 'mediumspringgreen';
const SECONDARY_COLOR = 'purple';

const Visualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const mergeSort = () => {

  }

  const quickSort = () => {

  };

  // Need to fix trailing unsorted bar

  const bubbleSort = () => {
    const bars = getBubbleBars(array);
    for (let i = 0; i < bars.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = bars[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ITTERATION_SPEED);
      } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = bars[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ITTERATION_SPEED);
      }
    }
  };

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < COUNT_OF_BARS; i++) {
      array.push(randomIntFromInterval(5, 700));
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
