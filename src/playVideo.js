function playVideo(stream, idVideo){
  const video = document.getElementById(idVideo);
  video.srcObject = stream;
  video.onloadmetadata = function(){
    video.play();
  };
}

module.exports = playVideo;
