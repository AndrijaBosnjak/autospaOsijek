import CarouselFullPage from "../components/layout/CarouselFullPage"
import Footer from "../components/layout/Footer";

import "./Root.css";

function ErrorPage () {
    return (
        <>
    <CarouselFullPage />
    <main className="main">
        <h1>Oops!Dogodila se greška!</h1>
        <h1>Stranica nije pronađena!</h1>
    </main>
    <Footer></Footer>
    </>
)
}

export default ErrorPage;