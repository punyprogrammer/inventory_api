# inventory_api
## This is a CRUD REST API  built with Node.js,Express and MongoDB,below I have explained the routes for the following
### If you  are running this application on your local machine replace https://guitarinventoryapi.herokuapp.com with http://localhost:5000
## GET ROUTES
### 1) Get All Products in the Inventory:  `GET :{baseUrl}/api/v1/products`
####   a) Response -200 OK
#####  Response format: ` {  success:true,nbHits:{no of data points fetched},data:array_of_data_points`
