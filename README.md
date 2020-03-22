# End Points

http://localhost:5000
<br />

# Add User

POST <br/>
/api/users/addUser <br/>
body = {
"email": "hasitha12.chandula@gmail.com", <br/>
"gender": "male", <br/>
"firstName":"Hasi",<br/>
"age": 20, <br/>
"height": 12.4 <br/>
}

# Search User

GET <br />
/api/users/firstName=Hasi&age=20

# Find All Users With Pagination

GET <br />
/api/users/allUsers/perPage=1&page=2
