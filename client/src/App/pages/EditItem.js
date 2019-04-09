import React, { Component } from 'react';
import axios from  'axios'
import {storage} from '../../firebase';


class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      city:'',
      imgurl:'',
      progress: 0,
      image: null,
      cityList:[]
    }
    var itemid = this.props.match.params["itemid"];
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
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




  //image Handlers

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = (e) => {
      this.state.imgurl='';
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      },
      (error) => {
           // error function ....
        console.log(error);
      },
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(imgurl => {
            console.log(imgurl);
            this.setState({imgurl});
        })
    });


  }


  //end image Handlers





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
      const style = {
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      };
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
  <div className="form-label-group">
  <div style={style}>
  <progress className="progress-bar" value={this.state.progress} max="100"/>
  <br/>
    <input type="file" onChange={this.handleChange}/><br/>
    <button className="btn btn-lg btn-primary btn-block" onClick={this.handleUpload} type="button">UPLOAD IMAGE</button>
    <br/>
    <img src={this.state.imgurl || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
  </div>
    Image URL:<input type="text" className="form-control" name="imgurl"  value={imgurl} onChange={this.changeHandler} disabled/>
  </div>
  <br/>
  <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={!this.state.imgurl}>Edit</button>
</form>
      </div>
      </section>
      );
    }
  }
  export default AddItem;
