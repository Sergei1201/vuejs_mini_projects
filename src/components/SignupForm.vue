<template>
  <form @submit.prevent="register">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required autocomplete="on" v-model="password">

   <div v-if="passwordError" class="error">
      {{passwordError}}
   </div>
      
    

    <label>Role:</label>
    <select v-model="role">
        <option value="frontenddeveloper">Fron End Developer</option>
        <option value="backenddeveloper">Back End Developer</option>
        <option value="fullstackdeveloper">Fullstack Developer</option>
        
    </select>

    <label>Add Skill</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
       {{skill}}
    </div> 

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
    </div>
    <div class="submit">
        <button>Create an Account</button>
    </div>
  </form>

  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Terms: {{terms}}</p>
  <p>Temp Skill: {{tempSkill}}</p>
  <p>Skills: {{skills}}</p>
  <p>PassError: {{passwordError}}</p>
</template>

<script>
export default {
    name: 'SignupForm',
    data() {
        return {
            email: '',
            password: '',
            role: 'frontenddeveloper',
            terms: true,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === 'Enter' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                     this.skills.push(this.tempSkill)
                     this.tempSkill = ''
                }
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return item != skill
            })
        },
        register() {
           this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'
           if (!this.passwordError) {
            console.log(`Email: ${this.email}`)
            console.log(`Password: ${this.password}`)
            console.log(`Role: ${this.role}`)
            console.log(`Skills: ${this.skills}`)
           }
        }
    }
    
    
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: grey;
    display: inline-block;
    margin: 25px 0 25px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 6px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid lightcyan;
    color: darkgray
}
input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10x 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px;
    margin-right: 10px;
    background-color: darkgrey;
    color: black;
    border-style: none;
    border-radius: 30%;
}
button {
    background: blue;
    cursor: pointer;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px
}
.submit {
    text-align: center
}
.error {
    color: red;
    margin: 5px;
    font-size: 0.8rem;
    font-weight: bold;
}

</style>