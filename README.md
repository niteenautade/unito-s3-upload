# unito-s3-upload
s3 File uploader for unito with image compression feature

Usage:

```
var s3UnitoUpload = require("unito-s3-upload")
var awsConfig = { "AWS_ACCESS_KEY": "***",
		    "AWS_SECRET_ACCESS_KEY": "***",
		    "region": "***" ,
		    "bucket":"***",
		    "ACL":"public-read"
			}
s3UnitoUpload(awsConfig,bufferObject, filename,resizeWidth,resizeHeight)
.then(data=>{
	console.log("successfully uploaded",data)
})
.catch(err=>{
	console.log(error)
})
```
resizeWidth,resizeHeight are optional.