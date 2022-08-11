import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab"
import common from "./modules/common"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        tab,
        common
    }
})