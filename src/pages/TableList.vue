<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from 'components/PaperTable.vue'
  const tableColumns = ['Id', 'Name']
  const tableData = [{
    id: 1,
    name: 'News'
  },
  {
    id: 2,
    name: 'Media'
  },
  {
    id: 3,
    name: 'Tutoriels'
  },
  {
    id: 4,
    name: 'Places'
  }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Bookmark Category administration',
          subTitle: 'Here are your categories. You can access, edit and share them from here',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
