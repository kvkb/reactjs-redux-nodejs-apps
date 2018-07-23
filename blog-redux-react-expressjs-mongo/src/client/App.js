import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Header from './components/shared/header';
import CreatePost from './containers/posts/create';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (      
      <Router>
        <main>
          <header>
              <h1>Programming Monks</h1>
              <div>
                  <Link to="/">All Posts</Link>
                  <Link to="/createPost">Create Post</Link>                
                  <Link to="/">Create Blog</Link>                        
              </div>
          </header>
          <Route path="/createPost" component={CreatePost} />
        </main>      
      </Router>
    );
  }
}
