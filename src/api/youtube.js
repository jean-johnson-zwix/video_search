import axios from 'axios'

const KEY = 'AIzaSyD_OKOQlIEcPKCVNSPv2Qkq3y6zNm0yYXM'

export default axios.create ({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
