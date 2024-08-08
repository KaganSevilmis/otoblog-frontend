import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [],
    post: null,
    comments: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch('http://localhost:8080/posts');
      const posts = await response.json();
      commit('setPosts', posts);
    },
    async fetchPost({ commit }, id) {
      const response = await fetch(`http://localhost:8080/posts/${id}`);
      const post = await response.json();
      commit('setPost', post);
    },
    async fetchComments({ commit }, postId) {
      const response = await fetch(`http://localhost:8080/posts/${postId}/comments`);
      const comments = await response.json();
      commit('setComments', comments);
    },
    async addComment({ commit }, comment) {
      const response = await fetch('http://localhost:8080/comments', {
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
