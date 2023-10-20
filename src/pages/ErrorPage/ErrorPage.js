import CarouselFullPage from "components/layout/CarouselFullPage/CarouselFullPage"
import Footer from "components/layout/Footer/Footer";

import "components/layout/Common/Root/Root.css";

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