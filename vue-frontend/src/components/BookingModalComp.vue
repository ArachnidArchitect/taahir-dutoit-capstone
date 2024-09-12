<template id="bookingmodal">
    <div id="overlay">
        <div class="modal">
            <div class="modal-row"><h1> </h1><h1>NEW MEETING</h1><h1 @click="closeModal()">X</h1></div>
                <div class="modal-col" v-if="display==1">
                    <input type="text" placeholder="I want to talk about..." v-model="topic">
                    <select name="person" id=""  v-model="person" >
                        <option disabled value="">I want to talk to...</option>
                        <option v-for="user in users()" :key="user" :value="user.user_id">{{user.first_name}}</option>

                    </select>
                    <select name="type" id="" v-model="type">
                        <option disabled value="">Type of meeting</option>
                        <option value="virtual">Virtual</option>
                        <option value="physical">Physical</option>
                    </select>
                    <input type="month" v-model="month">
                    <button @click="checkAvailability()">Check Availability</button>
                </div>
                <!-- second section -->
                <div class="modal-col" v-if="display==2">
                    <table class='slots' v-if="availabilities().length>0">
                        <tr>
                            <th>date</th>
                            <th>Slot Desc</th>
                            <th>Minutes available</th>
                            <th>select</th>
                        </tr>
                        <tr class="slot-row" v-for="(slot, index) in availabilities()" :key="index" >
                            <td class="storedDate" >{{slot.date.substring(0,10)}}</td>
                            <td>{{slot.slot_name}}</td>
                            <td><input type="number" class="min" :value="slot.minutes_available" :max="slot.minutes_available" step="5" ></td>
                            <td><input type="radio" class="radios" :id="`radio${index}`" name="selectedItem" @click="currDate= slot.date.substring(0,10), currIndex = index, slotId = slot.slot_id"></td>
                        </tr>
                            
                    
                    </table>
                    <div v-else-if="availabilities().dataEmpty"> Try a different date or asking the person to edit their availabilities :(</div>
                    <div v-else> loading...</div>
                    <button @click="makeBooking()">Confirm Booking</button>
                </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            topic:'',
            person:'',
            type: '',
            month:'',
            display:1,

            recipient:null,
            slotId:null,
            currDate:null,
            currIndex:null,
            
        }
    },

    methods: {
        closeModal() {
            let overlay = document.querySelector('#overlay')
            overlay.style.display = "none"
        },
        checkAvailability(){
            try {
                if(!this.topic) throw ("Please enter a topic of discussion before continuing");
                if(!this.person) throw ("Please select a person before continuing");
                let month = this.month.substring(5,7) 
                if(!month) throw ("Please select a month before continuing");

                this.$store.dispatch('getAvailability', {id:this.person, month})
                this.availabilities()
            this.display=2;
                
            } catch (error) {
                alert(error)
            }
            
        },
       async  makeBooking(){
        if(this.currIndex){
        await  this.$store.dispatch('makeBooking', {recipient:this.person, requesting:this.$store.state.currUser.user_id, app_date:this.currDate, slot_id:this.slotId, min_allocated:document.querySelectorAll('.min')[this.currIndex].value,topic: this.topic})    
            location.reload()
        }else{alert(`Please select an option to create a booking :(`)}
        },
    
    users(){
      let data = this.$store.state.users
            this.loading = false
            return data
        },
    availabilities(){
      return this.$store.state.availabilities

        }
  },
  computed:{
    getUsers(){
      return this.$store.dispatch('getUsers')

    }

  },
  mounted(){
   this.getUsers
   this.users()
   
  }
}
</script>
<style>
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
    }
    #overlay{
        background-color: rgba(0, 0, 0, 0.257);
        width:100%;
        height: 100%;
        position:absolute;

        display:flex;
        justify-content:center;
        align-items:center;
    }
    .modal{
        width:35em;
        height:25em;
        border-radius:2em;
        background-color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .modal-row{
        display:flex;
        width:80%;
        justify-content: space-between;
    }
    .modal-col{
        display:flex;
        flex-direction:column;
        height:80%;
        width:80%;
        justify-content: space-evenly;

    }
    .modal-col> *{
        padding:1em;
        border:1px solid gray;
        border-radius: 1em;
    }
</style>