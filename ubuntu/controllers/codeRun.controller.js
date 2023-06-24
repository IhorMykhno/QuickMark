const { spawn } = require("child_process");

function executeCommand(command, args) {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(command, args);
        let result = "";

        childProcess.stdout.on("data", (data) => {
            result += data.toString();
        });

        childProcess.stderr.on("data", (data) => {
            reject(data.toString());
        });

        childProcess.on("close", (code) => {
            if (code === 0) {
                resolve(result);
            } else {
                reject(`Child process exited with code ${code}`);
            }
        });
    });
}

const runPythonCode = (fileType, fileName) =>
    executeCommand("python3", [`sharedFiles/${fileName}${fileType}`]);

const runJavaScriptCode = (fileType, fileName) =>
    executeCommand("node", [`sharedFiles/${fileName}${fileType}`]);

module.exports = {
    runPythonCode,
    runJavaScriptCode,
};
