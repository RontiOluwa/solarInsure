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
import { useRouter } from "vue-router";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

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
      if (email === undefined || email === "") {
        createToast("Please Dont leave the Email Field Empty", {
          type: "warning",
        });
      } else if (password === undefined || password === "") {
        createToast("Please Dont leave the Password Field Empty", {
          type: "warning",
        });
      } else {
        createToast("Data Validated Successfully", {
          type: "success",
        });
        router.push("/home");
      }
    };

    return { getEmail, getPassword, signIn };
  },
});
</script>
