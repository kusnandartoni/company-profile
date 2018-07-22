import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{textAlign: 'center'}}>
                <h6>santren koding @ {this.props.tahun}</h6>
            </div>
        );
    }
}

export default Footer;