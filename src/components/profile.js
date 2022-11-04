export const Profile = () => {
  return (
    <nav>
      <div className="nav-container">
        {/* share btn */}
        <div className="share-btn-container">
          <button className="mobile-share-btn">
            <img
              src="images/iconhorizontal.svg"
              alt=""
              className="mobile-share-icon"
            />
            <img
              src="images/iconwebsharebtn.svg"
              alt=""
              className="web-share-icon"
            />
          </button>
          <div className="tooltip">
            <h4>Share Link</h4>
            <div className="tooltip-arrow"></div>
          </div>
        </div>

        {/* profile content */}
        <div className="profile-container">
          {/* profile image */}
          <div className="overlay-container">
            <div className="overlay">
              <img src="images/iconcamera-icon.svg" alt="" />
            </div>
            <img src="images/profile_img.svg" alt="" id="profile_img" />
          </div>
          <div>
            <h4 id="twitter">Praise Idise</h4>
            <h4 id="slack">Idise Praise</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};
