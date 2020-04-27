import * as firebase from 'firebase';

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };

  firebase.initializeApp(config);
 const database = firebase.database();
 export {firebase, database as default }; 
  //reference to root of our database
//   firebase.database().ref().set({
//       name:"Asim",
//       age:23,
//       location:{
//           city:"Noida",
//           country:"India"
//       }
//   }).then(()=>{
//     console.log("Data is saved")
//   }).catch((error)=>{
//     console.log("This failed", error)
//   })


//   firebase.database().ref('age').set(27);
// firebase.database().ref('location/city').set("Gurgaon");
// firebase.database().ref('age').remove().then(()=>{
//     console.log("Data is removed")
// }).catch((error)=>{
//     console.log("error",error)
// })
 
// firebase.database().ref().update({
//     age:25,
//     job:"SDE-1"
// })

// firebase.database().ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
// console.log(expenses);
// })

// firebase.database().ref('expenses').push({
//     "description":"Rent",
//     "Amount":"1000",
//     "note":"april month",
//     "created":"1/04/2020"
// })

// firebase.database().ref('expenses').push({
//     "description":"Food",
//         "Amount":"1200",
//         "note":"march month",
//         "created":"1/03/2020"
// })

// firebase.database().ref('expenses').push({
//     "description":"Gas",
//     "Amount":"1500",
//     "note":"Jan month",
//     "created":"1/01/2020"
// })