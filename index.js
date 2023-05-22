
// async function submit(event) {
//   event.preventDefault(); // Prevent the form from submitting and refreshing the page

//   const name = document.getElementById("myname").value;
//   const email = document.getElementById("myemail").value;
//    const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;
 
//     console.log("Document written successfully");
//     alert("Data added successfully!");
 
//           console.log(name);
//           console.log(email)
//           console.log(subject)

//           console.log(message)

//           alert("added")

//   // Clear the form inputs after submitting
//   // document.getElementById("myname").value = "";
//   // document.getElementById("myemail").value = "";
// }

var firebaseConfig = {
  apiKey: "AIzaSyByuYb-Jp_2CdH7xW5DVECNSwvC5Mna20w",
  authDomain: "testing-9394b.firebaseapp.com",
  projectId: "testing-9394b",
  storageBucket: "testing-9394b.appspot.com",
  messagingSenderId: "258087417193",
  appId: "1:258087417193:web:0221311fd181d4279a39f8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();


async function submit() {
  console.log("im adding successfully");
const name = document.getElementById("myname").value;
  const email = document.getElementById("myemail").value;
   const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  try {
    await db.collection("demoDB").add({
      name: name,
      email: email,
      subject:subject,
      message:message,

    });
    console.log("Document written successfully");
    alert("Data added successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
}
