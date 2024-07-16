#dependencies
1.npm init -y ==>index.js change to app.js
2.express,mongoose
3.jwt cookie-parser and bcrypt
4.multer to upload the files
5.debug
6.config
7.ejs
8.joy package for the use of missing fields to complete and take dont create teh accout

#folders to create
1.models ==>for databases
2.utils
3.routes
4.config
5.controllers
6.public
     1.images
     2.stylesheets
     3.javascripts
7.views
8.file ->env
9.file->.gitignore

#initialise using the git

#creating the models
1.creating the usermodel
fullname-string
email-string
password-string
cart-array
isAdmin-boolean
orders-array
contact-number
picture-db (will stored in db)

2.creating the product model
image
name
price
discount
bgcolor
panelcolor
textcolor


3.mongodb connection
4.creating routes
owners,users,products router

5.while congif setup give the  name as default.json 
for setting the env to developement use of dot env package is done here chatgpt

6.setting up the ejs and routes
index.ejs setup andd app.js mein jake app.use add the lines related to the ejs 
1./-> signup or login
2./shop ->shop
3./user/cart->cart
4.owner/products->show all produncts
5./owner/admin->show admin panel to creatae products

7.joy based handling that username password and any field missng
then schema will handle it but we dont want that happen so we use that joy based approach

8.jsonwebtoken and bcrypt for password setting and all part 5

9.how to use the .env files using the require("dotenv")config() this method is used for doing this