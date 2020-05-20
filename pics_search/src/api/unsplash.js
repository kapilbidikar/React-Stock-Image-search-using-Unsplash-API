
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CXcGzHNsI0bAYtKRCjJxqvasqqWni28jNdIui7XH5f4'
    }
})