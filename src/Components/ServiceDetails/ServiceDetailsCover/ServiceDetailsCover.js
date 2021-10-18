import React from "react";
import "./ServiceDetailsCover.css";

const ServiceDetailsCover = () => {
  return (
    <section className="service_details_cover text-center text-white">
      <div className="service_cover_text">
        <h1>Service Details</h1>
        <p>
          Home <span className="text-info">{">"}</span> Services Details
        </p>
      </div>
    </section>
  );
};

export default ServiceDetailsCover;
