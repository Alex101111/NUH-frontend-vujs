<template>
  <div id="logistics">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark sth">
      <div class="col-md-6 px-0">
        <h1 class="display-4" style="font-size: xx-large">
          We represent the leading Iraqi compant in the field of logistics and
          customs clearance .
        </h1>
      </div>
    </div>
    <h2>Best in business</h2>
    <section id="about" class="about">
      <div class="container">
        <div class="row container">
          <div class="col-lg-6" style="display: flex">
            <img
              src="../../assets/photos/Logistics/Logistics.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>
              Our company Offers integrated solutions in the field of customs
              clearance services.
            </h3>
            <p class="fst-italic">
              We provide customs clearance services on the basis of a prior
              price offer that we abide by, and the goods are delicered within
              the best conditions in your warehouse
            </p>
            <ul>
              <li>
                <i class="bx bx-check-double"></i> Follow-p laws and local and
                international decisions to ensure the best prices for clearance
                without risking your goods
              </li>
              <li>
                <i class="bx bx-check-double"></i> Offering assistance in
                forming the idea of the product you want to import or export
              </li>
              <li>
                <i class="bx bx-check-double"></i> We guarantee maximum
                clearance for your goods at the "lowest cost" posible.
              </li>
              <li>
                <i class="bx bx-check-double"></i> Customs consultancy and
                services in land, sea and air transport.
              </li>
            </ul>
            <p>
              Our company is distinguished by it's expertise by relying on
              professional experties that applies the highest safety standards.
              in addition to providing competitive services price. Most
              importantly, our customers confidence in the company's
              capabilities .
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <h2>Logistics Services</h2>
    <section id="why-us" class="why-us section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Logistics/Express.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-book-reader"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Express</h5>
                <p class="card-text">
                  Through strategic planning, we are superior and distinguished
                  from our competitors, that ensuring the quick delivery and
                  deliver the goods to customers safety on time.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Logistics/warehouse.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-calendar-edit"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Warehouse</h5>
                <p class="card-text">
                  We have a strong country wide netwerk of warehouses and
                  distribution enters that are equipped with top-class material
                  handling equipment couopled with well-trained professionals
                  across all levels
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Logistics/customs-clearance.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-landscape"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Customs Clearance</h5>
                <p class="card-text">
                  We do the customs clearance of goods imported or exported to
                  and from Iraq by the borders, airports, and ports. we are
                  fully aware of customs clearance through our long
                  experienceand distinguished teamwork with the highest level of
                  efficiency and speed in completing all procedures without
                  facing any difficulties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Us Section -->
  </div>
</template>

<script>
export default {
  name: "LogisticsComp",
};
</script>

<style scoped>
.sth {
  background-image: url("../../assets/photos/Logistics/logistics2.jpg");
}

.pt-4 {
  font-size: 20px;
}
h2 {
  text-align: center;
  padding: 100px;
  font-weight: bold;
}

.card-body {
  font-size: 20px;
}

.display-4 {
  color: white;
  font-family: "Montserrat", sans-serif;
}

.align-items-stretch:hover {
  transform: scale(1.1) !important;
}

.card-title {
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
  color: #001847;
}
  #logistics{
    padding-top: 10%;
  }

@media screen and (max-width: 768px) {
  h2 {
    padding: 50px;
  }

  #logistics{
    padding-top: 40% !important;
  }
}
</style>