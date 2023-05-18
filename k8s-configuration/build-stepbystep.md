#### 1. Create a Deployment file 
``kubectl create -f nodejs-example.yaml``
#### 2. Make sure it is created
``kubectl get all``
#### 3. Create a Service file to have a seperate frontend for our multiple pods/backends
``kubectl create -f nodejs-service.yaml``
#### 4. So now all should be well right ? Well .. not really 
### The image we tried to get is local on our machine but minikube currently has its own registry. We had set the ImagePullPolicy to never in order to avoid pulling from a cloud registry but how do we pull from docker daemon's registry on our machine ?
#### 5. Type the following command which basically evaluates docker's enviroment to minikube in order to get the local image we want from there (THIS WILL BE USED IN VERY TERMINAL SESSION)
``eval $(minikube docker-env -u) ``
#### 6. Now we build the image inside minikube
``minikube build -t nodejs-alpine .``
#### 7. All good now .. we can restart both the Deployment and Service files (Or we can just delete and create from the beginning again)
``kubectl rollout restart nodejs-example.yaml``
``kubectl rollout restart nodejs-service.yaml``
#### 8. Check for the Service 
```kubectl get service```
#### 9. Now we can go to our deployed locally app
``minikube service nodejs-service``
### This will take you immediately to the browser with the localhost URL and since we havent included a NodePort it will be 31794 by default
