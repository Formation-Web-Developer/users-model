const inputs = [document.getElementById('name'), document.getElementById('lastname'), document.getElementById('email')];
let id = 0;
const destroy = (id) => document.getElementById(id).remove();
function newUser(){
    if(inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0){
        const user = { id: (id++), name: inputs[0].value, lastname: inputs[1].value, email: inputs[2].value};
        document.getElementById('users').innerHTML += `<div class="row" id="${user.id}"><div class="col">${user.name}</div><div class="col">${user.lastname}</div><div class="col">${user.email}</div><div class="col" onclick="destroy(${user.id})"><span class="remove">X</span></div></div>`
        inputs.forEach(input => input.value = '')
    }
}
