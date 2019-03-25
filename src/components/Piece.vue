<template>
  <div
    class="piece"
    :x="x"
    :y="y"
    :style="pieceStyle"
    @click="clicked(x, y)"
    ></div>
</template>

<script>
export default {
  name: 'Piece',
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      color: [ '#000', '#FFF' ],
      directions: [[0,-1],[1,0],[0,1],[-1,0],[-1,-1],[1,1],[-1,1],[1,-1]],
      turn: false
    }
  },
   computed: {
    pieceStyle: function(){
      if((this.x === 4 && this.y === 5)||(this.x === 5 && this.y === 4)){
        return { background: this.color[1]}
      } else if ((this.x === 4 && this.y === 4)||(this.x === 5 && this.y === 5)){
        return {background: this.color[0]}
      } else {
        return {background: ''}
      }
    }
  },
   methods: {
    clicked(x, y){
      let turn = false
      let myColor = turn === false ? this.color[0]:this.color[1];
      // this.directions.forEach((i)=> {
      //   let a = x + i[0]
      //   let b = y + i[1]
      //     // eslint-disable-next-line
      //   console.log( 'data')
       
      // })
    }
  }
}
</script>

<style scoped>
.piece {
  display: inline-block;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 3px;
  z-index: 2;
}

</style>
