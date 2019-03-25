<template>
    <div class = "board">
    <div class = "row" v-for="y in 8" :key="y">
      <div
        class= "square"
        v-for="x in 8"
        :key="x"
        >
        <Piece
        :x="x"
        :y="y"
         ></Piece>
      </div>
    </div>
  </div>
</template>

<script>
import Piece from './Piece'
export default {
    name: 'Board',
    components: {
    Piece
  },
   props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.board {
  background-color: green;
  height: 400px;
  width: 400px;
}

.square {
  display: inline-block;
  border: 1px  solid black;
  height: 50px;
  width: 50px;
  z-Index: 1;
}
.row {
  border: 1px black;
  height: 50px;
  /* width: 100px; */
  display: flex;
}
</style>
