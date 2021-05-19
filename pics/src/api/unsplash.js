import axios from 'axios';


export default axios.create({
    baseURL: 'https:/api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID 9sl7CpOvp9bkobk_zKILdAIqfhiQHlwEyVK5O5wvIW4',
    }

})


