<template>
  <h1>Job list</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'details', params: {id: job.id}}">
        <h2>{{ job.title }}</h2>
    </router-link>
    
  </div>
  
</template>

<script>
export default {
    name: 'JobsView',
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json()) 
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style scoped>
.job h2 {
    background: grey;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    max-width: 420px;
    cursor: pointer;
    margin: 10px auto;
    padding: 10px;
    font-weight: bold;
}
.job h2:hover {
    background: steelblue
}
.job a {
    text-decoration: none;
}

</style>