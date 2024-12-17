import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          {/* <p>Biography</p> */}
          <h3>Who We Are</h3>
          <p>
          CareConnect is a pioneering healthcare platform designed to revolutionize the way you access quality medical care. By streamlining the appointment booking process, we connect patients with trusted healthcare providers, ensuring convenient and efficient healthcare experiences.
          </p>
          <p>We are all in 2024!</p>
          <p>Our Mission:
          To empower individuals to take control of their health by providing easy access to top-notch medical professionals.
          To simplify the complex process of finding and booking appointments with qualified doctors. To foster a healthier society by facilitating timely and accessible healthcare services.
          </p>
          <p>
          At CareConnect, we are committed to providing a seamless and user-friendly experience. Our dedicated team is passionate about improving healthcare accessibility and ensuring patient satisfaction.
          </p>
          {/* <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p> */}
        </div>
      </div>
    </>
  );
};

export default Biography;
