
let genres = document.querySelector('.genres');
let playlists =document.querySelector('.playlists');
let artists =document.querySelector('.artists');
let podcasts =document.querySelector('.podcasts');
let slideer =document.querySelector('.carouselabox');
let scorllPerClick;
let imagePadding = 20;
  

// scroll function 
let scrollAmount =0
// scroll left
function scrolltoLeft(){
   slideer.scrollTo({
      top:0,
      left:(scrollAmount -= scorllPerClick),
      behavior:"smooth"
   });
  
if(scrollAmount < 0){
   scrollAmount=0
}
}
// scroll right
function scrolltoRight(){
   if(scrollAmount <=slideer.scrollWidth - slideer.clientWidth){
slideer.scrollTo({
   top:0,
   left:(scrollAmount += scorllPerClick),
   behavior:"smooth"
})
   }
}
// display  hour function 
let x = new Date().getHours()
console.log(x);
let whatTime = document.querySelector('.what-time');


if (x == 0 ){
   whatTime.innerHTML = 'לילה טוב'
} if(x>=6){
   whatTime.innerHTML = 'בוקר טוב'
} if(x>=12){
   whatTime.innerHTML = 'צהריים טובים'
} if(x>=18){
   whatTime.innerHTML = 'ערב טוב'
} if(x>=21){ 
   whatTime.innerHTML = 'לילה טוב'
}
console.log(whatTime.innerHTML);

showData();


// show gener container
function showData(){
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': 'd046e852e6msh20cc7b4fbd898afp13ae41jsn7cf9ce9f955b',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
         }
      };
   
   //   data from spotify api
      fetch('https://spotify23.p.rapidapi.com/search/?q=pop&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
      .then(response => response.json())
      .then(response => {console.log(response)
         // randoms pic
         let genresPic  = ['/image/pic0.webp','/image/pic1.webp','/image/pic2.jpeg','/image/pic3.jpg','/image/pic4.jpg','/image/pic5.webp','/image/pic6.jpg','/image/pic7.jpg','/image/8.jpg','/image/pic9.jpg']
         // genres music and show
           data = response.genres.items;
         // display genrer containet 
          data.forEach((value , i) => {
            let html = `<div class = ' genrerShow d-flex flex-column back ' >
            <img src="${genresPic[i]}" alt="First slide" width="150px" height="150px" class='img-${i} image'>
            <p>${value.data.name}</p>
         </div>
       `
            genres.innerHTML+=html;
          });
         // define scroll click for the carusel
         // width and padding image equal to scroll
          scorllPerClick = document.querySelector('.img-1').clientWidth + imagePadding;
          console.log(scorllPerClick);
     
      
   // display  playlistsArr 
    let playlistsArr =  response.playlists.items;
    let playlistsArrCopy = [...playlistsArr]
   //  length playlist container 
    playlistsArrCopy.length =5
    playlistsArrCopy.forEach((value) => {
      //  display playlists
       let html = `<div class ='playlistsShow  mb-5  rounded-3 d-flex flex-column back m-3' >
       <img src="${value.data.images.items[0].sources[0].url}" alt="" width="150px" height="150px " class='image'>
       <p>${value.data.name}</p>
      
      </div>`
      playlists.innerHTML +=html;
   
    });

   // display artists 
    let artistsArr =  response.artists.items;
    let artistsArrCopy = [...artistsArr]
    artistsArrCopy.length = 5
    artistsArrCopy.forEach((value) => {
      let html = `<div class ='artistsShow mb-5 rounded-3 d-flex flex-column back m-3'>
      <img src="${value.data.visuals.avatarImage.sources[0].url}" alt="First slide" width="150px" height="150px" class='image'>
      <p class = 'name artists'>${value.data.profile.name} </p>
    </div>`
      artists.innerHTML +=html;
      

    });

   //  display podcasts 
   let podcastsArr =  response.podcasts.items;
   let podcastsArrCopy = [...podcastsArr]
   //  length playlist container 
   podcastsArrCopy.length = 5
   podcastsArrCopy.forEach((value) => {
      // dispaly podcasts
     let html = `<div class ='podcastsShow mb-5  rounded-3 d-flex flex-column back m-3' >
     <img src="${value.data.coverArt.sources[1].url}" alt="" width="150px" height="150px" class='image'>
     <p class = 'name podcasts'>${value.data.name} </p>
   </div>`
     podcasts.innerHTML+=html;
   });
   // call back function to updata the localStorage 
   liked()
   

   })
	.catch(err => console.error(err));

}


let arrLike = [];
// function get items like to localStorage
function liked(){
   // define key
   let saveData = JSON.parse(localStorage.getItem('like'));
   if(saveData != undefined){
      arrLike = saveData; 
   }
   // container of home page
   let likedArtist = document.querySelectorAll('.back');
   likedArtist.forEach((value)=>{
   value.addEventListener('click',function(e){
      // condition click only one
     if(arrLike.includes( value.innerText)){}
     else{
   arrLike.push(value.innerText)
   // set the key like
   localStorage.setItem('like' ,JSON.stringify(arrLike));
     }
})
})
}


   
   















// fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
// .then(response => response.json())
// .then(response => {console.log(response)
//    let responseItems = response.items
//    responseItems.forEach((value) => {
     
//       console.log(value.track.preview_url);

//    });
//    //   audio.innerHTML = `<source src="${response.items[0].track.preview_url}" type="audio/mpeg">`


//  })
// .catch(err => console.error(err));
