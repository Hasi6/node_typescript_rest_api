# To Start

npm i --save <br />
npm start <br />

# End Points

http://localhost:5000
<br />

# Add User

POST <br/>
/api/users/ <br/>
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
/api/users/perPage=1&page=2
