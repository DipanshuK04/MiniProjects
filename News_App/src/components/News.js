import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 5,
        category : 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      };

    constructor(props) {
        super(props);
        this.state = {
            articles: [ ],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    updateNews = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b52457f45e17485699a8ba2690b962cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let prda = await data.json();
        document.title = this.props.category + 'NewsMonkey'
        this.setState({ 
            articles: prda.articles,
            loading:false
        });
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b52457f45e17485699a8ba2690b962cc&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let prda = await data.json();
        this.setState({ 
            articles: prda.articles ,
            totalResults:prda.totalResults,
            loading:false
        });
    }

    handlePrev =async () =>{
        this.setState({page : this.state.page-1})
            this.updateNews();
    }

    handleNext = async () =>{
        if(! this.state.page+1 > Math.ceil(`this.state.totalResults/${this.props.pageSize}`)){
        }else{
            this.setState({page : this.state.page+1})
            this.updateNews();
        }
        
    }
    render() {
        return (
            <div className='container'>

                <h2 className='text-center my-3'>Top {this.props.category} Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row my-3">
                    {this.state.articles && this.state.articles.map((element) => {
                        return <div className="col-md-3 " key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 60) + '...' : ""} description={element.description ? element.description.slice(0, 80) + '...' : ""} 
                            imageUrl={element.urlToImage ? element.urlToImage : 'maxresdefault.jpg'} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source = {element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled = {this.state.page<=1?true:false} rel="noreferrer" type="button" onClick={this.handlePrev} className="btn btn-info"> &larr;Previous</button>
                    <button disabled = {this.state.page === Math.ceil(this.state.totalResults/this.props.pageSize)?true:false} rel="noreferrer" type="button" onClick={this.handleNext} className="btn btn-info" id='NextBtn'>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
