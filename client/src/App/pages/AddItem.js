import React, { Component } from 'react';


class AddItem extends Component {
    render() {
      return (
      <section>
      <div className="container">

      <form className="form-signin" style={{
        "width": "100%",
        "maxWidth": "420px",
        "padding": "15px",
        "margin": "auto"
      }}>
  <div className="text-center mb-4">
    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
    <h1 className="h3 mb-3 font-weight-normal">ADD NEW ITEM</h1>
    </div>

  <div className="form-label-group">
    <input type="text" id="input" className="form-control" placeholder="Email address" required="" autoFocus=""/>
    <label htmlFor="inputEmail">Email address</label>
  </div>

  <div className="form-label-group">
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
    <label htmlFor="inputEmail">Email address</label>
  </div>

  <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
  <p className="mt-5 mb-3 text-muted text-center">© 2017-2019</p>
</form>
      </div>
      </section>
      );
    }
  }
  export default AddItem;