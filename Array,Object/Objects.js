//const tinderuser  = new Object()

const tinderuser = {}

tinderuser.id ="1234"
tinderuser.name="John"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('id'));  //return true or false basis of property present in object



const regularuser ={
    email:"someonegmail.com",
    Fullname:{
        username:{
            firstname:"Abhishek",
            lastname:"Choudhary"
        }
    }
}
// console.log(regularuser.Fullname
//     .username.firstname
// )

//concatination of Onjects
const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a" ,4:"b"}
const obj3 ={5:"a" ,6:"b"}

// const obj4= {...obj1,...obj2,...obj3}
// console.log(obj4);


//+++++++++++++++++++++destructure++++++++++++
const course={
    coursename:"jaavascript",
    price:"999",
    courseinstructor:"Hitesh"

}
// console.log(course.courseinstructor);// }

const {courseinstructor: instructor} = course
console.log(instructor);
