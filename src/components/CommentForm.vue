<template>
  <div class="comment-form">
    <h3>Add a Comment</h3>
    <form @submit.prevent="submitComment">
      <textarea v-model="text" placeholder="Write your comment here"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['postId'],
  data() {
    return {
      text: '',
    };
  },
  methods: {
    submitComment() {
      const newComment = {
        id: Date.now(),
        text: this.text,
      };
      this.$emit('comment-added', newComment);
      this.text = '';
    },
  },
};
</script>

<style>
.comment-form {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
}
</style>
