import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex'

// 类型
const mutationsTypes = {
  SET_PAGE_SIZE: 'SET_PAGE_SIZE',
}

/**
 * @description state
 */
const state = {
  page_size: '20',
}
/**
 * @description stateType
 */
type StateType = typeof state

/**
 * @description mutations
 */
const mutations: MutationTree<StateType> = {
  [mutationsTypes.SET_PAGE_SIZE](state: StateType, payload: string) {
    state.page_size = payload
  },
}
/**
 * @description actions
 */
const actions: ActionTree<StateType, any> = {
  setPageSize(context: ActionContext<StateType, StateType>, payload: string) {
    context.commit(mutationsTypes.SET_PAGE_SIZE, payload)
  },
}
/**
 * @description getters
 */
const getters: GetterTree<StateType, any> = {
  pageSize: (state) => state.page_size,
}

export default { state, mutations, actions, getters } as Module<StateType, StateType>
