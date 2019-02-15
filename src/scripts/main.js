$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs")
console.log(loadSongs)
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")
    console.log(songList)

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use fetch to load the song data from your json-server
    */
//    loadSongs.click(() => {
//        fetch( "http://localhost:8088/songs/")
//        .then (songs => songs.json())
//        .then(songs => {
//            songs.forEach(song => {
//                songList.append(`<section class="song">
//                <h1 class="song__title">${song.title}</h1>
//                <section class="song__description">
//                    Performed by ${song.artist} on the album ${song.album}
//                </section>
//            </section>`)
//            })
               
//            });
//        })
//    })

loadSongs.click(() => {
    fetch( "http://localhost:8088/songs/")
    .then (songs => songs.json())
    .then(songs => {
        songs.forEach(song => { 
            const stringHTML =` <section class="song">
                            <h1 class="song__title">${song.title}</h1>
                            <section class="song__description">
                                Performed by ${song.artist} on the album ${song.album}
                            </section>
                       </section>`
          Object.values(song).filter(value => {
              $("#search-bar").val() === value ? songList.append(stringHTML) : ""
              
          })
        })
    })
})



    /*
        Chain a `.then()` method to the fetch call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the "song-list" article.

            <section class="song">
                <h1 class="song__title">${song.title}</h1>
                <section class="song__description">
                    Performed by ${song.artist} on the album ${song.album}
                </section>
            </section>
    */


})
