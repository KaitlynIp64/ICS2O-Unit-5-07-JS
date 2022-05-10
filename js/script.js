// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-07-JS/sw.js", {
    scope: "/ICS20-Unit-5-07-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  const number = parseInt(document.getElementById("number").value);
  let sum = 0;
  
  for (let counter = 1; counter <= number; counter++) {
    sum += counter;
  }
  document.getElementById("answer").innerHTML = "The answer is: " + sum;
}