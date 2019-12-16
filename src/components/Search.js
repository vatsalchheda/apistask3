import React, { Component, useEffect } from "react";

var UserInput;
var obj;
var data;

const Searchhandler = e => {
  UserInput = e.target.value;
  console.log(UserInput);
};

class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: "John123",
    name: "John Doe",
    Followers: "25",
    Following: "50",
    reps: "15",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
  };

  setData = data => {
    this.setState({
      username: data.Login,
      name: data.name,
      Followers: data.followers,
      Following: data.following,
      reps: data.public_repos,
      avatar: data.avatar_url
    });
  };

  showData = () => {
    console.log("ShowData Called" + UserInput);
    this.fetchUsers(UserInput);
  };

  fetchUsers = async user => {
    console.log(user);
    const url =
      "https://api.github.com/users/" +
      user +
      "?client_id=Iv1.ce69d2971809f815&client_secret=a6264ef0925ebe6830f6b4b74226838a7c4d219b";
    console.log(url);
    const api_call = await fetch(url);
    data = await api_call.json();
    console.log(data);
    this.setData(data);
    return { data };
  };

  render() {
    return (
      <div className="App">
        <div className="border-bottom">
          <nav className="navbar navbar-dark bg-black row">
            <div className="container">
              <a className="navbar-brand col-sm-1">Github</a>
              <input
                className="form-control mr-sm-2 col-sm-6 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={Searchhandler}
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={this.showData}
              >
                Search
              </button>
            </div>
          </nav>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="Profilecard">
          <h1>Search Page</h1>
          <h2>{this.state.name}</h2>
          <img className="imgsize" src={this.state.avatar}></img>
          <p>Username: {this.state.username}</p>
          <p>{this.state.Followers} Followers</p>
          <p>{this.state.Following} Following</p>
          <p>{this.state.reps} Repos</p>
        </div>
      </div>
    );
  }
}

export default Search;
