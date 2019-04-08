import React, { Component } from 'react';
import axios from  'axios'

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  handleDelete=e=> {
          //const selectedIndex = e.target.options.selectedIndex;
          console.log(e.target.getAttribute('id'))
          axios.delete('/users/'+e.target.getAttribute('id'), this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error=>{
            console.log(error)
          });
          this.props.history.push("/list");
  }
  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  handleEdit = e =>{
    this.props.history.push("/item/edit/" + e.target.getAttribute('id'));
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/users')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
      <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
            {list.map((item) => {
              return(
              <div className="col-md-4" key={item.id}>
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">{item.name}</p><br/><p className="card-text">{item.email}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleDelete} id={item.id}>Delete</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleEdit} id={item.id}>Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
