import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            token : null,
            user :null
        }
    },
    getters:{
        user(state){
            return state.user
        },
    },
    mutations:{
        SET_TOKEN(state, payload){
            state.token = payload
        },
        SET_USER(state, payload){
            state.user = payload
        },
    },
    actions:{
        storeToken(context, payload){
            context.commit('SET_TOKEN', payload)
        },
        storeUser(context, payload){
             context.commit('SET_USER', payload)
        }
    }
})

export default store;