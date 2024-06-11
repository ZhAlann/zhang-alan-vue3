<script setup>
import { useMonsterStore } from '@/stores/monsters.js'

const monsterStore = useMonsterStore()

monsterStore.fetchAllMonsters()

const monsters = monsterStore.monsters

</script>


<template>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <div class="mb-5">
          <h3 class="text-uppercase border-start border-5 border-primary ps-3">Every Monsters</h3>
          <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Page 1</h5>
          <div v-for="monster in monsters" :key="monster._id" class="d-flex overflow-hidden mb-3 bg-light">
            <img :src="monster.image" class="img-fluid" style="width: 100px; height: 100px; object-fit: cover;" :alt="monster.name">
            <router-link :to="'/monsters/' + monster._id" class="h5 d-flex align-items-center bg-light px-3 mb-0">{{ monster.name }}</router-link>
          </div>
        </div>
        <button type="button" class="btn btn-outline-success">Prev</button>
        <button type="button" class="btn btn-outline-success">Next</button>
      </div>
    </div>
  </div>
</template>


<style>
</style>
