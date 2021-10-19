import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useService from "../../hooks/useService";

import ServiceDetailsCover from "./ServiceDetailsCover/ServiceDetailsCover";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service] = useService(id);
  const { serviceUrl, serviceName, descriptions } = service ? service : {};
  return (
    <>
      <ServiceDetailsCover></ServiceDetailsCover>
      <Container>
        <div className="py-5">
          <div className="card details-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={serviceUrl} className="card-img" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{serviceName}</h5>
                  <p className="card-text">
                    {descriptions}The promise of the “good death” was one of the
                    outcomes that had inspired the physician to pursue a career
                    in palliative care. But not all patients’ stories play out
                    according to this script, and we need to admit that for
                    someat use data rapidly and effectively to address health
                    effects of natural disasters will require substantial
                    investment, which must rely on evidence of which approaches
                    improve outcomes. But promising solutions are available.
                    patients, death can be difficult to tame.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServiceDetail;
