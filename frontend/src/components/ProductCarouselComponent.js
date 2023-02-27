import { Carousel } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';



const ProductCarouselComponent = () => {
  const cursorP={
    cursor: "pointer"
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}

          src="/images/carousel/sistem_franare.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de franare</h3>

          </LinkContainer>
    
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/filtre.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de filtre</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/motor.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cele mai bune motoare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/bujii.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de bujii</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/suspensie.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de suspensie</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/amortizoare.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de amortizoare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/faruri.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de faruri</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/parbriz.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de parbriz</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/electrice.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cele mai bune sisteme electrice</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/esapament.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de esapement</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/motor.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cele mai bune motoare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/ambreiaj.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de ambreiaj</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/curele.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de curele</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
        crossorigin="anonymous"
        className="d-block w-100"

        style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/confort.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de confort</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/alimentare.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de alimentare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/planetara.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bune planetare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/directie.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de directie</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption> */}
      {/* </Carousel.Item> */}
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/conditionat.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de aer conditionat</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/senzori.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de senzori</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/incalzire.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de incalzire</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/uleiuri.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cele mai bune uleiuri</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/garnituri.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cele mai bune garnituri</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/cutie_viteze.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cea mai buna cutie de viteze</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/racord.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de racorduri</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/set.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de seturi</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/rulmenti.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de rulmenti</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"

          style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/arbori.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de arbori</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
         crossorigin="anonymous"
         className="d-block w-100"

         style={{heigh:"300px", objectFit: "cover"}}
          src="/images/carousel/tractare.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
          <h3>Cel mai bun sistem de tractare</h3>

          </LinkContainer>
          <p>Descriere</p>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
  );
};

export default ProductCarouselComponent;

