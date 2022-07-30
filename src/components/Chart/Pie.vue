<template>
  <canvas id="pieChart" width="40" height="40"></canvas>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import Chart from "chart.js/auto";
export default defineComponent({
  name: "Pie",
  mounted() {
    const ctx: any = document.getElementById("pieChart");

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Sales Report",
            data: [5, 5, 5, 5],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(105, 108, 255)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 0,
          },
        ],
      },
    });

    myChart;
  },
});
</script>
