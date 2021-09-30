import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            token : null
        }
    },
    getters:{
        token(state){
            return state.token = localStorage.getItem('token')
        },

    },
    mutations:{
        SET_TOKEN(state, payload){
            state.token = payload
        }
    },
    actions:{
        storeToken(context, payload){
            context.commit('SET_TOKEN', payload)
        }
    }
})

export default store;