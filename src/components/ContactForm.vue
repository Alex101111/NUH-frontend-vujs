<template>
  <div class="container photo-quote" id="contact-us">
    <img
      src="../assets/photos/Homepage/Contact-form.jpg"
      alt=""
      class="container img"
    />

    <div class="inside-img">
      <div class="container contact-us">
        <form id="contact-form" action="" method="post" @submit.prevent="SendMessage">
          <div class="controls">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_name" style="color: white; font-weight: bold"
                    >Firstname *</label
                  >
                  <input
                    id="form_name"
                    type="text"
                    class="form-control"
                    placeholder="Please enter your firstname *"
                    v-model="contact.name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="form_lastname"
                    style="color: white; font-weight: bold"
                    >Lastname *</label
                  >
                  <input
                    id="form_lastname"
                    type="text"
                    class="form-control"
                    placeholder="Please enter your lastname *"
                    v-model="contact.surname"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label
                    for="form_email"
                    style="color: white; font-weight: bold"
                    >Email *</label
                  >
                  <input
                    id="form_email"
                    type="email"
                    class="form-control"
                    placeholder="Please enter your email *"
                    v-model="contact.email"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_need" style="color: white; font-weight: bold"
                    >Please specify your need *</label
                  >
                  <select
                    id="form_need"
                    class="form-control"
                    v-model="contact.reason"
                  >
                    <option value="" selected disabled>
                      --Select Your Issue--
                    </option>
                    <option value="Request Invoice for order">
                      Request Invoice for order
                    </option>
                    <option value="Request order status">
                      Request order status
                    </option>
                    <option value="Haven't received cashback yet">
                      Haven't received cashback yet
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <div class="form-group" style="padding-top: 30px">
                  <label
                    for="form_message"
                    style="color: white; font-weight: bold"
                    >Message *</label
                  >
                  <textarea
                    id="form_message"
                    class="form-control"
                    placeholder="Write your message here."
                    rows="4"
                    v-model="contact.message"
                  ></textarea>
                </div>
              </div>

       
        
   
            </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  name: "contactForm",
  data: () => ({
    contact: {
      name: "",
      surname: "",
      email: "",
      reason: "",
      message: "",
    },
  }),

    methods: {
    async SendMessage() {
        console.log('test')
      const toast = useToast();
      await axios.post("contact-us", this.contact).then((Response) => {
        if (Response.data.error_messages) {
          toast(Response.data.error_messages.danger[0]);
        } else {
          toast(Response.data);
        }
      });
    },
  },
};
</script>

<style scoped>
.inside-img {
  position: absolute;
  height: 500px;
  align-items: center;
  justify-content: space-around;
  width: -moz-available;
  display: flex;
  width: 90%;
}

.photo-quote {
  display: flex;
  justify-content: center;

  height: 500px;
}

#contact-form {
  width: 50%;
  margin-right: 45px;
}

.contact-us {
  display: flex;
  justify-content: flex-end;
}
.controls{
    text-align: center;
}

.btn{ 
  background-color: #001847 !important;
}

.btn:hover{ 
 background-color: #B5C8EC !important; 
}

.btn:active {
  background-color: #B5C8EC;
  color: #001847;
  border-color:#001847 ;
  

}
@media (max-width: 767px) {
  #contact-form {
    width: 80% !important;
  }

  .btn-send {
    text-align: center;
  }

  .btn {
    padding-bottom: 10px !important;
  }

  input {
    font-size: 10px;
  }
}
</style>