import { Component } from "react";
import { API_URL, API_KEY } from "../../constants/api";
import PhotoCard from "./../photoCard";

class Gallery extends Component {
  constructor() {
    super();
    this.users = [];
    this.state = { users: [], searchInput: "" };
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

  componentDidUpdate(prevProps, prevState) {
    const { searchInput } = this.state;

    if (prevState.searchInput !== this.state.searchInput) {
      if (searchInput.length >= 3) {
        this.setState({
          users: this.users.filter((user) =>
            user.photographer.toLowerCase().includes(searchInput.toLowerCase())
          ),
        });
      } else {
        this.setState({ users: this.users });
      }
    }
  }

  //   id = undefined;
  //   handleSearchInput2 = (e) => {
  //     this.setState({ searchInput: e.target.value });
  //     const { searchInput } = this.state;
  //     if (this.id !== undefined) {
  //       this.setState({ users: this.users });
  //       clearTimeout(this.id);
  //     }
  //     this.id = setTimeout(() => {
  //       this.setState({
  //         users: this.users.filter((user) =>
  //           user.photographer.toLowerCase().includes(searchInput.toLowerCase())
  //         ),
  //       });
  //     }, 0);
  //   };

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { users, searchInput } = this.state;
    return (
      <>
        <input
          //onChange={this.handleSearchInput2}
          onChange={this.handleSearchInput}
          type="text"
          placeholder="Search..."
          value={searchInput}
        />

        <div className="container">
          {users.map((user) => (
            <PhotoCard key={user.id} {...user} />
          ))}
        </div>
      </>
    );
  }
}
export default Gallery;
