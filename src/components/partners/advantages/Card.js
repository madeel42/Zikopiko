const Card = ({ image, title, body }) => {
    return(
    <div className="grid_1">
        <img src={image} alt={title} />
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    )
}
export default Card;