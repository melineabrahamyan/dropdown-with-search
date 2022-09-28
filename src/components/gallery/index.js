import { Component } from "react";
import { API_URL, API_KEY } from "../../constants/api";
import PhotoCard from "./../photoCard";

class Gallery extends Component {
  constructor() {
    super();
    this.users = [];
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.users = result.photos;
        this.setState({ users: result.photos });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <div>
          {users.map((user) => (
            <PhotoCard key={user.id} {...user} />
          ))}
        </div>
      </>
    );
  }
}
export default Gallery;
