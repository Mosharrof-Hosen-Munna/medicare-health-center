import { useEffect, useState } from "react";
import useServices from "./useServices";

const useService = (id) => {
  // collect all courses from use Courses
  const [services] = useServices();
  const [service, setService] = useState();

  useEffect(() => {
    const singleService = services.find((item) => item.id === parseInt(id));
    setService(singleService);
  }, [services, id]);

  return [service, setService];
};

export default useService;
