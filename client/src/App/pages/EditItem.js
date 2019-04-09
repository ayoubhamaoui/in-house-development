import React, { Component } from 'react';
import axios from  'axios'


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      city:'',
      imgurl:'',
      cityList:[]
    }
    var itemid = this.props.match.params["itemid"];
    //console.log(itemid)
    axios.get('/cities')
    .then(response => response)
    .then(data => this.setState({cityList:data.data}));

    axios.get('/items/'+itemid)
    .then(res => res)
    .then(data=>{
      console.log(data.data[0])
      this.setState({title:data.data[0].title,city:data.data[0].city,imgurl:data.data[0].imgurl})
    })
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e =>{
    e.preventDefault()
    //console.log(this.props.match.params["itemid"])
    var itemid = this.props.match.params["itemid"];
    axios.put('/items/'+itemid, this.state)
    .then(response => {
      console.log(response)
      this.props.history.push("/list");
    })
    .catch(error=>{
      console.log(error)
    })
  }

    render() {
      const {title,city,imgurl,cityList} =this.state
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
    <h1 className="h3 mb-3 font-weight-normal">EDIT ITEM <strong>{title}</strong></h1>
    </div>

  <div className="form-label-group">
    <input type="text" placeholder="Title" className="form-control" name="title"  value={title} onChange={this.changeHandler} />
  </div>
  <br/>
  <div className="form-label-group">
  <select className="form-control"  name="city" value={city} data-val="true" onChange={this.changeHandler} required>
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
  <div className="form-label-group">
    <input type="text" className="form-control" name="imgurl"  value={imgurl} onChange={this.changeHandler} disabled/>
  </div>
  <br/>
  <button className="btn btn-lg btn-primary btn-block" type="submit">Edit</button>
</form>
      </div>
      </section>
      );
    }
  }
  export default AddItem;
