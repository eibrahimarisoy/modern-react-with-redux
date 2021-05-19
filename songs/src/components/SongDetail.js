import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {

    if (song === null) {
        return <div>
            Select a song
        </div>  
    }
    console.log(song)

        return (
            <div>
                <h3>Details for:</h3>
                <p>
                    title: {song.title}
                    <br />
                    duration: {song.duration}
                    

                </p>
                {}
            </div>
         
    )}



const mapStateToProps = (state) => {
console.log(state)
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);