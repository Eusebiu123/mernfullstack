import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import {Row,Container} from "react-bootstrap";

const HomePage = () => {

    const categories= [
        "Disc frana",
        "Set placute",
        "Furtun frana",
        "Etrier frana",
        "Set saboti frana",
        "Cablu frana de parcare",
        "Senzor ABS",
        "Lichid de frana",
        "Inel senzor",
        "Piston",
        "Servofrana",
        "Conducta frana",
        "Frana tambur",
    ];
    return (
        <>
        <ProductCarouselComponent/>
        <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
        {
            categories.map( (category,idx) =>  <CategoryCardComponent key={idx} category={category} idx={idx}/>)
        }
        </Row>
        </Container>
        </>
    );
}
export default HomePage;