<template>
    <div class="vehicle-list">
        <template v-for="(vehicle,index) in vehicles" :key="vehicle.url">
            <div class="vehicle-item" @click="openDetail(vehicle.url)">
                <div >
                    <span class="vehicle-prop">{{index+1}}.Name : </span>
                    <span> {{vehicle.name}}</span>
                </div>
                <div>
                    <span class="vehicle-prop"> Manufacturer : </span>
                    <span> {{vehicle.manufacturer}}</span>
                </div>
               
            </div>
        </template>
        <div class="footer-buttons">
            <button v-if="previousURL" @click="fetchData(previousURL)">Previous</button>
            <button v-if="nextURL" @click="fetchData(nextURL)">Next</button>
        </div>
    </div>
</template>

<script>
export default {
data:function(){
    return {
        vehicles:[],
        previousURL:'',
        nextURL:''
    }
},
   mounted:function(){
      this.fetchData();
   },
   methods:{
       openDetail(url){
            this.$router.push({
                path:'/detail/',
                query:{
                    id:url
                }
            })
       },
       fetchData(url){
        let dataURL  = url || 'https://swapi.dev/api/vehicles';
        fetch(dataURL).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res);
            this.previousURL = res.previous;
            this.nextURL = res.next;
            this.vehicles = res.results;
        });
       }
   }
}
</script>

<style scoped>

.vehicle-item {
    display: flex;
    flex-direction: column;
    margin: 8px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 8px;
    text-align: left;
    font-family: "Courier New";
    background-color: #fff8e1;
    cursor: pointer;
}
.vehicle-prop{
    font-weight: bold;
}
.footer-buttons button {
    margin: 8px;
    border: 1px solid grey;
    border-radius: 8px;
    border: 1px solid grey;
    padding: 8px;
    font-family: "Courier New";
    background-color: #fff8e1;
    cursor: pointer;

}
</style>