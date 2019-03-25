<template>
  <div
    class="piece"
    :x="x"
    :y="y"
    :style="pieceStyle"
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
    }
  },
   computed: {
    // first: function(i) {
    //   if((i.x === 5 && i.y === 6)||(i.x === 6 && i.y === 5)){
    //     // eslint-disable-next-line
    //     console.log('ture')
    //   return  this.back=this.color[0] 
    //   }
    // },
    pieceStyle: function(){
      // eslint-disable-next-line
      console.log(this, 'this')
      if((this.x === 4 && this.y === 5)||(this.x === 5 && this.y === 4)){
        // eslint-disable-next-line
        console.log(this.x, 'ture')
        return { background: this.color[1]}
      } else if ((this.x === 4 && this.y === 4)||(this.x === 5 && this.y === 5)){
        return {background: this.color[0]}
      } else {
        return {background: ''}
      }
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
