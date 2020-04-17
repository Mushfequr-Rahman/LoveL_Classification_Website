<template>
  <section class="hero is-danger is-bold ">
      <div v-if="local_user_data" class="is-widescreen test-button">
          Hello {{ local_user_data.name }} and {{ local_user_data.partner.name }}!
      </div>
      <div class="hero-body">
          <div v-if="local_user_data" class="columns is-multiline is-centered is-mobile" id="sectioncontainer">
            <div class="question-box column is-half">
              <button @click="chooseUser(local_user_data.name)" class="big-button button is-primary is-inverted is-outlined is-large">I am  {{ local_user_data.name }}</button>
            </div>
            <div class="question-box column is-half">
              <button @click="chooseUser(local_user_data.partner.name)" class="big-button button is-primary is-inverted is-outlined is-large">I am  {{ local_user_data.partner.name }}</button>
            </div>
          </div>
        </div>
  </section>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'Landing',
  components: {
  },
  props: {
    user_data: Object
  },
  data () {
    return {
      local_user_data: ''
    }
  },
  methods: {
    chooseUser: function (username) {
      this.$router.push({ name: 'DayLove', params: { user_name: username } })
    },
    drawChart: function () {
      const mydata = this.local_user_data
      const points = [mydata.points, mydata.partner.points]
      const features = ['time', 'gift', 'words', 'service', 'touch']
      const labels = ['Quality Time', 'Gifts', 'Words of Affirmation', 'Acts of service', 'Physical Touch']
      const radialScale = d3.scale.linear().domain([0, 11]).range([0, 188])
      const ticks = [2, 4, 6, 8, 10]
      console.log('points ', points)
      d3.select('#viz').remove()
      var svg = d3.select('section').append('div').attr('id', 'viz').append('svg').attr('width', 500).attr('height', 500)
      ticks.forEach(t => {
        return svg.append('circle').attr('cx', 200).attr('cy', 200).attr('fill', 'none').attr('stroke', 'gray').attr('r', radialScale(t))
      })
      ticks.forEach(t => {
        return svg.append('text').attr('x', 205).attr('y', 200 - radialScale(t)).text(t.toString())
      })
      function angleToCoordinate (angle, value) {
        const x = Math.cos(angle) * radialScale(value)
        const y = Math.sin(angle) * radialScale(value)
        return { x: 200 + x, y: 200 - y }
      }
      for (let i = 0; i < features.length; i++) {
        const ftname = labels[i]
        const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length)
        const linecoordinate = angleToCoordinate(angle, 10)
        const labelcoordinate = angleToCoordinate(angle, 10.5)
        svg.append('line').attr('x1', 200).attr('y1', 200).attr('x2', linecoordinate.x).attr('y2', linecoordinate.y).attr('stroke', 'black')
        svg.append('text').attr('x', labelcoordinate.x).attr('y', labelcoordinate.y).text(ftname)
        }
        const line = d3.svg.line()
        .x(d => {
          console.log(d.x)
          return d.x
        })
        .y(d => {
          return d.y
        })
        const colors = ['navy', 'red']
        function getPathCoordinates (datapoint) {
        const coordinates = []
        for (let i = 0; i < features.length; i++) {
          const ftname = features[i]
          const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length)
          coordinates.push(angleToCoordinate(angle, datapoint[ftname]))
        }
        return coordinates
        }
        for (let i = 0; i < points.length; i++) {
        const d = points[i]
        const color = colors[i]
        const coordinates = getPathCoordinates(d)
        console.log('coordinates', coordinates)
        svg.append('path')
        .datum(coordinates)
        .attr('d', line)
        .attr('stroke-width', 3)
        .attr('stroke', color)
        .attr('fill', color)
        .attr('stroke-opacity', 1)
        .attr('opacity', 0.5)
        }
        d3.select('#viz').attr('align', 'center')
        }
  },
  mounted () {
    // ----Setup local_user_data to be read from localStorage when Previous Page triggered-----
    //   When browser "Previous page" button is triggered and lead user back to
    //   this view, the page would redirect back, but the props data binding would
    //   not be emitted again, and thus need to recover the data from localStorage.
    if (this.user_data) {
      const parsed = JSON.stringify(this.user_data)
      localStorage.userlog = parsed
      this.local_user_data = this.user_data
    } else if (!this.user_data && localStorage.userlog) {
      try {
        this.local_user_data = JSON.parse(localStorage.getItem('userlog'))
      } catch (e) {
        localStorage.removeItem('userlog')
      }
    }
    this.drawChart()

    // ---------------------------------------------------------------------------------------
  },
  watch: {
    // ----Update LocalStorage whenever the props 'user_data' changed. -----------------------
    user_data (newValue) {
      localStorage.received = 'true'
      const parsed = JSON.stringify(newValue)
      localStorage.userlog = parsed
    }
    // ---------------------------------------------------------------------------------------
  }
}
</script>

<style>
.big-button{
  width: 60%;
  height: 20rem;
}

#viz{
padding: 2%;
margin: 3rem;
background-color: white;
border-radius: 5rem;
}
</style>
