const fs = require('fs');
const AWS = require('aws-sdk');

var s3Upload = (awsConfig,filename,file) => {
    return new Promise((resolve, reject) => {
        var accessKeyId = awsConfig.AWS_ACCESS_KEY || process.env.AWS_ACCESS_KEY
        var secretAccessKey = awsConfig.AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY
        var region = awsConfig.region || process.env.region
        var bucket = awsConfig.bucket
        if (!accessKeyId || !secretAccessKey || !region) {
        	reject({msg:"Please provide AWS_ACCESS_KEY"})
        }
        else if (!accessKeyId) {
        	reject({msg:"Please provide AWS_SECRET_ACCESS_KEY"})
        }
        else if (!secretAccessKey) {
        	reject({msg:"Please provide region"})
        }
        else if (!region) {
        	reject({msg:"Please provide region"})
        }
        else if (!bucket) {
        	reject({msg:"Please provide bucket"})
        }
        else if (!filename) {
        	reject({msg:"Please provide filename"})
        }
        else if (!file) {
        	reject({msg:"Please provide file"})
        }
        else{
	        const s3 = new AWS.S3({
	            accessKeyId: accessKeyId,
	            secretAccessKey: secretAccessKey,
	            region: region
	        })
     		
     		var params = {Bucket: bucket, Key: filename, Body: file};
     		if(awsConfig.ACL){
     			params.ACL = awsConfig.ACL
     		}

	        s3.putObject(params, function(err, data) {
	            if (err) {
	                reject(err)
	            } else {
	                resolve({
                        url: `https://s3-${awsConfig.region}.amazonaws.com/${bucket}/${filename}`,
                        ETAG : data.ETag
                    })
	            }
	        });
        	
        }


    })
}
module.exports = s3Upload