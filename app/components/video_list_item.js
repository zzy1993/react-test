import React from 'react';

//difference between {video} video
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="videl-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;