import React from 'react';
import ReactStars from 'react-stars';
import './Card.scss';

const Card = (props) => {
  // const [show, setShow] = React.useState(false);
  // console.log(props)
  const averageRating = Number(props.average_rating);

  return (
    <article className='movie-wrapper' onClick={ () => props.selectMovie(props.id) }>
      <img className='thumbnail' src={props.poster_path} alt={`"${props.title}" poster`}/>
      <div className='description-container'>
        <h2>{props.title}</h2>
        <div className='rating-container'>
          <ReactStars className='star-rating' count={5} value={averageRating} size={16} color2={'#ffd700'} color1={'#0D0D0D'} edit={false} />
          <p>{props.average_rating}</p>
        </div>
        <button className='info-button'>More Info</button>
      </div>
    </article>
  )
}

export default Card;