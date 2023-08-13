import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>Title</div>
          <div>
            <img alt="Cart Icon" />
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}
// for exporting the movie card to main app
export default Navbar;
