import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    constructor() {
        super();
        this.state = { articles: [] }
    }
    async componentDidMount(){
        let apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=658e058b30114de99067859c7b29688f";
        let data = await fetch(apiUrl);
        let parsedata = await data.json();
        this.setState({articles: parsedata.articles })
    }
    render() {
        

        return (
            <div className='container my-3'>
                <h1>Top News Headlines</h1>
                <div className='row my-4'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}


                </div>
            </div>

        )
    }
} 