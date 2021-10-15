import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
export default class News extends Component {
    
    constructor() {
        
        super();
        this.state={
          articles:[],
            loading:false
        };
    }
    async componentDidMount(){
      console.log("cdm")
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4e963e22429e4a518c56acb401e9f7f7"
      let data= await fetch(url);
      let parshdata=await(data.json());
      this.setState({articles:parshdata.articles});
  }
    render() {
        
        return (
            <div className="container my-3">
                <h1>NewsMonkey Top Headline</h1>
                <div className="row">
               {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element?element.title.slice(0,30):""} description={element?element.description.slice(0,123):""} Imageurl={element.urlToImage?element.urlToImage:"https://www.xda-developers.com/files/2021/06/changedefault2.jpg"} newsUrl={element.url}/>  
                   
                   </div>
               })}
                <div className="container d-flex justify-content-between">
                  <button type="button" className="btn btn-dark">Preveious</button>
                  <button type="button" className="btn btn-dark">Next</button>
                </div>
                
                
                
            </div>   
            </div> 
        )
    }
}

