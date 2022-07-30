<template>
  <div class="container">
    <h4><span class="text__muted">Home /</span> List of Users</h4>
    <div class="mt-3">
      <Card class="card__table">
        <div class="p__1 card__header">
          <h5>List of All Users</h5>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Revenue</th>
                <th>DOB</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody v-for="item in users" :key="item.no">
              <tr>
                <td>
                  <b>{{ item.firstName }}</b>
                </td>
                <td>{{ item.lastName }}</td>
                <td>${{ item.revenue }}</td>
                <td>{{ item.DOB }}</td>
                <td>
                  <span
                    :class="[
                      item.status ? 'bg-label-primary' : 'bg-label-warning',
                      'badge',
                    ]"
                  >
                    <a v-if="item.status">Active</a>
                    <a v-else>Pending</a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Layout/Card.vue";
import Toggle from "../utils/toggleNav";

export default defineComponent({
  name: "Users",
  components: { Card },
  setup() {
    // List of Users
    const users = [
      {
        no: 1,
        firstName: "Joel",
        lastName: "King",
        revenue: "600",
        DOB: "3rd May 2022",
        status: true,
      },
      {
        no: 2,
        firstName: "Olaoluwa",
        lastName: "Ojedapo",
        revenue: "300",
        DOB: "3rd July 2012",
        status: false,
      },
      {
        no: 3,
        firstName: "James",
        lastName: "Jesus",
        revenue: "3000",
        DOB: "1st Jan 2012",
        status: false,
      },
      {
        no: 1,
        firstName: "Joel",
        lastName: "King",
        revenue: "600",
        DOB: "3rd May 2022",
        status: true,
      },
      {
        no: 2,
        firstName: "Olaoluwa",
        lastName: "Ojedapo",
        revenue: "300",
        DOB: "3rd July 2012",
        status: false,
      },
      {
        no: 3,
        firstName: "James",
        lastName: "Jesus",
        revenue: "3000",
        DOB: "1st Jan 2012",
        status: false,
      },
    ];

    // Set Navigation on Component Load
    const { setNav } = Toggle.toggelNavonScreenChange();
    setNav();

    return { users };
  },
});
</script>
