import './MoreMovies.css'

const MoreMovies = ({onMoreMovies}) => {
  return (
    <div className="more">
      <button className="more__btn" onClick={onMoreMovies}>Ещё</button> 
    </div>
  )
};

export default MoreMovies;