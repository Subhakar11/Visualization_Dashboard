# Data Dashboard Project

This project is a data dashboard application built with Node.js, Express, and MongoDB. 

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation
1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd datadashboard

### Install dependencies


npm install
Start MongoDB

### Ensure that MongoDB is running. You can start MongoDB with the following command:

mongod

### Populate the database

Use the provided script to populate the MongoDB database with initial data. This script requires a jsondata.json file in the data folder.

node populate.js
Run the application

### Start the server with:

node server.js
The server should now be running at http://localhost:5000.

### File Structure
server.js: The main entry point of the application.
populate.js: A script to populate the MongoDB database with initial data.
models/: This folder contains the Mongoose schemas and models.
routes/: This folder contains the Express routes.
data/: This folder contains the jsondata.json file used by the populate.js script.
Troubleshooting
### If you encounter the following error:


MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
Make sure that MongoDB is running and accessible at localhost:27017. You can also try connecting using the IPv4 address:

mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
Additional Notes
You can ignore the MONGOOSE deprecation warning by adding the following line to server.js:


mongoose.set('strictQuery', false);
