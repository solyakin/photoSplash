import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import SearchResult from '../searchedresult/searchResults';
import '../Header/header.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            search : '',
            img : [],
            isOpen : '',
            show : 'none',
            text : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(e){
        this.setState({search : e.target.value})
    }

    keyPress(e){
        if(e.keyCode === 13){
            // console.log('value', e.target.value)
            e.preventDefault();
            fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${e.target.value}&client_id=0y2vpY-XPLltKpBriuI7eQwF8kPoohmXZH9-ybCuv5Y`)
            .then(res => res.json())
            .then( images => {
                this.setState({img : images}, () => console.log(this.state.data))
            })
        }
    }

    render(){
        const { img, show, isOpen, text } = this.state;
        console.log(img);
        const handleShowDialog = (event) => {
            console.log(event.target.src)
            this.setState({ isOpen: event.target.src}, this.setState({show : 'block'}, this.setState({ text : event.target.closest('div').innerText})));
          };

        const closeModal = (event) => {
            this.setState({show : 'none'})
            event.preventDefault()
        }
        return(
            <div className="header">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand className="logo" href="#home">Photo-splash <span><FontAwesomeIcon icon={faCameraRetro} /></span></Navbar.Brand>
                    <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search free photos" className="mr-sm-2" value={this.state.value} onChange={this.handleChange} onKeyDown={this.keyPress}/>
                    </Form>
                    <Nav className="nav-list">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Brands</Nav.Link>
                    <Nav.Link href="#features">...</Nav.Link>
                    <Button variant="outline-primary" >Submit a photo</Button>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Button variant="outline-success" >Join for free</Button>
                    </Nav>
                </Navbar>

                <SearchResult img={img} handleShowDialog={handleShowDialog} closeModal = {closeModal} show={show} isOpen={isOpen} text={text}/>

            </div>
        )
    }
}

export default Header;