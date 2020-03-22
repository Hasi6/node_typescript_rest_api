# To Start

npm i --save <br />
npm start <br />

# End Points

http://localhost:5000
<br />

# Add User

POST <br/>
/api/users/ <br/>
body = { <br />
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
/api/users/perPage=1&page=2

# Find One User

Get <br />
/api/users/5e76ff23172f105af433b6a6 <br />

# Delete User

Delete <br />
/api/users/5e76ff23172f105af433b6a6 <br />

# Edit User

Edit <br />
/api/users/5e76ff23172f105af433b6a6 <br />
{
"firstName": "Chandula123",
"age":24,
"height": 1.7
}
