"use client";

import React, { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState<string>("Press Enter");
  const [inputValue, setInputValue] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const keyPress = (event: any) => {
    if (event.key === "Enter") {
      if (inputValue === answer) {
        let num1: number, num2: number;
        let newQuestion: string;
        let newAnswer: string;

        if (count % 3 === 0) {
          [num1, num2] = sum();
          newAnswer = (num1 + num2).toString();
          newQuestion = `${num1} + ${num2}`;
        } else if (count % 3 === 1) {
          [num1, num2] = diff();
          newAnswer = (num1 - num2).toString();
          newQuestion = `${num1} - ${num2}`;
        } else {
          [num1, num2] = prod();
          newAnswer = (num1 * num2).toString();
          newQuestion = `${num1} x ${num2}`;
        }

        setAnswer(newAnswer);
        setQuestion(newQuestion);
        setCount(count + 1);
        setInputValue("");
      }
    } else if (event.key === "Backspace") {
      setInputValue(inputValue.substring(0, inputValue.length - 1));
    } else {
      setInputValue(inputValue + event.key);
    }
  };
  const sum = (): [number, number] => {
    let num_a = Math.floor(Math.random() * 900) + 100;
    let num_b = Math.floor(Math.random() * 900) + 100;
    return [num_a, num_b];
  };
  const diff = (): [number, number] => {
    let num_a = Math.floor(Math.random() * 900) + 100;
    let num_b = Math.floor(Math.random() * 900) + 100;
    return [Math.max(num_a, num_b), Math.min(num_a, num_b)];
  };
  const prod = (): [number, number] => {
    let num_a = Math.floor(Math.random() * 90) + 10;
    let num_b = Math.floor(Math.random() * 90) + 10;
    return [num_a, num_b];
  };

  return (
    <section className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-64 h-48 border flex justify-center items-center gap-8 flex-col shadow-2xl rounded-2xl">
        <p className="text-4xl text-white" id="question">
          {question}
        </p>
        <input
          value={inputValue}
          className="h-12 w-48 text-blue-800 px-3 rounded-lg text-2xl"
          id="inputBox"
          onKeyDown={keyPress}
        />
      </div>
    </section>
  );
}
