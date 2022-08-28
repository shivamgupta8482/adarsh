import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Card1 from './Card1';
import Card2 from './Card2';

function UncontrolledExample12() {
  return (
    <Carousel variant='dark'  visibility="hidden" style={{width:"80%",margin:"auto"}}>
   
    <Carousel.Item >
        {/* <img
          className="d-block w-100"
          src="https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <Card />
      </Carousel.Item>
   
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        <Card1 />
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        <Card2 />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample12;