import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.subTitle}</h6>
                    <p className="card-text">{this.props.text}</p>
                    <a href={this.props.link1} className="card-link">{this.props.linkText1}</a>
                    <a href={this.props.link2} className="card-link">{this.props.linkText2}</a>
                </div>
            </div>
        );
    }
}

export default Card;        