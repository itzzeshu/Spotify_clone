console.log("Welcome to Spotify");
let songindex=0;
let audioElement = new Audio('songs/1.mp3');  
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]
songitems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
    
})


    masterplay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else
        {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle'); 
            gif.style.opacity = 0;
        }
    })
    audioElement.addEventListener('timeupdate',()=>{ 
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
         myprogressbar.value=progress;
    })
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
    })
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
           songindex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');  
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songindex+1}.mp3`;
            mastersongname.innerText = songs[songindex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        })
    })

    document.getElementById('next').addEventListener('click', ()=>{
        if(songindex>=9){
            songindex = 0
        }
        else{
            songindex += 1;
        }
        audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songindex<=0){
            songindex = 0
        }
        else{
            songindex -= 1;
        }
        audioElement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })



