const { exec } = require('child_process');

// Helper to execute shell commands asynchronously
async function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return reject(error);
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return reject(new Error(stderr));
            }
            resolve(stdout);
        });
    });
}

// Function to bump version based on the argument
async function bumpVersion(versionType) {
    try {
        const stdout = await runCommand(`npm version ${versionType}`);
        console.log(`Version bumped to: ${stdout.trim()}`);
    } catch (error) {
        console.error('Failed to bump the version:', error);
    }
}

// Main function to determine which version bump to execute
async function release() {
    const args = process.argv.slice(2); // Extract command-line arguments
    const validArgs = ['--patch', '--minor', '--major', '--premajor', '--prerelease'];

    // Find the version type from arguments
    const versionArg = args.find(arg => validArgs.includes(arg));

    if (!versionArg) {
        console.log('No valid version bump flag provided. Use one of: --patch, --minor, --major, --premajor, --prerelease');
        return;
    }

    // Remove the leading "--" from the argument
    const versionType = versionArg.replace('--', '');

    console.log(`Releasing version: ${versionType}...`);

    // Bump the version
    await bumpVersion(versionType);

    // Optionally, perform git and npm publish operations
    try {
        console.log('Committing changes...');
        await runCommand('git add .');
        await runCommand(`git commit -m "chore(release): bump ${versionType}"`);

        console.log('Pushing changes to the repository...');
        await runCommand('git push');

        console.log('Publishing package to npm...');
        await runCommand('npm publish');

        console.log('Release completed successfully.');
    } catch (error) {
        console.error('Error during release process:', error);
    }
}

// Start the release process
release();
