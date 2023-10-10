// Rooms Available at our website
let Room = [
    {
        roomCode: "1",
        tCode: "t1",
        sCode: ["Soham", "Pawan"],
        rContent: []
    },
    {
        roomCode: "T002",
        tCode: "t2",
        sCode: ["Soham", "Susie", "Pawan"],
        rcontent: [{}]
    }
]

let codeStatus
let roomNo
let tverified = false
let sverified = false;

// Function that verifies users based on their codes.
function askCode() {
    let userRoom


    userRoom = String(prompt("What is Your Student/Teacher Code"))

    if (Room[roomNo].sCode.includes(userRoom)) {
        alert('Welcome Student')
        sverified = true;
        tverified = false;
    } else if (userRoom == Room[roomNo].tCode) {
        alert('Welcome Teacher')
        sverified = false;
        tverified = true;

    } else {
        alert("Don't Mess around, let people study")
    }

}

// Function to check whether the room no. entered by the user is correct or not
function verifyRoom() {
    let code = String(document.getElementById('searchBar').value);
    let codeStatus = false;

    for (let i = 0; i < Room.length; i++) {
        if (Room[i].roomCode === code) {
            roomNo = i;
            codeStatus = true;
            break;
        }
    }

    if (codeStatus == true) {
        askCode();
    } else {
        alert("The code you entered doesn't exist");
    }
}

// Adds a student in the array using push()
function addStudent() {
    if (tverified == true) {
        let student = String(prompt("Enter the Student ID: "))
        Room[roomNo].sCode.push(student)
        console.log(Room[roomNo].sCode)
    }
    else {
        alert("well played.")
    }
}

//Shows the Students in the Array
function showStudent() {
    if (tverified == true) {
        alert(Room[roomNo].sCode)
    }
    else{
        alert("You are not a teacher yet")
    }
}

//Function to make teacher dashboard available to teacher only