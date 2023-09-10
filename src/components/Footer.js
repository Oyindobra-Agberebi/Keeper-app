function Footer () {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className = "Footer">
            <p>Copyright © {year}</p>
        </footer>
    )
        
}

export default Footer;