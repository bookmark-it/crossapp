<template>
 
        <div class="folder-main-container">
          <div class="fa-here-plz">
            <router-link :to="{ name: 'folder', params: { id: folder.id }}" tag="p">
              <a>{{ folder.name }}</a>
            </router-link>
          </div> 
        </div> 



</template>

<script>
export default {
  props: {
    folder: Object
  }
}
</script>

<style scoped> 

.folder-main-container {
    display:inline-block;
    position:relative;
    height:115px;
    width:130px;
    margin:15px;
}

a{
    height: 100%;
    padding:15px 10px 10px 15px;
    position: absolute;
    font-size: 22px;

    margin:0px; 
    z-index: 1;
    color:black;
}

a:hover{
  color:orange;
}
.fa-here-plz:after {
    content: "\f07b";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    position: absolute;
    font-size: 150px;
    color: lightblue;
    top: -68px;
    left: 0;
    z-index: -1;
}

</style>





<style lang="scss">
@import '../styles/parameters.scss';
</style>
