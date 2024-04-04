import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../slice/cartSlice'
import { removeFromWhishlist } from '../slice/whishlist'

function Whishlist() {
  const whishlistArray=useSelector((state)=>state.whishlistReducer)
 const dispatch = useDispatch()
 const handleWhishlistCart = (product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWhishlist(product.id))
 }
  return (
    <Row  style={{marginTop:'100px'}}>
    {
      whishlistArray.length>0?whishlistArray.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded m-3' style={{ width: '18rem',height: '30rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
       <p>{product?.description.slice(0,50)}...</p>
       <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex flex-column justify-content-between'>
        <Button onClick={()=>dispatch(removeFromWhishlist(product.id))} className='btn btn-light'><i class="fa-solid fa-trash text-danger"></i> </Button>
       <Button onClick={()=>handleWhishlistCart(product)} className='btn btn-light'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
      )):<div className='w-100 d-flex justify-content-center align-items-center'>
<img src="https://www.gospeedy.co.in/images/empty.gif" alt = ""/>
<h3 className='text-danger text-center'>Whishlist is empty</h3>
<Link style={{textDecoration:'none'}} className='btn btn-warning rounded' to={'/'}>Back to Home
</Link>
      </div>
    }
    </Row>
  )
}

export default Whishlist