let displayALBUMS = document.querySelector('.display-data-LIKED-ALBUMS');
let displayArtist = document.querySelector('.display-data-LIKED-Artist');
;

 let localStorageArr = JSON.parse( localStorage.getItem('like'))

//  
const options = {
    method: 'GET',
    headers: {
       'X-RapidAPI-Key': '68f13ec9f7msh30e1352979398b4p1c83f5jsnceb75e9f8b37',
       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
 };

 fetch('https://spotify23.p.rapidapi.com/search/?q=pop&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
 .then(response => response.json())
 .then(response => {console.log(response)

    let genresPic  = ['/image/pic0.webp','/image/pic1.webp','/image/pic2.jpeg','/image/pic3.jpg','/image/pic4.jpg','/image/pic5.webp','/image/pic6.jpg','/image/pic7.jpg','/image/8.jpg','/image/pic9.jpg']
//    display from local storege liked albums
console.log(localStorageArr);

    response.genres.items.forEach((value,i) => {
        localStorageArr.forEach((val) => {
         
            if(val==value.data.name){
                console.log(value.data.name);
                
                displayALBUMS.innerHTML+=`<div class ='liked albums p-5 '>

            <img src="${genresPic[i]}" alt="First slide" width="150px" height="150px">
            <p class='text-white'>${value.data.name}</p>
            </div>`
        }
    });
 });
 console.log(response.artists.items);
 response.artists.items.forEach((value) => {

    localStorageArr.forEach((val) => {
        if(val==value.data.profile.name){
            console.log(value.data.profile.name);
            
        displayArtist.innerHTML+=`<div class ='liked albums p-5 '>

        <img src="${value.data.visuals.avatarImage.sources[0].url}" alt="First slide" width="150px" height="150px">
        <p class='text-white'>${value.data.profile.name}</p>
        </div>`
    }

 });
});


})