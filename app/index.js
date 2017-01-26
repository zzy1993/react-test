import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCkGiiYyRknbGzxIav05mh_HpryJVJsBlc';

//Create a new component
//Produce HTML

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('haha');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  //components
  render(){
    //Limit call freq
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onSearchItemChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Take generated HTML
//Put it on page
ReactDOM.render(<App/>, document.querySelector('.container'));