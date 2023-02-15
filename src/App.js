import Users from "./Component/Card";
import "./App.test";

import React, { Component } from "react";

class App extends Component {
  constructor(prpos) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // document.getElementById("main").style.display='flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <nav>
          <div className="box">
            <div className="row">
              <div className="column1">
                <h2>Red Bull</h2>
              </div>
              <div className="column2">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}
export default App;
