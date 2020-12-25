import React from 'react';
import { Component } from 'react';
import { Image} from 'react-bootstrap';
import '../body/body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

class Body extends Component{
    constructor(){
        super()
        this.state = {
            data : [],
            isOpen : '',
            show : 'none',
            text : ''
        }
       
    }
    componentDidMount(){
        fetch('https://api.unsplash.com/photos/?page=1&per_page=20&client_id=0y2vpY-XPLltKpBriuI7eQwF8kPoohmXZH9-ybCuv5Y')
        .then(res => res.json())
        .then(list => {
            this.setState({data : list}, ()=> console.log(this.state.data))
        })
    }
    
    render(){
        const { data, isOpen, show, text } = this.state;

        const handleShowDialog = (event) => {
            console.log(event.target.closest('.container').getAttribute('img'))
            this.setState({ isOpen: event.target.src}, this.setState({show : 'block'}, this.setState({ text : event.target.closest('div').innerText})));
          };

        const closeModal = (event) => {
            this.setState({show : 'none'})
            event.preventDefault()
        };

        const imageCollection = data.map(image => {
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
                  
            }) 
        return(
            <div className="body">
                { imageCollection }   
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
                    
                    {console.log(isOpen)}
                </section>
                
            </div>
        )
    }
};

export default Body;