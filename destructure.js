const person = {name:'Istiak Ahamed',age:22,gfName:'Ema Watson',location:'khilkhet',phoneNumber:'01736363636',friends:['Rana','Rony','Joy']};
const {phoneNumber,gfName,location,salary} = person;
const complexObject = {
    name: 'abc',
    info:{
        address : Dhaka,
        leader : 'Tiger Leader',
    }
}
const {leader} = complexObject.info;
// const gfName = person.gfName;
// const phone = person.phoneNumber;
// console.log(gfName,phoneNumber,salary,location);
// console.log(gfName,phoneNumber,salary,location);
const friends = ['Shakib khan','Salamn Khan','Allu Arjun','Amir Khan'];
const [chotoFriend,nextFriend,...restFriend] = friends;//... means 1st 2 ta bade baki sob
console.log(restFriend);

