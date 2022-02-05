import React from 'react';
import memesData from '../memesData.js';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function get_new_image() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNum].url,
        }))
        // setMemeImage(memesArray[randomNum].url);
    }

    return (
        <main className="meme wrapper">
            <div className="form">
                <input type="text" placeholder="Top text"/>
                <input type="text" placeholder="Bottom text"/>
                <button onClick={get_new_image}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} />
        </main>
    )
}