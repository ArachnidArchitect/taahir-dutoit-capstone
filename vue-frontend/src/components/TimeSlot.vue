<template>
    <div class="slot-card" :style= "[this.time>0 ? {'background-color':'#c7f3a7'} : {'background-color':'#ff000041'}]">
      <div class="slot-desc"><slot name="slot-desc"></slot></div>
      <div class="slot-input">
        <input type="number" v-model="time"  max="60" min="0" step="5" />
      </div>
    </div>
  </template>
  
  <script>
//   import { ref, onUpdated } from 'vue';
// const appointment = ref(0)
export default{
  data() {
    return {
      time:0,
    }
  },
  props:['date', 'id'],
    expose:['myMethod'],
    methods: {
        myMethod(){
          if(this.time>0)
          this.$store.dispatch('setAvailabilities', {slot_id:this.id,date:this.date,minutes_available:this.time })
            // alert(this.time)
        },
     
    },
    setup(props, {expose}) {
      expose({
        myMethod:()=>{
          this.myMethod()
        }
      })
      
    },

}
// const emit = defineEmits(['display'])
// onUpdated(()=> emit('display', appointment.value))
  </script>
  
  <style></style>
  