# Read Me!

# Install Dependencies
- **Backend**: npm i && npm start
- **Frontend**: npm i && npm run dev

# .env Vars
- Go through the code once and add a file **.env** with all the env vars info. 
- **process.env.ENV_VAR_NAME**  - This is how you know that env var is used there. 
- **some of the variables** :
--->MONGO_URI
--->PORT
--->NODE_ENV
--->FRONT_END_URL

# Technologies Used
-   **MongoDB**: NoSQL database for storing product, user, and order data.
-   **Express.js**: Web application framework for Node.js used for building the backend server and APIs.
-   **React.js**: JavaScript library for building user interfaces.
-   **Node.js**: JavaScript runtime environment for executing backend code.

# Features
-   **Set Log**:  set the logs
-   **Get Log**:  get the logs, implemented a input qwery filtering UI, can sort out the logs based on inputs.
-  **Sort**: based on level, source, pattern(regex used), timestamp(exact, start and end timestamp)

# Faults
- **Search**: it is not working properly in deployment, it works totally fine in local machine, might be the issue in fetching data and state management using rtk query.

- **Redux state management**: moving between **setlog** and **getlog** pages, after setting log, the getlog page needs to be refreshed in order to reflect the changes.(it can be managed by state management)

# Scaling and Future advancements
- **Segregation of DB**: new collections can be made in accordance to the source type (eg.. logs1.log, logs2.log)
- **Role based authorization**: admin and user based rights to modify and access the logs
- **Authentication**: can use firebase, jwt(cookies), clerk(3rd party authorization tool)
- **Websockets**: for real time data ingestion between backend and frontend 
- **Dynamic UI**: for better user engagement
- **APIs**: backend APIs can be implemented for more functionality and control on logs 





