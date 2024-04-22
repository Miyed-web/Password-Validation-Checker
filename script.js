const passInput = document.getElementById('password');
const eyeIcon = document.getElementById('show-hide');
const requrementList = document.querySelectorAll(".requirement-list li")
const btn = document.getElementById('btn')
const requrements = [
  {regex:/.{8,}/,index:0},
  {regex:/[0-9]/,index:1},
  {regex:/[a-z]/,index:2},
    {regex:/[^A-Za-z0-9]/,index:3},
    {regex:/[A-Z]/,index:4}
  ]


function valid(){
    requrements.forEach(i=>{
    let isValid = i.regex.test(passInput.value);
    
    let requirementItem = requrementList[i.index];
    if (isValid) {
      
     requirementItem.firstElementChild.className =  "fa-solid fa-check";
     requirementItem.classList.add('valid')
      
    } else {
      requirementItem.firstElementChild.className =  "fa-solid fa-circle";
      requirementItem.classList.remove('valid')
    }
    
  })
}

// btn.addEventListener("click", ()=>{
// valid()
// })

passInput.addEventListener("input",()=>{
  valid()
})



eyeIcon.addEventListener("click",( )=>{
  if (passInput.type === "password") {
    passInput.type = "text";
    eyeIcon.className = "fa-solid fa-eye-slash"
  } else {
    passInput.type = "password";
    eyeIcon.className = "fa-solid fa-eye"
  }
  
  
  
})