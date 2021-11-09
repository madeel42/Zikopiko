import ReactPlayer from 'react-player'; 
const GasFree = () => {
    return(
        <div className="gas-market-video-section">
        <div className="gas-market-video-title-wraper">
          <h1>Goodbye gas fees. Hello gas-free</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using Lorem </p>
        </div>
        <div className="container pt-160">
          <div className="video-gas-market-wrapper">
            <img src="" />
            <iframe className="youtube-video-custom-thumbnail embed-responsive-item responsive-iframe" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen name="iframe_video01" />    
          </div>
        </div>
      </div>
    )
}

export default GasFree;