import React from "react";
import useServices from "../../hooks/useServices";
import HomeServices from "../Home/HomeServices/HomeServices";

import HealthcareServices from "./HealthcareServices/HealthcareServices";
import ServiceCover from "./ServiceCover/ServiceCover";

const Services = () => {
  const [services] = useServices();
  return (
    <div>
      <ServiceCover></ServiceCover>
      <HealthcareServices></HealthcareServices>
      <HomeServices services={services}></HomeServices>
    </div>
  );
};

export default Services;
