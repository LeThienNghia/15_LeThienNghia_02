// Update a user

// var url = "http://localhost:8080/api/v1/users";

var url = 'https://jsonplaceholder.typicode.com/todos';

var data = {};
data.userId = 1;
data.id = 1;
data.title = "John2";
data.completed = false;

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();

xhr.open("PUT", url + '/1', true);

xhr.setRequestHeader('Content-type', 'application/json;charset = utf - 8 ');

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (xhr.readyState == 4 && xhr.status == "200") {

        console.table(users);

    } else {

        console.error(users);

    }

}
xhr.send();