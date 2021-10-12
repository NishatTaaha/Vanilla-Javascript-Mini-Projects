const play= document.getElementById('play');
const music= document.querySelector('audio');
const img= document.querySelector('img');
const artist= document.getElementById('artist');
const title= document.getElementById('title');
const prev= document.getElementById('prev');
const next= document.getElementById('next');

const songs=[{
    name: "taaha1",
    title: "Magnificent Century",
    artist: "Turkish"
},

{
    name: "taaha2",
    title: "Bheegi Bheegi",
    artist: "Indian"
},

{
    name: "taaha3",
    title: "Yemin",
    artist: "Turkish"
},

];


let isPlaying=false;
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('animation')
}

const pausemusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.add('animation');
}

play.addEventListener('click',()=>{
    if(isPlaying){
        pausemusic();
    }
    else{
        playMusic();
    }
});


// changing song
const loadsong=(song)=>{
    title.textContent= songs.title;
    artist.textContent= songs.artist;
    music.src= 'audios/'+songs.name+'.mp3';
    img.src= 'images/'+songs.name+'.jpg';
}
songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
};

const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
};
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);