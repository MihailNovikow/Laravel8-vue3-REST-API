<template>
<div id="app">
   <div class="panel panel-default">
   <div class="panel-heading">
         <strong> All Resources</strong></div>
            <div class="row">
                 <div class="search-wrapper panel-heading col-sm-12">
                     <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
                </div>                        
            </div>
        <div class="table-responsive">
            <table v-if="resources.length" class="table">
                <thead>
                    <tr>
                         <th>Resource</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in resultQuery">
                        <td><a v-bind:href="item.uri" target="_blank">{{item.title}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
   </div>
   </template>
   <script>
import useBooks from '../../composables/books';
import { onMounted } from 'vue';

export default {
   data() {
    return {
        searchQuery: null,
        resources:[
           useBooks
        ]
    };
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  }
}
   </script>