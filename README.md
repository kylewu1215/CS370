# Dooley Eats by Team 0100.0

Hi, we are the members of Team 0100.0. This is our Dooley Eats web application implemented using Node.js, Express, Passport, Mongoose, Cloudinary, NodeMailer, EJS and other packages. Our final software artifact allows members of the Emory community to post blogs about restaurant reviews, food recipes as well as upcoming events and/or hangouts. Users can also interact with one another through our like, comment, social connection and other core features. In every way possible, we deliver each of our software components with an intent to maximize and streamline the user experience. 

### How to compile and use our application: 

# 1. Download the Visual Studio XCode Editor, and in a new terminal type the following:
$ npm start
# You can also install the Nodemon package with the following command:
$ npm install -g nodemon
# Then type this command in a new terminal:
$ nodemon

# After the connection to the server is established (signaled by a message in the terminal),
# open a web browser and visit the following localhost url: http://localhost:5000 


```

### 1. Information about our MongoDB database 

-Our web application is already linked to a functioning MongoDB cluster
-The dbPassword and MongoURI for our cluster is located in the config/keys.js file
-If you decide to use a different MongoDB cluster, please open "config/keys.js" and add a differnet dbPassword and MongoDB URI

### 2. Information about our email server using Mailgun

-Our web application is already linked to a functioning Mailgun email server api account used for user registration and password reset
-The mailgun username (MAILGUN_USER) and password (MAILGUN_PASS) for our account is located in the config/mailer.js file
-(**Important**) In order to allow Dr. Arnold, Alex and Cindy to use our Mailgun account to register and/or reset passwords on Dooley Eats, we have added their Emory email addresses to the list of authorized email recipients for the account. Dr. Arnold, Alex and Cindy should check their Emory email addresses (including the junk mail folder) to retrieve an invitation email from Mailgun and accept the invitation. After this step is completed, Dr. Arnold, Alex and Cindy will be able to register and reset their passwords on Dooley Eats.

### 3. Information about our cloudinary image upload API  

-Our web application is already linked to a functioning cloudinary account
-The configuration for cloud_name, api_key and api_secret for our account is located in line 66 to 71 of our routes/posts.js file
-If you decide to use a different cloudinary account, please change the cloud_name, api_key and api_secret configuration in the specified location of the file mentioned above



