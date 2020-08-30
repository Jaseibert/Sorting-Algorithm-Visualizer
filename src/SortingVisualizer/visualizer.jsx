import React, { useState, useEffect } from "react";
import "./visualizer.css";
import { applySort }  from '../SortingAlgorithms/sortingAlgos'

// Change this value for the speed of the animations.
const ITTERATION_SPEED = 500;
const COUNT_OF_BARS = 5;
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
    console.log(array);
    const bars = applySort(array, "quick");
    console.log(bars);
    for (let i = 0; i < bars.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const changeColor = bars[i].length === 2;
      if (changeColor) {
        const [barOneIdx, barTwoIdx] = bars[i];
        setTimeout(() => {
          const barOne = arrayBars[barOneIdx];
          if (barOne) {
            barOne.style.backgroundColor =
              barOne.style.backgroundColor === PRIMARY_COLOR
                ? SECONDARY_COLOR
                : PRIMARY_COLOR;
          }
          const barTwo = arrayBars[barTwoIdx];
          if (barTwo) {
            barTwo.style.backgroundColor =
              barTwo.style.backgroundColor === PRIMARY_COLOR
                ? SECONDARY_COLOR
                : PRIMARY_COLOR;
          }
        }, i * ITTERATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = bars[
            i
          ];
          const barOne = arrayBars[barOneIdx];
          const barTwo = arrayBars[barTwoIdx];
          if (barOne) {barOne.style.height = `${barOneNewHeight}px`;}
          if (barTwo) {barTwo.style.height = `${barTwoNewHeight}px`;}
        }, i * ITTERATION_SPEED);
      }
    }
  };

  const bubbleSort = () => { 
    console.log(array);
    const bars = applySort(array, 'bubble');
    console.log(bars)
    for (let i = 0; i < bars.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const changeColor = i % 3 !== 1;
      if (changeColor) {
        const [barOneIdx, barTwoIdx] = bars[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.backgroundColor = color;
          const barTwo = arrayBars[barTwoIdx]
          if (barTwo) {
            barTwo.style.backgroundColor = color;
          }
        }, i * ITTERATION_SPEED);
      } else {
          setTimeout(() => {
            const [
              barOneIdx,
              barOneNewHeight,
              barTwoIdx,
              barTwoNewHeight,
            ] = bars[i];
            const barOne = arrayBars[barOneIdx]
            const barTwo = arrayBars[barTwoIdx];
            barOne.style.height = `${barOneNewHeight}px`;
            if (barTwo) {
              barTwo.style.height = `${barTwoNewHeight}px`;
            }
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
