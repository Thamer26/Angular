(function() {
  function SongPlayer(Fixtures) {
         var SongPlayer = {};
         var getSongIndex = function(song) {
    return currentAlbum.songs.indexOf(song);
};

/**
* @desc Active song object from list of songs
* @type {Object}
*/
         SongPlayer.currentSong = null;

         var currentAlbum = Fixtures.getAlbum();

         }
         /**
 * @desc Buzz object audio file
 * @type {Object}
 */
   var currentBuzzObject = null;
   /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
         if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
         } else if (SongPlayer.currentSong === song) {
             if (currentBuzzObject.isPaused()) {
                 playSong(song);
             }
        }
     };

})
/**
* @function pause
* @desc Pause current song
* @param {Object} song
*/
SongPlayer.pause = function(song) {
    song = song || SongPlayer.currentSong;
    currentBuzzObject.pause();
    song.playing = false;
  };
  SongPlayer.previous = function() {
       var currentSongIndex = getSongIndex(SongPlayer.currentSong);
       currentSongIndex--;
   };
currentBuzzObject.play();


   var setSong = function(song) {
       if (currentBuzzObject) {
           currentBuzzObject.stop();
           currentSong.playing = null;
       }
       var stopSong = function() {
                   currentBuzzObject.stop();
                   SongPlayer.currentSong.playing = null;
           }
       currentBuzzObject = new buzz.sound(song.audioUrl, {
           formats: ['mp3'],
           preload: true
       });

       currentSong = song;
    };
         SongPlayer.play = function(song) {
         if (currentSong !== song) {
          setSong(song);
          currentBuzzObject.play();


     }
 };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);

})();
