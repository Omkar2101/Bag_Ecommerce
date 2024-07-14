#dependencies
1.npm init -y ==>index.js change to app.js
2.express,mongoose
3.jwt cookie-parser and bcrypt
4.multer to upload the files

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