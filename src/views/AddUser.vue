<template>
  <div class="container">
    <h4><span class="text__muted">Home /</span> Add Users</h4>
    <div class="mt-3">
      <Card>
        <h5>Fill the Form Below to Add a new User</h5>
        <div class="app__form mt-3">
          <Input
            label="Enter First Name"
            type="text"
            placeholder="Enter your First Name"
            @changeValue="getFirstName"
          />
          <Input
            label="Enter Last Name"
            type="text"
            placeholder="Enter your Last Name"
            @changeValue="getLastName"
          />
          <Input
            label="Enter Email"
            type="text"
            placeholder="Enter your Email"
            @changeValue="getEmail"
          />

          <Input
            label="Enter DOB"
            type="date"
            placeholder="Enter your DOB"
            @changeValue="getDOB"
          />

          <Button text="Submit" @submit="sendData" />
        </div>
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Layout/Card.vue";
import Input from "../components/Forms/Input.vue";
import Button from "../components/Forms/Button.vue";
import Toggle from "../utils/toggleNav";
import Validate from "../utils/Validate";
import Toast from "../utils/Toast";

export default defineComponent({
  name: "Add-User",
  components: { Card, Input, Button },
  setup() {
    var firstname: string;
    var lastname: string;
    var email: string;
    var dob: string;

    // Set Navigation on Component Load
    const { setNav } = Toggle.toggelNavonScreenChange();
    setNav();

    // Get Email Input Value
    const getEmail = (event: string) => {
      email = event;
    };

    // Get Firstname Input Value
    const getFirstName = (event: string) => {
      firstname = event;
    };

    // Get Lastname Input Value
    const getLastName = (event: string) => {
      lastname = event;
    };

    // Get DOB Input Value
    const getDOB = (event: string) => {
      dob = event;
    };

    const sendData = () => {
      // Form Validation
      if (
        !Validate(email).empty() ||
        !Validate(firstname).empty() ||
        !Validate(lastname).empty() ||
        !Validate(dob).empty()
      ) {
        Toast("Please Dont leave any Field Empty", "warning");
      } else {
        Toast("Data Validated Successfully", "success");
        console.log(email, firstname, lastname, dob);
      }
    };

    return { getEmail, getFirstName, getLastName, getDOB, sendData };
  },
});
</script>
