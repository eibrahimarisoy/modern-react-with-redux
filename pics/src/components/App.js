import React from 'react';
import SearchBar from './SearchBar.js'
import unsplash from '../api/unsplash.js';
import ImageList from './ImageList.js'

class App extends React.Component {

    state = {
            images: [],
        }

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
            },

        })
        
        this.setState({ images: response.data.results })

    }




    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;



    // Birinci yöntem
    // onSearchSubmit(term) {
    //     axios.get('https:/api.unsplash.com/search/photos', {
    //         params: {
    //             query: term,
    //         },
    //         headers: {
    //             'Authorization': 'Client-ID 9sl7CpOvp9bkobk_zKILdAIqfhiQHlwEyVK5O5wvIW4',
    //         }
    //     }).then((response) => {

    //     })
    // }