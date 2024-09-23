const { exec } = require("node:child_process");

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error executing command: ${command}\n${error.message}`);
            } else if (stderr) {
                console.warn(`Command completed with warnings: ${command}\n${stderr}`);
                resolve(stdout);
            } else {
                resolve(stdout);
            }
        });
    });
}

async function executeCommands() {
    try {
        // Compile and concatenate CSS, then process with prejss
        await runCommand(`
            node_modules/.bin/postcss --config src/components src/components/plain/*.css --base src --dir dist && 
            cat dist/components/plain/*.css > dist/plain.css && 
            node_modules/.bin/prejss-cli dist/plain.css --format commonjs 
        `);

        await runCommand(`
            node_modules/.bin/postcss --config src/components src/components/styled/*.css --base src --dir dist && 
            cat dist/components/styled/*.css > dist/styled.css && 
            node_modules/.bin/prejss-cli dist/styled.css --format commonjs 
        `);

        await runCommand(`
            node_modules/.bin/postcss --config src/components src/components/gradient/*.css --base src --dir dist && 
            cat dist/components/gradient/*.css > dist/gradient.css && 
            node_modules/.bin/prejss-cli dist/gradient.css --format commonjs 
        `);

        await runCommand(`
            node_modules/.bin/postcss --config src/components src/components/shadow/*.css --base src --dir dist && 
            cat dist/components/shadow/*.css > dist/shadow.css && 
            node_modules/.bin/prejss-cli dist/shadow.css --format commonjs 
        `);

        console.log("Build completed successfully!");
    } catch (error) {
        console.error(error);
    }
}

// Run the commands asynchronously
executeCommands();
