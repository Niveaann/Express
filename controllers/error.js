const path = require("path");
const rootDir = require("../util/path");
exports.getErrorPage = (req,res) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
}