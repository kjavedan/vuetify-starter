<template>
  <div class="p-4 flex flex-col gap-4">
    <v-card>
      <v-card-title>Base</v-card-title>
      <v-card-text class="flex items-center gap-2">
        <v-btn>I'm a button</v-btn>
        <v-btn color="primary">I'm a button</v-btn>
        <v-btn color="success">I'm a button</v-btn>
        <v-btn color="warning">I'm a button</v-btn>
        <v-btn color="error">I'm a button</v-btn>
        <v-btn color="info">I'm a button</v-btn>
        <v-btn disabled>I'm a disabled</v-btn>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>Outline</v-card-title>
      <v-card-text class="flex items-center gap-2">
        <v-btn variant="outlined">I'm a button</v-btn>
        <v-btn variant="outlined" color="primary">I'm a button</v-btn>
        <v-btn variant="outlined" color="success">I'm a button</v-btn>
        <v-btn variant="outlined" color="warning">I'm a button</v-btn>
        <v-btn variant="outlined" color="error">I'm a button</v-btn>
        <v-btn variant="outlined" color="info">I'm a button</v-btn>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>With Icons</v-card-title>
      <v-card-text class="flex items-center gap-2">
        <v-btn prepend-icon="$unfold">I'm a button</v-btn>
        <v-btn prepend-icon="$file" color="primary"> I'm a button</v-btn>
        <v-btn prepend-icon="$complete" color="success">I'm a button</v-btn>
        <v-btn prepend-icon="$warning" color="warning">I'm a button</v-btn>
        <v-btn append-icon="$delete" color="error">I'm a button</v-btn>
        <v-btn loading="true" color="info">I'm a button</v-btn>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>Icons</v-card-title>
      <v-card-text class="flex items-center gap-2">
        <v-btn variant="outlined" icon="$unfold"></v-btn>
        <v-btn icon="$file" color="primary"></v-btn>
        <v-btn icon="$complete" color="success"></v-btn>
        <v-btn icon="$warning" color="warning"></v-btn>
        <v-btn icon="$delete" color="error"></v-btn>
        <v-btn loading color="info"></v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Iconify from "@/components/Iconify";
</script>

<style scoped>
/* your styles go here */
</style>
