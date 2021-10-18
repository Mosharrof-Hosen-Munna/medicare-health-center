import React from "react";

import HealthcareServices from "./HealthcareServices/HealthcareServices";
import ServiceCover from "./ServiceCover/ServiceCover";

const Services = () => {
  return (
    <div>
      <ServiceCover></ServiceCover>
      <HealthcareServices></HealthcareServices>
    </div>
  );
};

export default Services;
