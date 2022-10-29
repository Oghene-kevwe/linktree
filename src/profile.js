export const Profile = () => {
  return (
    <nav>
      <div className="nav-container">
        {/* mobile share btn */}
        <button className="mobile-share-btn">
          <img src="images/iconhorizontal.svg" alt="" />
        </button>

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
            <h4 id="twitter">Annette Black</h4>
            <h4 id="slack">Idise Praise</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};
