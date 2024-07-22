let signupdata = JSON.parse(localStorage.getItem("userdata"))
let image = document.getElementById('userimage')
const {username , useremail, userpassword , userPic} = signupdata

let USerIcon= document.getElementById('username')


USerIcon.innerText=username
image.src = userPic

