import React from 'react';
import { Component } from 'react';
import Images from '../images/images';

class Body extends Component{
    constructor(){
        super()
        this.state = {
            data : [],
        }
    }
    componentDidMount(){
        fetch('https://api.unsplash.com/photos/?client_id=0y2vpY-XPLltKpBriuI7eQwF8kPoohmXZH9-ybCuv5Y')
        .then(res => res.json())
        .then(list => {
            this.setState({data : list}, () => console.log(this.state.data))
        })
        ;
    }
    render(){
        const { data } = this.state;
        return(
            <div className="body">
                <Images data = {data} />
            </div>
        )
    }
};

export default Body;