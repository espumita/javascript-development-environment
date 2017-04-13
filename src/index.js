import './index.css'
import numeral from 'numeral';
import {getUsers} from './api/userApi';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Value is ${courseValue} `);

getUsers().then(result => {
   let usersBody = "";

   result.forEach(user =>{
       usersBody+= `<tr>
           <td>${user.id}</td>
           <td>${user.firstName}</td>
           <td>${user.email}</td>
           </tr>`
   });

   global.document.getElementById('users').innerHTML = usersBody;
});