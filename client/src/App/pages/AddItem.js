import React, { Component } from 'react';
import axios from  'axios'


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      email:'',
      cityList:[]
    }
    axios.get('/cities')
    .then(response => response)
    .then(data => this.setState({cityList:data.data}))
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('/users', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }

    render() {
      const {name,email,cityList} =this.state
      //console.log(cityList)
      return (
      <section>
      <div className="container">

      <form onSubmit={this.submitHandler} className="form-signin" style={{
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
    <input type="text" placeholder="Title" className="form-control" name="name"  value={name} onChange={this.changeHandler} />
  </div>
  <br/>
  <div className="form-label-group">
  <select className="form-control"  name="email" value={email}  onChange={this.changeHandler} required>
                          <option value="">-- Select City --</option>
                          {cityList.map(city =>
                              <option key={city.idcitie} value={city.nomcitie}>{city.nomcitie}</option>
                          )}
                      </select>
  </div>
  <br/>
  <div className="form-label-group">
    <input type="file" />
  </div>
  <br/>
  <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
</form>
      </div>
      </section>
      );
    }
  }
  export default AddItem;
