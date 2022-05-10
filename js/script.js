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
  navigator.serviceWorker.register("/ICS2O-Unit-5-06-JS/sw.js", {
    scope: "/ICS2O-Unit-5-06-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked () {
  // This code will multiply your two numbers with while loops (repeated addition)

  const counter1 = parseInt(document.getElementById('counter1').value)
	const counter2 = parseInt(document.getElementById('counter2').value)
  var addedNumber = 0
  var answer = 0

  if (counter1 > 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      answer = answer + counter1;
    }
  } else if (counter1 < 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      answer = answer - counter1;
    }
  } else if (counter1 > 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      answer = answer - counter1;
    }
  } else if (counter1 < 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      answer = answer + counter1;
    }
  }
  
  document.getElementById('answer').innerHTML = counter1 + " x " + addedNumber + " = " + answer;
}
