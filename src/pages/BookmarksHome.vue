<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-xs-12">
        <div class="card" style="background-color: rgba(0,0,0,0);border: none;box-shadow:none;">
    <div class="row">
          <div class="col-sm-10">
              <input v-model="aaa"  debounce="500" class="form-control mr-sm-6" type="text" placeholder="Search or create bookmark" >
          </div>
          <div class="col-sm-2">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
        </div>
    </div>
    </div>


    <!--Charts-->
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div>
              <div class="header">
                <h4 class="title">Quick open bookmarks</h4> 
                <p class="category">Access and open your frequent bookmarks from here</p>
              </div> 
              <div class="content">

              </div>
            </div>
          </div>
        </div>

    </div>

  </div>
</template>
<script>
  import StatsCard from 'components/StatsCard.vue'
  export default {
    components: {
      StatsCard
    },
    computed: {
      statsCards() {
        return [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'Bookmarks',
            value: this.$store.state.bookmarks.all.length,
            footerText: this.$store.state.bookmarks.all.length + ' bookmarks non catégorisés',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Quick launch',
            value: '7',
            footerText: 'Open your quick launch tabs',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-heart',
            title: 'Favoris',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: 'ti-twitter-alt',
            title: 'Réseau',
            value: '45',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ]
      }
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        aaa: '',
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    }
  }

</script>
<style>

</style>
