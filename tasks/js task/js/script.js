

function bmicalc() {
   let result = document.getElementById("result").value = bmi;
}

function handleClick(element) {
    element.style.color = 'blue';
    let li=document.querySelectorAll("li");
    li.forEach((element)=>{
        element.addEventListener("mouseout",()=>{
            element.style.color='black';
        });
    });
 }







let form = document.getElementById('form')
let users = []
form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    // console.log('submit')
    // console.log(e)
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)

    let obj = {
        firstName :e.target[0].value,
        lastName : e.target[1].value
    }

    users.push(obj)
    let tableBody = document.getElementById('table_body')

let newtr = document.createElement('tr')
tableBody.appendChild(newtr)
let newTd1 = document.createElement('td')
newTd1.innerText = e.target[0].value;
newtr.appendChild(newTd1)


let newTd2 = document.createElement('td')
newTd2.innerText = e.target[1].value;
newtr.appendChild(newTd2)
let newTd3 = document.createElement('td')
newTd3.innerHTML = `<button class="btn btn-sm btn-primary" onclick="editUser(this)">Edit user</button>
<button class="btn btn-sm btn-danger" onclick="removeUser(this)">Remove user</button>`;
newtr.appendChild(newTd3)
tableBody.appendChild(newtr)


    // console.table(users)
})

function editUser (button){
    prompt("edit user name")
}
function removeUser (button){
    button.parentElement.parentElement.remove()
}

console.log(users)










