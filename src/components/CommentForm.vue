<template>
  <div class="comment-form">
    <h3>Add a Comment</h3>
    <form @submit.prevent="submitComment">
      <textarea v-model="text" placeholder="Write your comment here"></textarea>
      <button type="submit">Submit</button>
    </form>
    <div class="comments">
      <h4>Comments:</h4>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['carId'],
  data() {
    return {
      text: '',
      comments: [],
      error: '',
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(`/api/posts/${this.postId}/comments`); // Backend'den veriyi çek
        this.comments = response.data; // Yorumları comments değişkenine ata
      } catch (error) {
        this.error = 'Yorumlar yüklenemedi: ' + error.message;
      }
    },
    async submitComment() {
      const newComment = {
        text: this.text,
      };
      try {
        await axios.post(`/api/posts/${this.postId}/comments`, newComment); // Yorum ekle
        this.comments.push(newComment); // Yorumları güncelle
        this.text = ''; // Textarea'yı temizle
      } catch (error) {
        this.error = 'Yorum eklenemedi: ' + error.message;
      }
    },
  },
};
</script>

<style scoped>
.comment-form {
  margin-top: 20px;
}

textarea {
  width: 100%;
}

.comments {
  margin-top: 20px;
}

.comments ul {
  list-style-type: none;
  padding: 0;
}

.comments li {
  margin-bottom: 10px;
}
</style>
