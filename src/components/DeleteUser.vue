<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script setup>
import usealert from '../hooks/alert';
import UserAlert from '@/components/UserAlert'
const {alertIsVisible,showAlert,hideAlert} = usealert()


</script>