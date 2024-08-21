import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,publishedAt,source} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem", height:"28rem"}}>
                    <span className="badge rounded-pill bg-info text-dark" style={{position: 'absolute',zindex : '1',left : '60%'}}>{source}</span>
                    <img src={imageUrl } className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p><small>By: {author?author:"NewsMonkey"}</small></p>
                            <p><small>On: {new Date(publishedAt).toGMTString()}</small></p>
                            <a href={newsUrl}  target = "_blank" rel="noreferrer" className="btn btn-dark" >Read More</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem