<template>
  <div class="container">
    <div class="flex">
      <div class="col__8 p__05 relative">
        <Card>
          <div class="flex">
            <div class="col_8">
              <h4 class="mb-2">Congratulations John! 🎉</h4>
              <p>
                You have done 72% more sales today. Look Below for Chart
                Analysis.
              </p>
            </div>
            <div class="col_8">
              <img
                src="../assets/image/man-with-laptop-light.png"
                class="img-analysis"
              />
            </div>
          </div>
        </Card>
      </div>
      <div class="col__4">
        <div class="flex">
          <div class="col__6 p__05">
            <Card class="card__stat">
              <Statistics
                image="img/chart-success.png"
                title="Profit"
                value="12,628"
                statistic="72.80%"
              />
            </Card>
          </div>
          <div class="col__6 p__05">
            <Card class="card__stat">
              <Statistics
                image="img/wallet-info.png"
                title="Sales"
                value="4,697"
                statistic="28.24%"
            /></Card>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="col__6 p__05">
        <Card>
          <h4>Sale Report</h4>
          <Bar />
        </Card>
      </div>
      <div class="col__6 p__05">
        <Card>
          <h4>Profit Report</h4>
          <Pie />
        </Card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Layout/Card.vue";
import Statistics from "../components/Layout/Statistics.vue";
import Bar from "../components/Chart/Bar.vue";
import Pie from "../components/Chart/Pie.vue";
import Toggle from "../utils/toggleNav";

export default defineComponent({
  name: "Home",
  components: { Card, Statistics, Bar, Pie },
  setup() {
    // Set Navigation on Component Load
    const { setNav } = Toggle.toggelNavonScreenChange();
    setNav();
  },
});
</script>
