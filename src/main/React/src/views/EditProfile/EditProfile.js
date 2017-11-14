import React, { Component } from 'react';
import {apiRequest} from "../../index";
import {Router} from 'react-router-dom'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                function: '',
                society: '',
                image:''
                    };
        console.log(props)
        apiRequest.get("/users/info").then((response) => {
            console.log(response.data)
            this.setState(response.data);

            console.log(this.state);

        })


    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    editUserProfile = async (e) => {
        e.preventDefault();
        apiRequest.put('/users/editProfile', this.state)
            .then((response) => {
            console.log(response.data)
                setTimeout(()=>{
                alert("user bien modifier")
                     this.props.history.push(`/`)
                },100);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })

    };


  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <h1>Edition</h1>
                  <p className="text-muted">Edit your account</p>
                    <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Firstname"
                           name="firstName"
                           onChange={e => this.onChange(e)}
                           value={this.state.firstName}/>
                  </div>
                    <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Lastname"
                           name="lastName"
                           onChange={e => this.onChange(e)}
                           value={this.state.lastName}/>
                  </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Phone"
                               name="phone"
                               onChange={e => this.onChange(e)}
                               value={this.state.phone}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Adress"
                               name="address"
                               onChange={e => this.onChange(e)}
                               value={this.state.address}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="City"
                               name="city"
                               onChange={e => this.onChange(e)}
                               value={this.state.city}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Country"
                               name="country"
                               onChange={e => this.onChange(e)}
                               value={this.state.country}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Function"
                               name="function"
                               onChange={e => this.onChange(e)}
                               value={this.state.function}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Society"
                               name="society"
                               onChange={e => this.onChange(e)}
                               value={this.state.society}/>
                    </div>
                  <button type="button" className="btn btn-block btn-success"
                          onClick={this.editUserProfile}>Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

         );

        }
      }

export default EditProfile;
