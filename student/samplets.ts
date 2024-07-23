import { clear } from "console";

type User={
    name:string;
    age:number;
};
function isAdult(user:User):boolean{
    return user.age>18
}
const keerthan: User ={
    name:'Keerthan',
    age:22
}
const isKeerthanAdult = isAdult(keerthan);
console.log('Is Keerthan adult--' + isKeerthanAdult);