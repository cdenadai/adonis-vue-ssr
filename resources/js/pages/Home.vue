<script setup>
  defineProps(
    {
      title: String,
      message: String,
    },
  );
</script>

<template>
  <section>
    <header>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </header>
  </section>
</template>