import React, { Component } from 'react'
import Loading from './loading';
import NewsItem from './NewsItem'

export default class News extends Component {
   
    constructor() {
        super();
        this.state = { articles: [], page: 1, loading: false}
    }
    async componentDidMount(){
        
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=658e058b30114de99067859c7b29688f&page=1&pageSize=${this.props.pageSize}`;
        console.log("this compo", apiUrl)
        this.setState({loading: true})
        let data = await fetch(apiUrl);
        let parsedata = await data.json();
        
        console.log("parsedata",parsedata)
        this.setState({
            articles: parsedata.articles, 
            TotalResults: parsedata.totalResults,
            loading: false
        })
    

    }
    handlePre= async()=>{
        
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=658e058b30114de99067859c7b29688f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        console.log("this compo", apiUrl)
        this.setState({loading: true})
        console.log(apiUrl);
        let data = await fetch(apiUrl);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page-1,
            articles: parsedata.articles,
            loading: false
           
        })
        

    }
    handleNext = async () => {
      
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=658e058b30114de99067859c7b29688f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        console.log("this compo", apiUrl)
        this.setState({loading: true})
        let data = await fetch(apiUrl);
        console.log(apiUrl);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles,
            loading: false

        })

    }
    render() {
        

        return (
            <div className='container my-3'>
                <h1>Top News Headlines</h1>
                {this.state.loading && <Loading/>}
                <div className='row my-4'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}


                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePre}>Previous</button>
                    <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize)} onClick={this.handleNext}>Next</button>
                </div>
            </div>

        )
    }
} 