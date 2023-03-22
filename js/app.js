/*var gecerliRenk = localStorage.getItem("backgroundColor");
console.log(gecerliRenk)
var toggleButton = document.getElementById("gece-gunduz-button");
document.body.style.backgroundColor = gecerliRenk;

if (gecerliRenk === "#111111")
{
    toggleButton.innerHTML = '<i class="fas fa-sun" style="color: #fdfdfd;"></i>';
}
else
{
    toggleButton.innerHTML = '<i class="fas fa-moon" style="color: #2b2b2b;"></i>';
}
toggleButton.addEventListener("click", function()
{
if (gecerliRenk === "#111111")
{
gecerliRenk = "#ffffff";
localStorage.setItem("backgroundColor", "#ffffff");
document.body.style.backgroundColor = gecerliRenk;
toggleButton.innerHTML = '<i class="fas fa-moon" style="color: #2b2b2b;"></i>';
}
else
{
gecerliRenk = "#111111";
localStorage.setItem("backgroundColor", "#111111");
document.body.style.backgroundColor = gecerliRenk;
toggleButton.innerHTML = '<i class="fas fa-sun" style="color: #fdfdfd;"></i>';
}
});*/


const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginButon = document.querySelector(".btnLogin")
const closeButon = document.querySelector(".icon-close");

registerLink.addEventListener("click", ()=> 
{
    wrapper.classList.add("active");
})

loginLink.addEventListener("click", ()=> 
{
    wrapper.classList.remove("active");
})

loginButon.addEventListener("click", ()=> 
{
    wrapper.classList.add("active-popup");
})

closeButon.addEventListener("click", ()=> 
{
    wrapper.classList.remove("active-popup");
})

