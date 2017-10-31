'use strict'

const countdown = (i) => {
    console.log(i);
    if (i <= 0) {
    	return;
    } else {
    	countdown(i - 1);
    }

    return;
};

countdown(5);