
// sending facebook page url
let faceBtn = document.querySelector('.face-btn');
faceBtn.addEventListener('click',function(){
window.open ('https://www.facebook.com/login/')
})



// user inputs value - dom
	let UserName =document.querySelector('.UserName');
	let Password =document.querySelector('.Password');

// function  localStorage 
	function localUser (){
		// save user data
	let saveUserOne =  {name:'chen', password:'1234'};
	let saveUserTwo = {name:'wassi' , password:'1234'};
	// local setItem
    localStorage.setItem('userone' ,JSON.stringify(saveUserOne));
    localStorage.setItem('usertwo' ,JSON.stringify(saveUserTwo));
	// condetion if the user and password are match to thr inputs
	if(JSON.parse(localStorage.getItem('userone')).name == UserName.value && JSON.parse(localStorage.getItem('userone')).password ==Password.value || JSON.parse(localStorage.getItem('usertwo')).name == UserName.value && JSON.parse(localStorage.getItem('usertwo')).password ==Password.value){
    // open home page url
		window.open ( '/home page/homePage.html')	
	}else{
		alert('u not aloud')
	}
}

//sending home page url
let loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click',function(){
	localUser()
	})






	