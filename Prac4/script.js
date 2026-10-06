const title = document.getElementById('storeTitle')
title.innerHTML = 'Welcome To ShopEase!'
const products = document.getElementsByClassName('product')
for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('mouseover', function () {
        this.classList.add('highlight')
    })
    products[i].addEventListener('mouseout', function () {
        this.classList.remove('highlight')
    })
}
const headings = document.getElementsByTagName('h2')
for (let i = 0; i < headings.length; i++) {
    headings[i].style.marginBottom = '50px'
}

const firstProduct = document.querySelector('.product')
firstProduct.style.borderRadius = "50px"
firstProduct.addEventListener('dblclick',function(){
    showMessage(
        "You Double Clicked on the first product!"
    );
    this.style.backgroundColor='yellow'
})
const buyButtons = document.querySelectorAll(".buyBtn");
buyButtons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function () {
        const productName= this.parentElement.querySelector('h3').innerHTML;
        showMessage(
            productName + " added to cart Successfully!"
        );
        
    })
})
function showMessage(text){
    const message =document.getElementById('message')
    message.innerHTML=text
    message.style.display='block';

    setTimeout(function () {
        message.style.display='none';
    },3000)
}
title.addEventListener("mouseover",function(){
    this.style.transform="scale(1.15)";
})
title.addEventListener("mouseout",function(){
    this.style.transform="scale(1)";
});
const nameInput =document.getElementById("name")
/*nameInput.addEventListener("keydown",function(event){
    showMessage("Key Pressed : " + event.key)
})*/
nameInput.addEventListener("keyup",function(){
    if (this.value.length > 0) {
        showMessage("Hello , " + this.value)
    }
})
const category=getElementById("category")
category.addEventListener("change",function()
    {
        if (this.value.length!="") {
            showMessage("The Category is : " + this.value)
        }
    })
const form =document.getElementById("customerForm");
form.addEventListener("submit",function(event){
   event.preventDefault()
   const name=document.getElementById("name").value
   const email = document.getElementById("email").value
   if (name==="" || email==="") {
    showMessage("Please Enter Details");
    alert("Please Enter the Details First")
   }
   else{
    showMessage("Submission Successful !!!");
   }
})
const themeBtn = document.getElementById("themeBtn")
themeBtn.addEventListener("click",function()
{
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        this.innerHTML="Switch to Light Theme"
    }
    else{
        this.innerHTML="Switch to Dark Theme"
    }
})

