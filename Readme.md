# Nodejs mongodb Crud

## Create docker container mongodb 

```bash 
sudo docker run --name mongodb  -e MONGO_USER=kartien -e MONGO_PASSWORD=mypassword -p 27017:27017 -d mongo
```

### Eviroment variables

```bash
# create .env file 
MONGODB_URI=mongodb://localhost:27017/crud 
PORT=5000
```
