import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './../assets/css/App.css'
import youtube from '../api/youtube'
import useVideos from '../hooks/useVideos'

const App = () => {

    
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search ] = useVideos ('reactjs')

    useEffect( () => {
        setSelectedVideo(videos[0])
    }, [videos])

    return( 
        <div className="ui container">
            <h2 className="ui center aligned icon header">
                <i className="youtube icon"></i>
                SEARCH YOUTUBE VIDEOS
            </h2>
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App