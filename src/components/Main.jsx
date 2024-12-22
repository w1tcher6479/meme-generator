import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        altText: "Mordor"
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomMeme = allMemes[Math.floor(Math.random()*allMemes.length)];
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme.url,
            altText: randomMeme.name
        }))
    }

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="main">
            <div className="form">
                <label>Top Text
                    <input
                        className="form__input"
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button className="form__button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme__image" src={meme.imageUrl} alt={meme.altText} />
                <span className="meme__span meme__span_top">{meme.topText}</span>
                <span className="meme__span meme__span_bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}