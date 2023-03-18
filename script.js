let audioElement = new Audio('')
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay')
let next = document.getElementById('next') 
let previous = document.getElementById('previous')
let myProgressBar = document.getElementById('progressbar')
let gif = document.getElementById('gif')
let songitems = Array.from(document.getElementsByClassName('songitem'))
let songs = [
    {songName: "Sia-Unstoppable", filePath: "songs/1.mp3", runtime:"03:40", coverPath: "covers/unstoppable.jpg"},
    {songName: "2Pac-TimeBack", filePath: "songs/2.mp3", runtime:"03:24", coverPath: "covers/2pac.jpg"},
    {songName: "On My Way", filePath: "songs/3.mp3", runtime:"03:36", coverPath: "covers/on my way.jpg"},
    {songName: "On and On", filePath: "songs/4.mp3", runtime:"03:28", coverPath: "covers/on and on.jpg"},
    {songName: "Let Me Love You", filePath: "songs/5.mp3", runtime:"03:25", coverPath: "covers/let me love you.jpg"},
    {songName: "Invisible", filePath: "songs/6.mp3", runtime:"03:21", coverPath: "covers/invisible.jpg"},
    {songName: "Senorita", filePath: "songs/7.mp3", runtime:"03:28", coverPath: "covers/senorita.jpg"},
    {songName: "Scars To your Beautiful", filePath: "songs/8.mp3", runtime:"03:42", coverPath: "covers/scars to your beautiful.jpg"},
    {songName: "Stay", filePath: "songs/9.mp3", runtime:"02:37", coverPath: "covers/stay.jpg"},
    {songName: "Levitating", filePath: "songs/10.mp3", runtime:"03:44", coverPath: "covers/levitating.jpg"}
]
console.log("welcome to Music player")
// song name ,songs cover images and song runtime
songitems.forEach((element, i)=>{
    element.getElementsByTagName ('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerText = songs[i].runtime;
})
// play /pause button
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// time and seekbar progress,seekbar-bottom-info update
audioElement.addEventListener('timeupdate', ()=> {
    
    document.getElementById('songtimestamp').innerText = parseInt(audioElement.currentTime);
    // update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value = Progress
})

progressbar.addEventListener('change', ()=> {
    audioElement.currentTime = progressbar.value * audioElement.duration/100 ;
})
// click on songitem to play
songitems.forEach((element)=>{
    element.addEventListener('click',(e)=> {
        index = parseInt(e.target.id);
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log(songs[index-1].songName,"is playing now")
        document.getElementById('songinformation').innerText = songs[index-1].songName;
    })
})
// next button 
next.addEventListener('click',()=> {
    if (index >= 10) {
        index = 0;
    }
    console.log(songs[index].songName,"is playing now")
    audioElement.src = `songs/${index+=1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementById('songinformation').innerText = songs[index-1].songName;
})
// previous button 
previous.addEventListener('click',()=> {
    if (index <= 1) {
        index = 11;
    }
    console.log(songs[index-2].songName,"is playing now")
    audioElement.src = `songs/${index-=1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementById('songinformation').innerText = songs[index-1].songName;
})
// forward button
document.getElementById('forward').addEventListener('click',()=> {
    audioElement.currentTime += 10;
})
// backward button
document.getElementById('backward').addEventListener('click',()=> {
    audioElement.currentTime -= 10;
})
