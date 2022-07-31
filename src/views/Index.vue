<template>
  <div class="app__wrapper">
    <div class="authentication__wrapper">
      <Card>
        <div class="authentication__header">
          <h4 class="mb-2">Welcome to SolarInsure 👋</h4>
          <p>Please sign-in to your account and start the adventure</p>
        </div>
        <div class="app__form mt-3">
          <Input
            label="EMAIL OR USERNAME"
            type="email"
            placeholder="Enter your email or username"
            @changeValue="getEmail"
          />
          <Input
            label="PASSWORD"
            type="password"
            placeholder="............"
            @changeValue="getPassword"
          />
          <Button text="Sign In" @submit="signIn" />
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "../components/Forms/Input.vue";
import Button from "../components/Forms/Button.vue";
import Card from "../components/Layout/Card.vue";
import Validate from "../utils/Validate";
import Toast from "../utils/Toast";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  components: { Input, Button, Card },
  setup() {
    var email: string;
    var password: string;

    const router = useRouter();

    const getEmail = (event: string) => {
      email = event;
    };

    const getPassword = (event: string) => {
      password = event;
    };

    const signIn = () => {
      if (!Validate(email).empty() || !Validate(password).empty()) {
        Toast("Please do not leave any Field Empty", "warning");
      } else if (!Validate(email).isEmail()) {
        Toast("Please enter a valid email address", "warning");
      } else if (!Validate(password).validatePassword().status) {
        Toast(Validate(password).validatePassword().mssg, "warning");
      } else {
        router.push("/home");
      }
    };

    return { getEmail, getPassword, signIn };
  },
});
</script>
