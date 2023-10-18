var jsonMusic = [

    {
        "Title": "Not Long For This World",
        "Artist": "Slipknot",
        "Date": " ",
        "link": "http://127.0.0.1:5500/music/not_long_for_this_world.mp3"
    },

    {
        "Title": "The trooper",
        "Artist": "Metallica",
        "Date": " ",
        "link": "http://127.0.0.1:5500/music/the_trooper.mp3"
    },

    {
        "Title": "Back in black",
        "Artist": "AC/DC",
        "Date": " ",
        "link": "http://127.0.0.1:5500/music/back_in_black.mp3"
    }
]

function trackList() {
    cont = 0;
    var trackList = document.getElementById("trackList");
    for(var i in jsonMusic) {
        cont ++;
        var track = document.createElement("div");
        track.classList.add("track");
        track.innerHTML = cont + " " + jsonMusic[i].Title + " - " + jsonMusic[i].Artist +
        "<button class='playButton' onclick='playMusic(" + JSON.stringify(jsonMusic[i]) +")'> Play</button>";
        trackList.appendChild(track);
    }
}
function playMusic(select) {
    var player = document.getElementById("audioPlayer");
    player.src = select.link;
    player.play();
}

function nextSong() {
    var player = document.getElementById("audioPlayer");
    var currentSongIndex = jsonMusic.findIndex(function(song) {
        return song.link === player.src;
    });
    var nextSongIndex = (currentSongIndex + 1) % jsonMusic.length;
    var nextSong = jsonMusic[nextSongIndex];
    player.src = nextSong.link;
    player.play();
    
}

function previousSong() {
    var player = document.getElementById("audioPlayer");
    var currentSongIndex = jsonMusic.findIndex(function(song) {
        return song.link === player.src;
    });
    var previousSongIndex = (currentSongIndex - 1 + jsonMusic.length) % jsonMusic.length;
    var previousSong = jsonMusic[previousSongIndex];
    player.src = previousSong.link;
    player.play();
}

// player = document.getElementById("audioPlayer");
// player.src = "http://127.0.0.1:5500/music/not_long_for_this_world.mp3"
// player.play();

var commentsContainer = document.getElementById("commentBox");
function commentBox() {
    var commentjs = document.getElementById("comment").value;
    var commentBoxjs = document.createElement("div");
    commentBoxjs.innerHTML = commentjs;
    commentsContainer.appendChild(commentBoxjs);
    commentjs.value = "";
}

