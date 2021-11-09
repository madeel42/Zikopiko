const Card = ({ image, avatar, title, body }) => {
    return(
    <div className="grid_2">
        <div className="img_2_top">
          <img src={image} alt={title} />
          <div className="avatar">
            <img src={avatar} alt={title} />
          </div>
        </div>
        <div className="grid_2_footer">
          <h5>{title}</h5>
          <p>{body}</p>
        </div>
    </div>
    )
}
export default Card;