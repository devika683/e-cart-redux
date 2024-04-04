import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fa-solid fa-truck fa-bounce" className="me-3" />
                E-Cart
              </h6>
              <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ab mollitia eos esse ratione a aperiam similique rerum at nobis saepe neque id dolore pariatur adipisci omnis minus, sed veritatis.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
           <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
              </p>
              <p>
           <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                
              </p>
              <p>
           <Link to={'/whishlist'} style={{textDecoration:'none',color:'white'}}>Whishlist</Link>
                
              </p>
          
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
           <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
               
              </p>
              <p>
           <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>  React Bootstrap</Link>
               
                
               
              </p>
              <p>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>  React Bootswatch</Link>
               
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       copyright © 2023 E-Cart.Built with React.
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer