$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: "http://jsonplaceholder.typicode.com/users",
        success: function(data){
            var usersList = "";
            data.forEach(el => {
                const {name, email, phone, website} = el;
                usersList +=`
                <tr>
                    <th>${name}</th>
                    <th>${email}</th>
                    <th>${phone}</th>
                    <th>${website}</th>
                </tr>
                `
            });
            $('table').append(usersList);
        }
    });
});