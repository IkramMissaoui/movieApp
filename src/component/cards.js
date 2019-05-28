import React, { Component } from 'react';
import './css/cards.css'
class Card extends Component {
 
        render() {
       
        return (
            <div className="movies">
                {this.props.tabMovies.filter((el)=>{return (el.review<=this.props.searchStar && el.name.toLowerCase().includes(this.props.searchValue.toLowerCase()))}).map((el) => {
                    return (
                        <div className="card">
                            <img className="card-img" src={el.img} />
                            <p className="card-name">{el.name}</p>
                            <p className="card-review">{''.padEnd(el.review,'☆')}<span className='starGray'>{''.padEnd(5-el.review,'☆')}</span></p>
                           
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Card;