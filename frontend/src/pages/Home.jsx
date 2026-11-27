
//import '../css/Home.css'




function Home(){

    const containerStyles = {
        fontFamily: "Arial, sans-serif",
        padding: "25px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh"
    };

    const headingStyles = {
        color: "white",
        fontSize: "40px",
        textAlign: "center",
        backgroundColor: "#212529",
        padding: "35px",
        borderRadius: "10px",
        marginBottom: "15px"
    };

    const introStyles = {
        textAlign: "center",
        color: "#555",
        fontSize: "18px",
        marginBottom: "30px"
    };

    const imageStyles = {
        width: "300px",
        height: "220px",
        margin: "10px",
        borderRadius: "10px",
        objectFit: "cover",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
    };

    const galleryStyles = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px"
    };

    const sectionStyles = {
        textAlign: "center",
        padding: "25px",
        marginTop: "25px"
    };

    const paragraphStyles = {
        fontSize: "16px",
        lineHeight: "1.8",
        color: "#555",
        maxWidth: "850px",
        margin: "15px auto"
    };

    const buttonStyles = {
        backgroundColor: "#0d6efd",
        color: "white",
        padding: "14px 35px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "15px"
    };

    return(

        <div style={containerStyles}>

            <h1 style={headingStyles}>
                Welcome to UrbanCart
            </h1>

            <p style={introStyles}>
                Your Favourite Shopping Destination
            </p>

            <div style={galleryStyles}>

                <img src="images/image.png" alt="Shopping collection" style={imageStyles} />

                <img src="images/photo-1.avif" alt="Fashion collection" style={imageStyles} />

                <img src="images/photo-2.avif" alt="Lifestyle collection" style={imageStyles} />

            </div>

            <div style={sectionStyles}>

                <h2 style={{color: "#212529", fontSize: "28px"}}>
                    Shop Smart. Live Better.
                </h2>

                <p style={paragraphStyles}>
                    Welcome to UrbanCart, where shopping meets convenience.
                    Discover a wide range of quality products carefully
                    selected to make your everyday life easier and more
                    enjoyable. From fashion and electronics to home
                    essentials, we bring your favourite products closer
                    to you at affordable prices.
                </p>

                <p style={paragraphStyles}>
                    Whether you are shopping for yourself, your family,
                    or your home, UrbanCart makes it easy to find what
                    you need. Enjoy a simple shopping experience,
                    great product choices and excellent value for money.
                </p>

                <button style={buttonStyles}>
                    Shop Now
                </button>

            </div>

        </div>

    );
}

export default Home;
