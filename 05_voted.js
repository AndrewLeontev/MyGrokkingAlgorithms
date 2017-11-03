let voted = {};  // init hash
const check_voter = name => {
	if (voted[name]) {
		console.log("kick them out!");
	} else {
		voted[name] = true;
		console.log("let them vote!");
	}
};

check_voter("tom");
check_voter("mike");
check_voter("mike");