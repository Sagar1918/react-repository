import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor Called");

    this.state = {
      user_info: {},
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/sagar1918");
    const json = await res.json();
    this.setState({
      user_info: json,
    });
    console.log("Child Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Did Update Called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    //Destructure the data in render
    const { login } = this.state.user_info;
    console.log("Child Component Rendered");

    return (
      <div className="user-info">
        <h1>Name: {login}</h1>
      </div>
    );
  }
}

export default UserClass;

/****
 * ------- Mounting Phase ------
 *
 * First, Constructor Called & loaded with Initial State
 * Render the body(HTML)
 * In componentDidMount
 *    - API call takes place
 *    - Update the state variable with --> this.setState
 *
 * ------- Update Phase ----
 *
 * Render the body again(With API data)
 * ComponentDidUpdate
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
