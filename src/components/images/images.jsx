import React from 'react';
import '../images/image.css';
import { Image, Col, Row } from 'react-bootstrap';

const Images = ({data}) => {
    return(
        <div className="images">
            <Row>
                
            {
                
                data.map(image => {
                    return <Col xs={12} md={6} lg={4}>
                    <Image src={image.urls.small}  alt = {image.title} className="image-item" sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw" />
                    </Col>    
                })
                 
            }
                
            </Row>

        </div>
    )
}

export default Images;