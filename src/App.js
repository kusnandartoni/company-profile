import React, { Component } from 'react';
// import Alert from './components/Alert';
// import Card from './components/Card';;
import Header from './components/Header';
import { Jumbotron, Button } from 'reactstrap';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron>
          <h1 className="display-3">Halo,      Dunia!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        {/* <Alert
          theme="danger"
          message="pindah ke halaman lain -> "
          link="http://santrenkoding.org"
          linkText="Santren Koding"
        />     
        <Footer tahun="2018" />
        {/* <Card
          title="judul"
          subTitle="subtitle"
          text="ini isi textnya"
          link1="Something"
          link2="Google"
          linkText1="https://something.com"
          linkText2="https://google.com"
        />  */}
      </div>
    );
  }
}

export default App;