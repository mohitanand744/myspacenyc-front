import BannerC from "@/components/bannerC";
import SortDropdown from "@/components/Filters/SortDropdown";
import SearchBar from "@/components/SearchBar/SearchBar";
import ServiceSlider from "@/components/ServiceSlider";
import TaskCard from "@/components/TaskCard";
import React from "react";

const page = () => {
  // Mock data
  const serviceProviders = [
    {
      id: 1,
      name: "John Doe",
      service: "House helping and moving",
      price: 9540.99,
      rating: 4.5,
      reviews: 355,
      img: "https://t4.ftcdn.net/jpg/08/12/62/51/360_F_812625126_KjpcIlXPXa8WfQaPBEyxCmNzkdvzE7HK.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      service: "Professional cleaning",
      price: 7200.5,
      rating: 4.8,
      reviews: 420,
      img: "https://media.istockphoto.com/id/1311634222/photo/portrait-of-successful-black-male-modern-day-student-holding-smartphone.jpg?s=612x612&w=0&k=20&c=vl2FeMtO91rpRUcq0reIfqAQPrQsf30JF-JAxU5baro=",
    },
    {
      id: 3,
      name: "Mike Johnson",
      service: "Furniture assembly",
      price: 6500.0,
      rating: 4.3,
      reviews: 290,
      img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
  ];

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="bannerCh mb-4">
          <BannerC className="" />
        </div>

        <div className="widget-box-2 wd-listing">
          <div className="d-flex h-100 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <h3 className="fs-1">Service Marketplace</h3>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <SearchBar />
              <SortDropdown />
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <ServiceSlider />

              <div className="row flex-column">
                {serviceProviders.map((provider) => (
                  <div key={provider.id} className="col-md-12 mb-4">
                    <div className="card border border-warning serviceCard h-100 rounded-4">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-3">
                          <img className="profileC" src={provider.img} alt="" />
                          <div className="">
                            <h5 className="card-title fw-bold">
                              {provider.name}
                            </h5>
                            <p className="card-text text-muted">
                              {provider.service}
                            </p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h4 className="text-orange fs-3 fw-bold">
                                ${provider.price.toFixed(2)}
                              </h4>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <div className="d-flex align-items-center me-2">
                              <p className="text-warning me-1">★</p>
                              <span>{provider.rating}</span>
                            </div>
                            <span className="text-muted">
                              ({provider.reviews} Reviews)
                            </span>
                          </div>
                          <button className="btn btn-warning mt-2 fs-5 border-none text-white py-2">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
