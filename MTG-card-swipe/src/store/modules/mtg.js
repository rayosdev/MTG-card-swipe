const state = {
    products: [
        {name:'lightsaber',price:'priceless'},
        {name:'luke action figure',price:'20'},
        {name:'Laia action figure',price:'35'}
      ],
    user: null,
    isNewUser: false,
}
const getters = {
    
}

const mutations = {
    setUser: (state, b) => {
        state
		console.log("TCL: state", state)
        b
		console.log("TCL: b", b)
    }
}

export default {
    state,
    getters,
    mutations
}