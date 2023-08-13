import { Component } from "react";

class MovieCard extends Component {
  // state constructor and objects
 


  // render the movie card
  render() {
    const {movies, addStars, decStars,toggleFav,toggleCart} = this.props;
    const { title, plot, price, rating, stars,fav , cart} = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                  onClick={() => {decStars(movies)}}
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                  onClick={() => {addStars(movies)}}
                />
                <span className="">{stars}</span>
              </div>
              {/* {fav ? (
                <button onClick={() => {toggleFav(movies)}} className="unfavourite-btn">Unfavourite</button>
              ) : (
                <button onClick={() => {toggleFav(movies)}} className="favourite-btn">Favourite</button>
              )} */}

              <button className={fav?"unfavourite-btn":"favourite-btn"} 
               onClick={() => {toggleFav(movies)}}>{fav?"unfavorite":"favorite"}</button>

              <button onClick={() => {toggleCart(movies)}} className={cart ?"cart-btn":"uncart-btn"}>{cart ?"Add to cart":"Removed"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// for exporting the movie card to main app
export default MovieCard;
