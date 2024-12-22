import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="logo"
                src={trollFace} alt="Trollface"
            />
            <h1 className="logo-name">Meme Generator</h1>
        </header>
    )
}