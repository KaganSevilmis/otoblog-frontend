import { createStore } from 'vuex';

const store = createStore({
  state: {
    cars: [], // Postlar yerine cars kullanıyoruz
    car: null, // Tekil post yerine tekil car
    comments: [],
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars;
    },
    setCar(state, car) {
      state.car = car;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },
  actions: {
    async fetchCars({ commit }) {
      const response = await fetch('http://localhost:8000/cars');
      const cars = await response.json();
      commit('setCars', cars);
    },
    async fetchCar({ commit }, id) {
      const response = await fetch(`http://localhost:8000/cars/${id}`);
      const car = await response.json();
      commit('setCar', car);
    },
    async fetchComments({ commit }, carId) { // carId kullanarak comments almak
      const response = await fetch(`http://localhost:8000/cars/${carId}/comments`);
      const comments = await response.json();
      commit('setComments', comments);
    },
    async addComment({ commit }, comment) {
      const response = await fetch('http://localhost:8000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
      const newComment = await response.json();
      commit('addComment', newComment);
    },
  },
});

export default store;
