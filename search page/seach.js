let input = document.querySelector('input');
let filterInputContainer = document.querySelector('.filter-input');
let filterAlbum = document.querySelector('.filter-album');
let filterArtist = document.querySelector('.filter-artist');
let filterplaylist = document.querySelector('.filter-playlist');
let  filterAudio = document.querySelector('.filter-audio');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd046e852e6msh20cc7b4fbd898afp13ae41jsn7cf9ce9f955b',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}	
};



function filterSerch(){
	filterAlbum.innerHTML = '';
	filterArtist.innerHTML= '';
	filterplaylist.innerHTML= '';
fetch(`https://spotify23.p.rapidapi.com/search/?q=${input.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
.then(response => response.json())
.then(response => {console.log(response)
	
	let arrAlbum = response.albums.items;
	let arrAlbumcopy = [...arrAlbum]
	arrAlbumcopy.length = 5;
	console.log(arrAlbumcopy);
	arrAlbumcopy.forEach((value) => {
		let html = `<div class = 'filter-album box mb-5 rounded-3 d-flex flex-column justify-content-between align-content-between back' >
		<img src="${value.data.coverArt.sources[0].url}" alt="" width="150px" height="150px">
		<p  class = 'text-white'>${value.data.date.year} </p>
		<p  class = 'text-white'>${value.data.name} </p>
		 </div>`
		 filterAlbum.innerHTML+=html;
		
		 if(input.value ==''){
			filterAlbum	.innerHTML = ''
		 }
	});
	// artist
	let arrArtist= response.artists.items;
	let artistsArrCopy = [...arrArtist]
	artistsArrCopy.length = 1;
	artistsArrCopy.forEach((value) => {
		let html = `<div class = 'filter-artists-box mb-5'>
		<img src="${value.data.visuals.avatarImage.sources[0].url}" alt="" width="400px" height="400px">
		<h3 class = 'text-white'>${value.data.profile.name}</h3> </div>`
		filterArtist.innerHTML=html;
	});
	//playlist
		
	let arrplaylist= response.playlists.items;
	let playlistsArrCopy = [...arrplaylist]
	playlistsArrCopy.length = 4;
	playlistsArrCopy.forEach((value) => {
		let html = `<div class = ' filter-playlists box mb-5 rounded-3 d-flex flex-column justify-content-between align-content-between back'>
		<img src="${value.data.images.items[0].sources[0].url}" alt="" width="150px" height="150px">
		<p class = 'text-white'>${value.data.name}</p> </div>`
		filterplaylist.innerHTML+=html;
	});
      

let id = response.tracks.items[0].data.id;
console.log(id);
fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${id}`, options)
.then(response => response.json())
.then(response => {console.log(response)
	let song = response.tracks[0].preview_url;
	console.log(song);
	filterAudio.innerHTML =`<div class='d-flex justify-content-center mb-5'>
	<h6>preview </h6>
	<p class ='text-white'>${response.tracks[0].name} </p>
	<audio controls>
	<source src="${song}" type="audio/ogg">
	</audio>
	</div>
	`
})
})

// .catch(err => console.error(err));
}

input.addEventListener('keydown',function(){
	filterSerch()
})

// fetch(`https://spotify23.p.rapidapi.com/search/?q=${input.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
// .then(response => response.json())
// .then(response => {console.log(response)
// let id = response.tracks.items;
// console.log(id);
// let arr = [];
// id.forEach((value) => {
//    // console.log(value);
//    let idTrack =value.data.id
//   arr.push(idTrack)
// });
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   // get tarck
// fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${arr[i]}`, options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
 
// }

// })


