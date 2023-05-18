<template>
<div class="container reach-me my-auto" data-aos="zoom-out" data-aos-duration="2000">
    <div class="row">
        <div class="col-md-4 socials d-flex align-items-center justify-content-center">
            <ul>
                <li>
                    <h4>Direct Email : </h4>
                    <p>cassidyromario@gmail.com</p>
                </li>
                <li>
                    <h4>Contact Me : </h4>
                    <p>(+27) 65 1125 767</p>
                </li>
                <li>
                    <h4>Location :</h4>
                    <p>Rocklands, Mitchell's Plain, Cape Town</p>
                </li>
            </ul>
        </div>
        <div class="col-md-8 contact d-flex align-items-center justify-content-center">
            <form id="contact-form" method="POST" action="https://formspree.io/f/xqkjbrag" role="form">
        <div class="messages"></div>
        <div class="controls">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_name">Firstname *</label>
                        <input id="form_name" type="text" name="name" class="form-control"
                            placeholder="Please enter your firstname *" required="required"
                            data-error="Firstname is required." />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_lastname">Lastname *</label>
                        <input id="form_lastname" type="text" name="surname" class="form-control"
                            placeholder="Please enter your lastname *" required="required"
                            data-error="Lastname is required." />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input id="form_email" type="email" name="email" class="form-control"
                            placeholder="Please enter your email *" required="required"
                            data-error="Valid email is required." />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_phone">Phone</label>
                        <input id="form_phone" type="tel" name="phone" class="form-control"
                            placeholder="Please enter your number" />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="form_message">Message *</label>
                        <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *"
                            rows="4" required="required" data-error="Please leave a message."></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="submit" class="btn btn-success btn-send" value="Send message" />
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
.socials,.contact{
    min-height: 70vh;
}

.socials li{
    padding: 10px;
}

.socials{
    background-image: linear-gradient(to right, #770177,#00b7ff);
    color: white;
}
#contact-form{
    padding: 20px;
    width: 100%;
}

.form-group{
    padding: 20px 0;
}

.reach-me{
    border: 1px solid rgba(128, 128, 128, 0.25);
    box-shadow: 5px 5px 2px rgba(128, 128, 128, 0.629);
    background-color: whitesmoke;
}
</style>