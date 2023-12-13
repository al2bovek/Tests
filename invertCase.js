"use strict";
export default function invertCase(str) {
    let goal = str.split('');
    for (let i = 0; i < str.length; i++) {
        goal[i] === goal[i].toUpperCase() ? goal[i] = goal[i].toLowerCase() : goal[i] = goal[i].toUpperCase();
    }
    return goal.join('');
}
