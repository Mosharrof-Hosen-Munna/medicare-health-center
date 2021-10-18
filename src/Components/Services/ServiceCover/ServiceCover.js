import React from "react";
import "./ServiceCover.css";
const ServiceCover = () => {
  return (
    <section className="service_cover text-center text-white">
      <div className="service_cover_text">
        <h1>Medical Services</h1>
        <p>
          Home <span className="text-info">{">"}</span> Services
        </p>
      </div>
    </section>
  );
};

export default ServiceCover;
