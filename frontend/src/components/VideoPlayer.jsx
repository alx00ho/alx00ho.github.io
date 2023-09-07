import ReactPlayer from "react-player";

function VideoPlayer(link) {
  return (
    <div className="video-container rounded border-2 border-stone-700 max-w-xs">
      <ReactPlayer
        url={link.link}
        className="react-player video"
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        muted={true}
      />
    </div>
  );
}
export default VideoPlayer;
