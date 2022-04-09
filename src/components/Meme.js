import React from 'react';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            setAllMemeImages(data.data.memes);
        })
    }, []);

    function get_new_image() {
        const randomNum = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages[randomNum].url,
        }))
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <main className="meme wrapper">
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={get_new_image}>Get a new meme image</button>
            </div>
            <div className="meme-image">
                <img src={meme.randomImage} className="image" alt="meme"/>
                <h2 className="top">{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}