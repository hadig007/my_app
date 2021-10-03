import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            token : null,
            user :null,
            buku:null
        }
    },
    getters:{
        user(state){
            return state.user
        },
        buku(state){
            return state.buku
        }
    },
    mutations:{
        SET_TOKEN(state, payload){
            state.token = payload
        },
        SET_USER(state, payload){
            state.user = payload
        },
        SET_BUKU(state, payload){
            state.buku = payload
        }
    },
    actions:{
        storeToken(context, payload){
            context.commit('SET_TOKEN', payload)
        },
        storeUser(context, payload){
             context.commit('SET_USER', payload)
        },
        storeBuku(context, payload){
            context.commit('SET_BUKU', payload)
        }
    }
})

export default store;