var resizeImage = require("./lib/resizeImage")
var awsUpload = require("./lib/s3Upload")
var fs = require("fs")
var unitoS3Upload = (awsConfig,buffer, filename, resizeWidth, resizeHeight) => {
	return new Promise((resolve,reject)=>{
		resizeImage(buffer, filename,resizeWidth, resizeHeight)
		.then(compressedImage => {
            return awsUpload(awsConfig,filename,compressedImage)
        })
        .catch(err => {
            reject(err)
        });	
	})
}

module.exports = unitoS3Upload