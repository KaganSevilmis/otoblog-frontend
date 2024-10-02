<template>
  <div class="comment-form">
    <h3>Yorum Ekle</h3>
    <form @submit.prevent="submitComment">
      <input v-model="name" placeholder="Adınız" required />
      <input v-model="email" placeholder="E-posta Adresiniz" required type="email" />
      <textarea v-model="comment" placeholder="Yorumunuzu buraya yazın" required></textarea>
      <button type="submit">Gönder</button>
    </form>
    <div class="comments">
      <h4>Yorumlar:</h4>
      <ul>
        <li v-for="yorum in car.yorumlar" :key="yorum.id">
          <div class="comment-content">
            <strong>{{ yorum.yorumlarIsim }}</strong>: {{ yorum.yorumlarYorum }}
          </div>
          <div class="comment-actions">
            <button @click="editComment(yorum.id)">Düzenle</button>
            <button @click="deleteComment(yorum.id)">Sil</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="editingCommentId !== null" class="edit-comment-form">
      <h4>Yorumu Düzenle</h4>
      <textarea v-model="editedCommentText" placeholder="Yorumunuzu düzenleyin" required></textarea>
      <button @click="saveEditedComment">Kaydet</button>
      <button @click="cancelEdit">İptal</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid'; // UUID import ediliyor

export default {
  props: ['car'],
  data() {
    return {
      name: '',
      email: '',
      comment: '',
      error: '',
      editingCommentId: null,
      editedCommentText: ''
    };
  },
  methods: {
    async submitComment() {
      const newComment = {
        //id: null,
        yorumlarIsim: this.name,
        yorumlarEmail: this.email,
        yorumlarYorum: this.comment,
        car: this.car
      };
      try {
        /*const updatedCar = {
          ...this.car,
          yorumlar: [newComment, ...this.car.yorumlar] // Yeni yorum en üstte olacak şekilde ekleniyor
        };*/
        const response = await axios.post(`http://localhost:8000/yorumlar`, newComment, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (response.data) {
          this.$emit('car-updated', response.data);
          this.name = '';
          this.email = '';
          this.comment = '';
        }
      } catch (error) {
        this.error = 'Yorum eklenemedi: ' + error.message;
      }
    },
    editComment(commentId) {
      this.editingCommentId = commentId;
      const commentToEdit = this.car.yorumlar.find(y => y.id === commentId);
      if (commentToEdit) {
        this.editedCommentText = commentToEdit.yorumlarYorum;
      }
    },
    async saveEditedComment() {
      if (this.editingCommentId !== null) {
        const updatedComments = this.car.yorumlar.map(yorum => {
          if (yorum.id === this.editingCommentId) {
            return { ...yorum, yorumlarYorum: this.editedCommentText };
          }
          return yorum;
        });

        try {
          const updatedCar = { ...this.car, yorumlar: updatedComments };
          const response = await axios.put(`http://localhost:8000/cars/${this.car.id}`, updatedCar, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
          if (response.data) {
            this.$emit('car-updated', response.data);
            this.editingCommentId = null;
            this.editedCommentText = '';
          }
        } catch (error) {
          this.error = 'Yorum güncellenemedi: ' + error.message;
        }
      }
    },
    async deleteComment(commentId) {
      try {
        //const updatedComments = this.car.yorumlar.filter(yorum => yorum.id !== commentId);
        //const updatedCar = { ...this.car, yorumlar: updatedComments };
        const response = await axios.delete(`http://localhost:8000/yorumlar/${commentId}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (response.data) {
          this.$emit('car-updated', response.data);
        }
      } catch (error) {
        this.error = 'Yorum silinemedi: ' + error.message;
      }
    },
    cancelEdit() {
      this.editingCommentId = null;
      this.editedCommentText = '';
    }
  }
};
</script>

<style scoped>
.comment-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.comment-form h3 {
  margin-bottom: 15px;
  font-size: 1.5em;
  color: #333;
}

.comment-form input,
.comment-form textarea {
  width: calc(100% - 22px);
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.comment-form textarea {
  resize: vertical;
  height: 100px;
}

.comment-form button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.comment-form button:hover {
  background-color: #0056b3;
}

.comments {
  margin-top: 20px;
}

.comments h4 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
}

.comments ul {
  list-style-type: none;
  padding: 0;
}

.comments li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-actions {
  display: flex;
  gap: 10px;
}

.comment-actions button {
  background-color: #ffc107;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.comment-actions button:hover {
  background-color: #e0a800;
}

.edit-comment-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>