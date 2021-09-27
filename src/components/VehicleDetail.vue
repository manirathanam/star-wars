<template>
    <div class="vehicle-detail">
        <template v-for="value,prop in vehicleInfo" :key="value.url">
            <div class="vehicle-prop">
                <span class="prop-name">{{format(prop)}} : </span>
                <span>{{value}}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            vehicleInfo:{
                status:'Loading...'
            }
        };
    },

    mounted:function(){
        let url = new URL(window.location.href);
        let path = url.searchParams.get('id');
        fetch(path).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.vehicleInfo = res;
        });
    },
    methods:{
        format(data){
            return data.replaceAll("_",' ')
        }
    }
    
}
</script>

<style>
.vehicle-detail {
    text-align: left;
    padding: 8px;
    border: 1px solid grey;
    border-radius: 8px;
    font-family: "Courier New";
    background-color: #fff8e1;
}
.vehicle-prop {
    margin: 4px;
}
.prop-name {
    font-weight: bold;
    text-transform: capitalize;
}


</style>