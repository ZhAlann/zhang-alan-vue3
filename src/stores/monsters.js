import { ref } from 'vue'
import { defineStore } from 'pinia'
import ky from 'ky'

const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters'

export const useMonsterStore = defineStore('monsters', () => {
  const monsters = ref([])
  const currentMonster = ref({})

  const fetchAllMonsters = async () => {
    try {
      const rawResponse = await ky.get(API_ENDPOINT)
      const monstersData = await rawResponse.json()
      monsters.value = monstersData
      return monstersData
    } catch (error) {
      console.error('Error fetching monsters:', error)
      throw error
    }
  }

  const fetchMonsterById = async (monsterId) => {
    try {
      const rawResponse = await ky.get(`${API_ENDPOINT}/${monsterId}`)
      const monsterData = await rawResponse.json()
      currentMonster.value = monsterData
      return monsterData
    } catch (error) {
      console.error(`Error fetching monster with ID ${monsterId}:`, error)
      throw error
    }
  }

  return {
    monsters,
    currentMonster,
    fetchAllMonsters,
    fetchMonsterById,
  }
})
