"use strict";
import invertCase from "./invertCase.js";
let firstInp = document.querySelector('#i_1');
let secondInp = document.querySelector('#i_2');
firstInp.size = secondInp.size = secondInp.placeholder.length;
firstInp.addEventListener('input', () => secondInp.value = invertCase(firstInp.value));
firstInp.addEventListener('input', () => firstInp.value.length > firstInp.size ? firstInp.size = secondInp.size = firstInp.value.length : '');
firstInp.addEventListener('blur', () => firstInp.value = secondInp.value = '');
firstInp.addEventListener('blur', () => firstInp.size = secondInp.size = secondInp.placeholder.length);
