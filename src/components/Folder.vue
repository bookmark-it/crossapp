<template>

<div>User {{ $route.params.id }}</div>



  
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      }
    }
  }
</script>
