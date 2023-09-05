import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div className="video-container rounded border-2 border-stone-700 max-w-xs">
      <ReactPlayer
        url="https://user-images.githubusercontent.com/46589739/265579853-1ad18d5e-3383-4d42-919c-da2ab7facce1.mp4"
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
