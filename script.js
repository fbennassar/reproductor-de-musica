var jsonMusic = [

    {
        "Title": "Not Long For This World",
        "Artist": "Slipknot",
        "Date": "2019",
        "link": "http://127.0.0.1:5500/music/not_long_for_this_world.mp3",
        "photo": "http://127.0.0.1:5500/img/slipknot.jpg"
    },

    {
        "Title": "The trooper",
        "Artist": "Iron Maiden",
        "Date": "1983",
        "link": "http://127.0.0.1:5500/music/the_trooper.mp3",
        "photo": "http://127.0.0.1:5500/img/iron_maiden.jpg"
    },

    {
        "Title": "Back in black",
        "Artist": "AC/DC",
        "Date": "1980",
        "link": "http://127.0.0.1:5500/music/back_in_black.mp3",
        "photo": "http://127.0.0.1:5500/img/ac_dc.jpg"
    }
]

function trackList() {
    cont = 0;
    var trackList = document.getElementById("trackList");
    for(var i in jsonMusic) {
        cont ++;
        var track = document.createElement("div");
        track.classList.add("track");
        track.innerHTML = cont + " " + jsonMusic[i].Title + " - " + jsonMusic[i].Artist + " " + jsonMusic[i].Date + " " +
        "<button class='playButton' onclick='playMusic(" + JSON.stringify(jsonMusic[i]) +")'> Play</button>";
        trackList.appendChild(track);

    }
}
function playMusic(select) {
    var player = document.getElementById("audioPlayer");
    var coverPhoto = document.getElementById("coverPhoto");
    coverPhoto.src = select.photo;
    player.src = select.link;
    player.play();
    player.addEventListener("ended", function() {
        if (repeatMode == true) {
            player.currentTime = 0;
            player.play();
        } else {
            nextSong();
        }
    });
    var songName = document.getElementById("ti");
    songName.innerHTML = "You are listening to: " + select.Title;
    var artist = document.getElementById("ar");
    artist.innerHTML = select.Artist;
}

function nextSong() {
    var player = document.getElementById("audioPlayer");
    var currentSongIndex = jsonMusic.findIndex(function(song) {
        return song.link === player.src;
    });
    var nextSongIndex = (currentSongIndex + 1) % jsonMusic.length;
    var nextSong = jsonMusic[nextSongIndex];
    var coverPhoto = document.getElementById("coverPhoto");
    coverPhoto.src = nextSong.photo;
    player.src = nextSong.link;
    player.play();
    var songName = document.getElementById("ti");
    songName.innerHTML = "You are listening to: " + nextSong.Title;
    var artist = document.getElementById("ar");
    artist.innerHTML = nextSong.Artist;
    
}

function previousSong() {
    var player = document.getElementById("audioPlayer");
    var currentSongIndex = jsonMusic.findIndex(function(song) {
        return song.link === player.src;
    });
    var previousSongIndex = (currentSongIndex - 1 + jsonMusic.length) % jsonMusic.length;
    var previousSong = jsonMusic[previousSongIndex];
    var coverPhoto = document.getElementById("coverPhoto");
    coverPhoto.src = previousSong.photo;
    player.src = previousSong.link;
    player.play();
    var songName = document.getElementById("ti");
    songName.innerHTML = "You are listening to: " + previousSong.Title;
    var artist = document.getElementById("ar");
    artist.innerHTML = previousSong.Artist;
}

var repeatMode = false;

function repeatSong() {
    var repeatButton = document.getElementById("repeatButton");
    repeatMode = !repeatMode;
    if (repeatMode === true) {
        repeatButton.classList.add("active");
    } else {
        repeatButton.classList.remove("active");
    }
}

// player = document.getElementById("audioPlayer");
// player.src = "http://127.0.0.1:5500/music/not_long_for_this_world.mp3"
// player.play();

var commentsContainer = document.getElementById("commentBox");
function commentBox() {
     var commentjs = document.getElementById("comment").value;
    var commentBoxjs = document.createElement("div");
    var namejs = document.getElementById("username").value;
    commentBoxjs.innerHTML = namejs + ": " + commentjs + "<br>" + "<hr>";
    commentsContainer.appendChild(commentBoxjs);
    var commentjs = document.getElementById("comment");
    commentjs.value = "";
    var usernamejs = document.getElementById("username");
    usernamejs.value = ""; 
}
