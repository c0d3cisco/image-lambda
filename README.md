# image-lambda

## How to use this lambda

To install this lambda, you need to have an AWS account and the AWS CLI installed. You will also need to have an S3 bucket set up to store your images. This lambda is configured so that every time an image gets loaded to the S3 bucket called "ciscocodefellows", the lambda will log the new image in a image.json file in the same bucket, or if the .json file does not exist, it will create one before logging the image.

## Issues encountered

The main source of issues has been working with an entirely new system, the AWS. This function for example require special modules in order to interact with the internal S3 bucket. In addition, debugging has made the experience much slower. Learning points for next time:

- Make sure to have a clear idea of what the function is supposed to do before starting to code.
- Find documentation early! [@aws-sdk/client-s3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html)
- Remember to check CloudWatch and test the function for early proof of life.

## [Link to images.json](https://ciscocodefellows.s3.us-east-2.amazonaws.com/images.json)
