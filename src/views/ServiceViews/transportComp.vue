<template>
  <div id="transport">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark sth">
      <div class="col-md-6 px-0">
        <h1 class="display-4" style="font-size: xx-large">
          Leading company specialized in the field of transport and heavy
          transport
        </h1>
      </div>
    </div>
    <h2>Best in business</h2>
    <section id="about" class="about">
      <div class="container">
        <div class="row container">
          <div class="col-lg-6" style="display: flex">
            <img
              src="../../assets/photos/Transport/Transport2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>
              A professional service compatible with international standards.
            </h3>
            <p class="fst-italic">
              We conduct road surveys and identify potential obstacles and
              dangers before any particular movement while dealing with large
              size, weight and various dimentions of goods
            </p>
            <ul>
              <li>
                <i class="bx bx-check-double"></i> Door-to-door transport
                services.
              </li>
              <li>
                <i class="bx bx-check-double"></i> Dedicated capacity as needed.
              </li>
              <li>
                <i class="bx bx-check-double"></i> Transportation during the
                same day.
              </li>
              <li><i class="bx bx-check-double"></i> Customs clearance.</li>
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

    <h2>Transport Services</h2>
    <section id="why-us" class="why-us section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Transport/Shipping.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-book-reader"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Shipping</h5>
                <p class="card-text">
                  Partial or full container sea fright RO-Ro (roll-on / Roll)
                  shipping service for all types of goods to and from all over
                  the world, and provide the best competitive prices through our
                  direct and close links with our agents spread all over the
                  world and our distinguished relations with most imortant
                  international shipping lines.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Transport/transportation.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-calendar-edit"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Transportation</h5>
                <p class="card-text">
                  Our company has a fleet of trucks and advanced equipment, to
                  accommodate the implimentation of all transport projects, wich
                  contributed in a practical way in the strong presence of the
                  company in the field of transport of all goods in iraq and the
                  kurdistan region.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Transport/Cargo.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-icon">
                <i class="bx bx-landscape"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Cargo</h5>
                <p class="card-text">
                  We offer a fast collection with our own pickup and transfer to
                  airport for various cargoes with high-speed procedures for
                  worldwide export or import, special handling for sensitive
                  cargo wich requires special care. We have good relations with
                  most airlines and offer very competitive rates & services .
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
  name: "TransportComp",
};
</script>

<style scoped>
.sth {
  background-image: url("../../assets/photos/Transport/Transport-truck.jpg");
}

.pt-4 {
  font-size: 20px;
}

.card-body {
  font-size: 20px;
}

h2 {
  text-align: center;
  padding: 100px;
  font-weight: bold;
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
  #transport{
    padding-top: 10%;
  }
@media screen and (max-width: 768px) {
  h2 {
    padding: 50px;
  }

  #transport{
    padding-top: 40%;
  }
}
</style>