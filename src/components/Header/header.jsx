import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
// import '../Header/header.css';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            search : '',
            img : []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e){
        this.setState({search : e.target.value}, 
            ()=>{
                // let {query} = this.state.search;
                // console.log(query)
            fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.state.search}&client_id=0y2vpY-XPLltKpBriuI7eQwF8kPoohmXZH9-ybCuv5Y`)
            .then(res => res.json())
            .then(list => {
                this.setState({img : list}, () => console.log(this.state.img))
            })
        })
    }

    handleSubmit(search){

    }
    render(){
        return(
            <div className="header">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Unsplash</Navbar.Brand>
                    <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search free high-resolution photos" className="mr-sm-2" value={this.state.value} onChange={this.handleClick}/>
                    </Form>
                    <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Brands</Nav.Link>
                    <Nav.Link href="#features">...</Nav.Link>
                    <Button variant="outline-primary" >Submit a photo</Button>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;