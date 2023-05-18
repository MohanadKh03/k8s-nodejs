##  ASSUMING ALL NODEJS DEPENDANCIES ARE INSTALLED AND THE index.js FILE IS WORKING
#### 1. Go to the path of the nodejs-image folder
#### 2. Type the following commands AFTER being in the folder's path
``
docker build -t nodejs-alpine .
``
#### 3. After it is over type the following command to make sure the image is ready
``
docker images
``
#### 4. Run using the following command
``
docker run nodejs-alpine
``
### 5. In the terminal the console.log we wrote earlier should be printed . This way we have built and run our image locally.
```js 
Listening on 8080
```

#### One instance per run though If you want to have multiple replicas of the index.js file you will need to run different docker images every time and when updating anything you will need to build and stop all the images at once and then restart them
