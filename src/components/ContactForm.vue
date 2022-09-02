<template>

  <div class="container photo-quote" id="contact-us">
    <img src="../assets/photos/Homepage/Contact-form.jpg" alt="" class="container img">

<div class="inside-img">
       <div class = "container contact-us">
                             <form id="contact-form" role="form">

            

            <div class="controls">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name" style="color:white; font-weight:bold">Firstname *</label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname" style="color:white; font-weight:bold">Lastname *</label>
                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required.">
                                                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email" style="color:white; font-weight:bold">Email *</label>
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need" style="color:white; font-weight:bold">Please specify your need *</label>
                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                <option value="" selected disabled>--Select Your Issue--</option>
                                <option >Request Invoice for order</option>
                                <option >Request order status</option>
                                <option >Haven't received cashback yet</option>
                                <option >Other</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <div class="form-group" style="padding-top:30px">
                            <label for="form_message" style="color:white; font-weight:bold">Message *</label>
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>


                    <div class="col-md-12 btn-send">
                        
                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                            " value="Send Message" >
                    
                </div>
          
                </div>


        </div>
         </form>
        </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inside-img{
    position: absolute;
    height: 500px;
align-items: center;
justify-content: space-around;
width: -moz-available;
display: flex;
width: 90%;
}

.photo-quote{
    display: flex;
justify-content: center;

height: 500px;
}

#contact-form{
      width: 50%;
margin-right: 45px;
}

.contact-us{
    display: flex;
justify-content: flex-end
}


@media (max-width: 767px) {

#contact-form{
    width: 80% !important;
}

.btn-send{
    text-align: center;

}

.btn {
padding-bottom: 10px !important;
}

input{
    font-size: 10px;
}
}

</style>