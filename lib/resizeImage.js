var sharp = require("sharp")

var resizeImage = (buffer, filename, resizeWidth, resizeHeight) => {
    return new Promise((resolve, reject) => {
        if (!buffer) {
            reject({ msg: "Please provide buffer" })
        } else {
            if (resizeWidth) {
            	console.log("resizeWidth",resizeWidth)
                sharp(buffer)
                .resize(resizeWidth, resizeHeight)
                .toBuffer()
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
            }
            else{
            	resolve(buffer)
            }
        }
    })
}
module.exports = resizeImage