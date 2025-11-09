

<script lang="ts">
import { onMounted, onUnmounted, ref, defineComponent } from 'vue';
import { db, collection, getDocs, addDoc } from '../firebase';
import { doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';
import BadgeTag from './BadgeTag.vue';
export default defineComponent({
  name: 'CounterComponent',
  components: {BadgeTag},
  setup() {
    const docRef = doc(db, "stats", "visits")
    const count = ref<number | null>(null)
    let unsubscribe: (() => void) | null = null

    onMounted(async () => {
      // 1️⃣ Verifica se o documento já existe
      console.log('Trying to connect to DB..')
      const existing = await getDoc(docRef)
      console.log('DB is connected!')
      // 2️⃣ Se não existe, cria com count = 0
      if (!existing.exists()) {
        await setDoc(docRef, { count: 0 })
        console.log('Initializing Counter')
      } 

      // 3️⃣ Só depois disso começa a escutar mudanças
      unsubscribe = onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
          count.value = snapshot.data().count 
          console.log('Counter updated (', count.value, ')')
        }
      })
    })

    onUnmounted(() => {
      if (unsubscribe) unsubscribe()
    })

    async function incrementCounter() {
      // 4️⃣ Incrementa o valor atual
      const start = Date.now();
      await updateDoc(docRef, { count: increment(1) })
      const end = Date.now();

      console.log('Counter incremented to (',count.value,') in', end - start, 'ms!');
    }

    return {
      count,
      incrementCounter
    }
  }
})
</script>


<template>


  <button  @click="incrementCounter">
    <BadgeTag style="padding: 0.4rem 0.6rem;" texto="I've read this curriculum!" :gold="true"/>
  </button>

  <p v-if="count !== null" style="color:var(--muted);font-size:13px">Total reads: <strong>{{ count }}</strong></p>
  <p v-else>Loading...</p>

</template>

<style scoped>

button {
  margin: 0px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0px;
}
</style>