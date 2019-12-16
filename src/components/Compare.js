import React, { Component, useEffect } from "react";

var UserInput1, UserInput2;
var obj;
var data1, data2;

const Searchhandler1 = e => {
  UserInput1 = e.target.value;
  console.log(UserInput1);
};

const Searchhandler2 = e => {
  UserInput2 = e.target.value;
  console.log(UserInput2);
};

class Compare extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username1: "John123",
    name1: "John Doe",
    Followers1: "25",
    Following1: "50",
    reps1: "15",
    avatar1:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    username2: "John123",
    name2: "John Doe",
    Followers2: "25",
    Following2: "50",
    reps2: "15",
    avatar2:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
  };

  setData1 = data1 => {
    this.setState({
      username1: data1.Login,
      name1: data1.name,
      Followers1: data1.followers,
      Following1: data1.following,
      reps1: data1.public_repos,
      avatar1: data1.avatar_url
    });
  };
  setData2 = data2 => {
    this.setState({
      username2: data2.Login,
      name2: data2.name,
      Followers2: data2.followers,
      Following2: data2.following,
      reps12: data2.public_repos,
      avatar2: data2.avatar_url
    });
  };

  showData1 = () => {
    console.log("ShowData Called" + UserInput1);
    this.fetchUsers1(UserInput1);
  };

  showData2 = () => {
    console.log("ShowData Called" + UserInput2);
    this.fetchUsers2(UserInput2);
  };
  fetchUsers1 = async user => {
    console.log(user);
    const url =
      "https://api.github.com/users/" +
      user +
      "?client_id=Iv1.ce69d2971809f815&client_secret=a6264ef0925ebe6830f6b4b74226838a7c4d219b";
    console.log(url);
    const api_call = await fetch(url);
    data1 = await api_call.json();
    console.log(data1);
    this.setdata1(data1);
    return { data1 };
  };
  fetchUsers2 = async user => {
    console.log(user);
    const url =
      "https://api.github.com/users/" +
      user +
      "?client_id=Iv1.ce69d2971809f815&client_secret=a6264ef0925ebe6830f6b4b74226838a7c4d219b";
    console.log(url);
    const api_call = await fetch(url);
    data2 = await api_call.json();
    console.log(data2);
    this.setdata2(data2);
    return { data2 };
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
                onChange={Searchhandler1}
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={this.showData1}
              >
                Search
              </button>
              <input
                className="form-control mr-sm-2 col-sm-6 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={Searchhandler2}
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={this.showData2}
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
          <h1>Compare Page</h1>
          <h2>{this.state.name1}</h2>
          <img className="imgsize" src={this.state.avatar1}></img>
          <p>Username: {this.state.username1}</p>
          <p>{this.state.Followers1} Followers</p>
          <p>{this.state.Following1} Following</p>
          <p>{this.state.reps1} Repos</p>
        </div>
        <div className="Profilecard">
          <h1>Compare Page</h1>
          <h2>{this.state.name2}</h2>
          <img className="imgsize" src={this.state.avatar2}></img>
          <p>Username: {this.state.username2}</p>
          <p>{this.state.Followers2} Followers</p>
          <p>{this.state.Following2} Following</p>
          <p>{this.state.reps2} Repos</p>
        </div>
      </div>
    );
  }
}

export default Compare;
