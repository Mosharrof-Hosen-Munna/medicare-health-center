import React from "react";
import HomeServices from "./HomeServices/HomeServices";
import Banner from "./Banner/Banner";
import useServices from "../../hooks/useServices";

const Home = () => {
  const [services] = useServices();

  return (
    <>
      <Banner></Banner>
      <HomeServices services={services.slice(0, 6)}></HomeServices>
    </>
  );
};

export default Home;
