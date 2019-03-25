const state = {
    pieces: []
};

const getters = {
    allPieces: pieces => state.pieces
};


const actions = {
    
};

const mutations = {
    setPieces: (state, pieces) => {
        state.pieces = pieces;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}