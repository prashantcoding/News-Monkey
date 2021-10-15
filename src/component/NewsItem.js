import React, { Component } from 'react'

export default class Newsitem extends Component {
   
    render() {
        let {title,description,Imageurl,newsUrl}=this.props;
        return (
            
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={Imageurl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
            </div>
        )
    }
}
