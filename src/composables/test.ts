const store = createPinia({
  state: {
    count: 0,
    countLabel: 'Initial Count',
    userList: {
      1: { id: 1, name: 'Eduardo' },
      2: { id: 2, name: 'Marie' },
      3: { id: 3, name: 'Jessica' }
    },
    selectedUser: 1
  },
  getters: {
    getCount(state) {
      return state.count
    },
    getUser() {
      return (userId) => {
        return state.userList[userId]
      }
    },
    countLabel(state) {
      return state.countLabel + ' ' + state.count
    }
  },
  actions: {
    increment() {
      state.count++
    }
  }
})
