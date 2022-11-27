import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class NewsItem extends Component{
    render(){
        let {title, description, imageUrl, newsUrl}= this.props
        return(
            <div>
               <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl? imageUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/176CD/production/_127794959_tsinhuaprotest.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        )
    }
}