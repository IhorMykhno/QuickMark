var express = require("express");
var router = express.Router();
var codeRunControllers = require("../controllers/codeRun.controller");

router.post("/", async (req, res) => {
    const { fileType, fileName } = req.body;

    console.log(fileType, fileName);
    try {
        let result = "";

        if (fileType == ".py") {
            result = await codeRunControllers.runPythonCode(fileType, fileName);
        }

        if (fileType == ".js") {
            result = await codeRunControllers.runJavaScriptCode(
                fileType,
                fileName
            );
        }

        res.send({ message: result });
    } catch (error) {
        res.send({ error });
    }
});

module.exports = router;
