import { createStore } from 'vuex'
import cookies from 'vue-cookies'
import router from '@/router'


export default createStore({
  state: {
    users:[],
    serveResponse:null,
    showCont:0,
    availabilities:null,
    currUser:null,
    bookings:null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload},
    setCurrUser(state, payload){
      state.currUser = payload
    },
    setServeResponse(state, payload){
      state.serveResponse = payload
    },
    setAvailabilities(state, payload){
      state.availabilities = payload
    },
    setBookings(state,payload){
      state.bookings = payload
    }
  },
  actions: {
// users' connections

    async getUsers({commit}){
      console.log(cookies.get('token'))
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          'cookie': cookies.get('token')
        }}
      const response = await fetch('http://localhost:5005/users', requestOptions)
      const data = await response.json()
     if (!data.message) {
       commit('setUsers', data)
     }
    },
    async loginUser({commit},{email_add, user_pass}) {
      // POST request using fetch with async/await
      console.log(email_add, user_pass)
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify({ email_add, user_pass})
      };
      const response = await fetch("http://localhost:5005/users/login", requestOptions);
      const data = await response.json();
      try{
      let token = data.token
      cookies.set('token', token, '1h')
      alert(data.message)
      if (data.message == 'You have signed in successfully!') {
        commit('setServeResponse', token)
        await router.push('/dashboard')   
      }
     
      } catch(error){
        alert(error)
      }
    },
    async registerUser({commit}, {first_name, middle_name, last_name, user_role, email_add, user_pass}){
      const requestOptions = {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          'cookie': cookies.get('token')
        },
        body:JSON.stringify({first_name, middle_name, last_name, user_role, email_add, user_pass})
      }
      console.log('test234'+first_name, middle_name, last_name, user_role, email_add, user_pass)
      const response = await fetch("http://localhost:5005/users/register", requestOptions);
      const data = await response.json();

      alert(data.message)
      commit('setServeResponse', data)
    },
    async showCont({commit}){
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          'cookie': cookies.get('token')
        }}
        let response = await fetch('http://localhost:5005/users/auth', requestOptions)
        let data =  await response.json()
        console.log(data)
        commit('setCurrUser', data)
        console.log('function 1 is complete')
         
    },
// check availabilities
async getAvailability({commit}, {id, month}){
  const requestOptions = {
    method: "GET",
    credentials:'include',
    headers: { "Content-Type": "application/json" ,
      'cookie': cookies.get('token')
    }
  }
    let response = await fetch(`http://localhost:5005/availabilities/fetchOpenings/${id}/${month}`, requestOptions)
    let data = await response.json()
    console.log(data)
    commit('setAvailabilities', data)
  },
// make booking
  async makeBooking({commit},{recipient, requesting, app_date, slot_id, min_allocated, topic}){
    const requestOptions = {
      method: "POST",
      credentials:'include',
      headers: { "Content-Type": "application/json" ,
        'cookie': cookies.get('token')
      },
      body:JSON.stringify({recipient, requesting, app_date, slot_id, min_allocated, topic})
    }
    let response = await fetch("http://localhost:5005/availabilities/book", requestOptions)
    let data = await response.json()
    commit('setServeResponse', data)
  },
  async showBookings({commit}){
    const requestOptions = {
      method: "GET",
      credentials:'include',
      headers: { "Content-Type": "application/json" ,
        'cookie': cookies.get('token')
      }
    }
    const id = this.state.currUser.user_id
    let response = await fetch(`http://localhost:5005/availabilities/myBookings/${id}`, requestOptions)
    let data = await response.json()
      commit('setBookings', data)
    
    
  },


},
  modules: {
  }
})
