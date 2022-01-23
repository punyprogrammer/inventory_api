# inventory_api
## This is a CRUD REST API  built with Node.js,Express and MongoDB,below I have explained the routes for the following
### If you  are running this application on your local machine replace https://guitarinventoryapi.herokuapp.com with http://localhost:5000
## GET ROUTES
### 1) Get All Products in the Inventory:  `GET :{baseUrl}/api/v1/products`
####   a) Response -200 OK
#####  Response format: ` {  success:true,nbHits:{no of data points fetched},data:array_of_data_points} `
#####  Additional_params: 
##### *sortedBy={fieldName} :Get the products in ascending order  of the given field
##### *sortedBy=-{fieldName}:Get the products in descending order of the given field
##### *category={fieldValue}:Filter the products with category=={fieldValue}
#####                       Allowed categories:1)Acoustic 2)Electric 3)Classical
##### *brand={fieldValue} :Filter the products with the given brands
#####                    :To get the list of all brands hit:`GET: {baseUrl}/api/v1/brands`
