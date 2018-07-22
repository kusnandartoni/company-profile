import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{this.props.subTitle}</h6>
                    <p class="card-text">{this.props.text}</p>
                    <a href={this.props.link1} class="card-link">{this.props.linkText1}</a>
                    <a href={this.props.link2} class="card-link">{this.props.linkText2}</a>
                </div>
            </div>
        );
    }
}

export default Card;        