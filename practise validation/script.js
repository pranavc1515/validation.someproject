
 function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let tnCInput = document.getElementById('tnC').checked
    let error = false


if(firstNameInput && firstNameInput.length >=3) {
    document.getElementById('first-name-valid').style.display='block'
    document.getElementById('first-name-invalid').style.display = 'none'
} else{
    document.getElementById('first-name-invalid').style.display='block'
    document.getElementById('first-name-valid').style.display = 'none'

    error = true
}



if(lastNameInput && lastNameInput.length >=3){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById('last-name-invalid').style.display = 'none'
} else{
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById('last-name-valid').style.display = 'none'

    error = true
}

if(
    emailInput &&
    emailInput.includes('@') &&
    emailInput.includes('.')&&
    emailInput.includes('.')<= emailInput.length -3 &&
    emailInput.indexOf(('@') !== 0)
){
    document.getElementById('email-valid').style.display='block'
    document.getElementById('email-invalid').style.display = 'none'
} else{
    document.getElementById('email-invalid').style.display='block'
    document.getElementById('email-valid').style.display = 'none'

    error = true
}

if(tnCInput){
    document.getElementById('tnC-invalid').style.display = 'none'
} else{
    document.getElementById('tnC-invalid').style.display = 'none'
}

if(!error){
    alert("Your details hass been updated")

    firstNameInput = document.getElementById('first-name').value = ''
    lastNameInput = document.getElementById('last-name').value = ''
    emailInput = document.getElementById('email').value =''
    tnCInput = document.getElementById('tnc').checked = 'false'


    document.getElementById('first-name-valid').style.display = 'none'
    document.getElementById('last-name-valid').style.display = 'none'
    document.getElementById('last-name-valid').style.display ='none'

}
}