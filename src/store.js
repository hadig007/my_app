import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            token : null
        }
    },
    getters:{
        token(state){
            state.token 
        }
    }
})

export default store;