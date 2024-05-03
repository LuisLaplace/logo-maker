const { createLogo } = require('./lib/svg');

function main() {
    createLogo()
        .then(() => console.log("Generated logo.svg"))
        .catch(err => console.error("Error:", err.message));
}

main();
