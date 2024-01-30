import React from "react";
import '../styles/HomePage.css';

const HomePage= (props)=> {

return (
    
        <main className="holder">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://fakeimg.pl/1200x300/c2a7a7/909090" className="d-block w-100" alt="portfolio 1" />
              </div>
              <div className="carousel-item">
                <img src="https://fakeimg.pl/1200x300/c2a7a7/909090" className="d-block w-100" alt="portfolio 2" />
              </div>
              <div className="carousel-item">
                <img src="https://fakeimg.pl/1200x300/c2a7a7/909090" className="d-block w-100" alt="portfolio 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    
          <div className="Servicios">
            <h2>Servicios</h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quasi tenetur dolorem dolorum consectetur hic cum dignissimos maxime ut! Minus perferendis libero, voluptatum minima illum placeat quod! Similique, officiis minus.</p>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae in omnis provident mollitia, impedit libero velit quasi ad praesentium alias nesciunt dolore illo debitis. Voluptatem itaque facere quae tempore ab.</p>
          </div>
    
          <div className="testimoniales">
            <div className="perfil">
              <img src="https://fakeimg.pl/50x50" alt="Juan Perez" />
              <h4>Juan Perez</h4>
              <p>Dueño de Ferretería Coquito</p>
            </div>
            <div className="info-testimonial">
              <i className="fa-solid fa-quote-right"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, deserunt nihil vel accusamus asperiores nemo iusto illo quia accusantium numquam enim nulla tempora laborum ab.</p>
            </div>
          </div>
        </main>
      
);
}

export default HomePage;