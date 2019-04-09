import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
    <section>
      <div className="container">
      <div className="row">
      <h1>Project Home</h1>
      </div>
      <div className="row">
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button className="btn btn-lg btn-primary btn-block" variant="raised">
            My List
        </button>
      </Link>
      </div>
    </div>
    </section>
    </div>
    );
  }
}
export default Home;
