import "../styles/Header.scss";

const Header = (props) => {

    const { title, content } = props;

    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                <p>{content}</p>
            </header>
        </>
    )
}

export default Header;