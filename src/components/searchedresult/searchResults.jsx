import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../searchedresult/searchedResult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const SearchResult = ({img, handleShowDialog, closeModal, show, isOpen, text}) =>{
    
    let data = img.results   
    return(
        <div className="searchResult">
            {
                data ?
                    data.map(image => {
                        console.log(image)
                        return <div className="container">
                        <Image key={image.id} src={image.urls.regular}  alt = {image.title} className="image-item" onClick={handleShowDialog}/>
                            <div className="image-details">
                                <div className="image-name">
                                    <img src={image.user.profile_image.small} alt="profile-image" className="profile_image"/>
                                    <p>{image.user.name}</p>
                                </div>
                                
                                <button>
                                <a href={image.links.download + "?force=true"}><FontAwesomeIcon icon={faArrowDown} /></a>
                                </button>
                            </div>
                        </div>
                     }) : <h1></h1>
                     
            }

            <section className="image-modal" style = {{display : show}}>
                    <div className="close"><span onClick={closeModal}>x</span></div>
                    <div className="image-modal-container">
                        <div className="top-section">
                            <p className="image-modal-title">{text}</p>
                            <div className="icons">
                                <button><FontAwesomeIcon icon={faHeart} /></button>
                                <button><FontAwesomeIcon icon={faPlus} /></button>
                                <button className="download-btn">Download</button>
                                <button><a href={"image.links.download" + "?force=true"}><FontAwesomeIcon icon={faArrowDown} /></a></button>
                            </div>
                        </div>
                        <img src= {isOpen} alt={isOpen}/>
                    </div>
                </section>
             
        </div>
    )
    
}

export default SearchResult;