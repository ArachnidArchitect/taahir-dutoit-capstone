import { createStore } from 'vuex'
import cookies from 'vue-cookies'
import router from '@/router'

// const apiUrl = "http://localhost:5005"
const apiUrl = "https://taahir-dutoit-capstone-production.up.railway.app"
export default createStore({
  state: {
    users:[],
    serveResponse:null,
    showCont:0,
    availabilities:[],
    currUser:null,
    bookings:[],
    students:[],
    staff:[],
    slots:null,
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
    },
    setStaff(state,payload){
      state.staff = payload
    },
    setStudents(state,payload){
      state.students = payload
    },
    setSlots(state,payload){
      state.slots = payload
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
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        }}
      const response = await fetch(`${apiUrl}/users`, requestOptions)
      const data = await response.json()
     if (!data.message) {
       commit('setUsers', data)
     }
    },
    async filteredRoles({commit},role){
      console.log('students')
      console.log(cookies.get('token'))
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        }}
      const response = await fetch(`${apiUrl}/users/filtered/${role}`, requestOptions)
      const data = await response.json()
      console.log('students', data)
     if (!data.message) {
      if(role == 'student'){
        commit('setStudents', data)
      }else if(role == 'staff'){
        commit('setStaff', data)
      }
     }
    },
    async loginUser({commit},{email_add, user_pass}) {
      console.log(3)
      // POST request using fetch with async/await
      console.log(email_add, user_pass)
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify({ email_add, user_pass})
      };
      const response = await fetch(`${apiUrl}/users/login`, requestOptions);
      const data = await response.json();
      try{
      let token = data.token
      cookies.set('token', token, '1h')
      alert(data.message)  
      if (data.message == 'You have signed in successfully! :)') {
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
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        },
        body:JSON.stringify({first_name, middle_name, last_name, user_role, email_add, user_pass})
      }
      console.log('test234'+first_name, middle_name, last_name, user_role, email_add, user_pass)
      const response = await fetch(`${apiUrl}/users/register`, requestOptions);
      const data = await response.json();
      alert(data.message)
      if(data.message.includes(':)')){
        await router.push('/login')
      }
      commit('setServeResponse', data)
    },
    async showCont({commit}){
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        }}
        let response = await fetch(`${apiUrl}/users/auth`, requestOptions)
        let data =  await response.json()
        console.log(data)
        commit('setCurrUser', data)
        console.log('function 1 is complete')
         
    },
    async editUser({commit}, {first_name, middle_name, last_name, user_role, user_profile}){
      const requestOptions = {
        method: 'PATCH',
        credentials:'include',
        headers: { 'Content-Type': 'application/json',
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
         },
        body: JSON.stringify({first_name, middle_name, last_name, user_role, user_profile })
    }
    let response = await fetch(`${apiUrl}/users/update`, requestOptions)
    let data = await response.json()
    // needs error handling - dont forget about it
    alert(data.message)
    commit('setServeResponse', data)
    },
    async resetPass({commit}, {email_add, user_pass}){
      const requestOptions = {
        method: 'PATCH',
        credentials:'include',
        headers: { 'Content-Type': 'application/json',
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
         },
        body: JSON.stringify({email_add, user_pass})
      }
      let response = await fetch(`${apiUrl}/users/reset`, requestOptions)
      let data = await response.json()
      // needs error handling - dont forget about it
      alert(data.message)
      commit('setServeResponse', data)
      },
// availabilities
async getAvailability({commit}, {id, month}){
  const requestOptions = {
    method: "GET",
    credentials:'include',
    headers: { "Content-Type": "application/json" ,
      "Authorization": `${cookies.get('token')}`,
      'cookie': cookies.get('token')
    }
  }
    let response = await fetch(`${apiUrl}/availabilities/fetchOpenings/${id}/${month}`, requestOptions)
    let data = await response.json()
    if (data.length==0) {
      data = {dataEmpty:true}
    }
    console.log('aaaaa',data)
    commit('setAvailabilities', data)
  },

async fetchSlots({commit}){
    let data = await (await fetch(`${apiUrl}/availabilities/fetchSlots`)).json()
    console.log('this is slots:',data)
    commit('setSlots', data)

  },
async setAvailabilities({commit},{slot_id,date,minutes_available}){
  const requestOptions = {
    method: "POST",
    credentials:'include',
    headers: { "Content-Type": "application/json",
      "Authorization": `${cookies.get('token')}`,
      'cookie': cookies.get('token')
    },
    body: JSON.stringify({slot_id,date,minutes_available})
  }
  const response = await fetch(`${apiUrl}/availabilities/insert`, requestOptions);
  const data = await response.json();
  try{
  alert(data.message)
  if (data.message == 'You have signed in successfully!') {
    commit('setServeResponse', data.message)   
  }
 
  } catch(error){
    alert(error)
  }
},
// make booking
  async makeBooking({commit},{recipient, requesting, app_date, slot_id, min_allocated, topic}){
    const requestOptions = {
      method: "POST",
      credentials:'include',
      headers: { "Content-Type": "application/json" ,
        "Authorization": `${cookies.get('token')}`,
        'cookie': cookies.get('token')
      },
      body:JSON.stringify({recipient, requesting, app_date, slot_id, min_allocated, topic})
    }
    let response = await fetch(`${apiUrl}/availabilities/book`, requestOptions)
    let data = await response.json()
    try{
      alert(data.message)
      if (data.message == 'You have signed in successfully!') {
        commit('setBookings', data.myData) 
      
      }
     
      } catch(error){
        alert(error)
      }
     

  },
  async showBookings({commit}){
    const requestOptions = {
      method: "GET",
      credentials:'include',
      headers: { "Content-Type": "application/json" ,
        "Authorization": `${cookies.get('token')}`,
        'cookie': cookies.get('token')
      }
    }
    const id = this.state.currUser.user_id
    let response = await fetch(`${apiUrl}/availabilities/myBookings/${id}`, requestOptions)
    let data = await response.json()
      commit('setBookings', data)
     
    
    
  },


},
  modules: {
  }
})
