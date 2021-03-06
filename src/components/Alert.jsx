import React, { Component } from 'react';

class Alert extends Component {
    render() {
        let type = `alert alert-${this.props.theme}`
        return (
        <div className={type} role="alert">
            {this.props.message} <a href={this.props.link} className="alert-link">{this.props.linkText}</a>
        </div>
        );
    }
}

export default Alert;