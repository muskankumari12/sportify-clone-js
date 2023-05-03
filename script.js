console.log("Welcome to Spotify");

// Initilize the variables
let songIndex = 1;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('play');
let mastersongName = document.getElementById('mastersongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('song-list'));


myProgressBar.value=0

let songs=[
    {songName: "Let me love you", filePath: "songs/song1.mp3", coverPath: "photos/song1.jpg",},
    {songName: "Attention", filePath: "songs/song2.mp3", coverPath: "photos/song2.jpg"},
    {songName: "Closer", filePath: "songs/song3.mp3", coverPath: "photos/song3.jpeg"},
    {songName: "Stay", filePath: "songs/song4.mp3", coverPath: "photos/song4.jpg"},
    {songName: "Night Changes", filePath: "songs/song5.mp3", coverPath: "photos/song5.jpg"},
    {songName: "I love you", filePath: "songs/song6.mp3", coverPath: "photos/song6.jpeg"},
]

songItem.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByClassName("image")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    


})
//audioElement.play();

//Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity= 0;
    }
})


//Listen to the Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('demo')).forEach((element)=>{
        element?.classList.remove('fa-pause-circle')
        element?.classList.add('fa-play-circle')
    })
}


Array.from(document.getElementsByClassName('demo')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        makeallPlays();
        songIndex = parseInt(e.target.id);
        
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')

        audioElement.src = `songs/song${songIndex}.mp3`;
        audioElement.currentTime =0;
        audioElement.play()
        mastersongName.innerHTML=songs[songIndex-1].songName
        gif.style.opacity= 1;
        // console.log("ap",audioElement.duration);
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

//Adding functionality on next button

document.getElementById('next').addEventListener('click', ()=>{
    
    if(songIndex > 6    ){
        songIndex = 1
    }
    else if(songs.length===songIndex){
        songIndex=1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/song${songIndex}.mp3`;
   mastersongName.innerHTML=songs[songIndex-1].songName

        // console.log("songIndex",audioElement.title);
        audioElement.currentTime =0;
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        
})

//Adding functionality to next button

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 6
    }
    
    
    else{
        songIndex -= 1;
    }

    audioElement.src = `songs/song${songIndex}.mp3`;
    // console.log("songIndex",songIndex);


    console.log(audioElement.src);
    mastersongName.innerHTML=songs[songIndex-1].songName
    console.log("songIndex",audioElement.title);
    audioElement.currentTime =0;
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})