

var Maths = +prompt('Enter maths marks')
var Eng = +prompt('Enter Eng marks')
var Banking = +prompt('Enter Banking marks')
var Cg = +prompt('Enter Cg marks')
var Isl = +prompt('Enter Isl marks')
var Urdu = +prompt('Enter Urdu marks')
var total = Maths + Eng + Banking + Cg + Isl + Urdu
var per = (total / 600)* 100
var grade;

if(per >=80 && per < 101) { 
    grade = 'A+'
}

else if(per>= 70) {
    grade = 'A'
}

else if(per>= 60) {
    grade = 'B'
}

else if(per>= 50) {
    grade = 'C'
}

else if(per>= 40) {
    grade = 'D'
}

else(
    grade = 'Nikal Karwey'
)


document.write(
   ` <center> <table border= '3px' color= 'red' >
   <tr>
   <th>Maths</th>
   <th>Eng</th>
   <th>Banking</th>
   <th>Cg</th>
   <th>Isl</th>
   <th>Urdu</th>
   <th>total</th>
   <th>per</th>
   <th>grade</th>
    
   </tr>

   <tr>
   <td><center> ${Maths} </center></td>
   <td><center>${Eng}</center></td>  
   <td><center>${Banking}</center></td>  
   <td><center>${Cg}</center></td>  
   <td><center>${Isl}</center></td>     
   <td><center>${Urdu}</center></td>  
   <td><center>${total}</center></td>  
   <td><center>${per}</center></td>  
   <td><center>${grade}</center></td> 
   
   </tr>
    </table> </center> `

)




























