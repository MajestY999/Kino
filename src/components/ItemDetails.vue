<template>
  <div class="details-container" v-if="movie">
    <button @click="$router.back()" class="back-button">← Назад</button>
    <div class="movie-details">
      <div v-if="movie.image" class="detail-image-container">
        <img 
          :src="`/images/${movie.image}`" 
          :alt="`Постер фильма ${movie.title}`"     
          class="detail-image"
        >
        <div v-if="movie.id === 1" class="detail-image-container">
  <img src="/images/Punisher2017.png" alt="Постер фильма Каратель" class="detail-image" />
</div>
<div v-else-if="movie.id === 2" class="detail-image-container">
  <img src="/images/Rocky4.png" alt="Постер фильма Рокки 4" class="detail-image" />
</div>
<div v-else-if="movie.id === 3" class="detail-image-container">
  <img src="/images/Matrix.png" alt="Постер фильма Матрица" class="detail-image" />
</div>
<div v-else-if="movie.id === 4" class="detail-image-container">
  <img src="/images/Interstellar.png" alt="Постер фильма Интерстеллар" class="detail-image" />
</div>
<div v-else-if="movie.id === 5" class="detail-image-container">
  <img src="/images/MadMaxFuryRoad.png" alt="Постер фильма Безумный Макс: Дорога ярости" class="detail-image" />
</div>
<div v-else-if="movie.id === 6" class="detail-image-container">
  <img src="/images/InglouriousBasterds.png" alt="Постер фильма Бесславные ублюдки" class="detail-image" />
</div>
<div v-else-if="movie.id === 7" class="detail-image-container">
  <img src="/images/HatefulEight.png" alt="Постер фильма Омерзительная восьмёрка" class="detail-image" />
</div>
<div v-else-if="movie.id === 8" class="detail-image-container">
  <img src="/images/Joker2019.png" alt="Постер фильма Джокер" class="detail-image" />
</div>
      </div>

      <div class="detail-info">
        <h1>{{ movie.title }}</h1>
        <p><strong>Год:</strong> {{ movie.year }}</p>
        <p><strong>Режиссер:</strong> {{ movie.director }}</p>
        <p><strong>Жанр:</strong> {{ movie.genre }}</p>
        <p class="full-desc">{{ movie.fullDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import movies from '@/data/movies.json'

export default {
  props: ['id'],
  computed: {
    movie() {
      return movies.find(m => m.id === parseInt(this.id))
    }
  }
}
</script>

<style scoped>
.details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background: #474747;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background: #e0e0e0;
}

.movie-details {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.detail-image-container {
  flex: 0 0 300px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.detail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.detail-image-container:hover .detail-image {
  transform: scale(1.03);
}

.detail-info {
  flex: 1;
  min-width: 300px;
}

.detail-info h1 {
  margin-top: 0;
  color: #2c3e50;
}

.detail-info p {
  margin: 8px 0;
  font-size: 16px;
}

.detail-info strong {
  color: #3a81df;
}

.full-desc {
  line-height: 1.6;
  font-size: 16px;
  margin-top: 20px;
  color: #34495e;
}

@media (max-width: 768px) {
  .movie-details {
    flex-direction: column;
  }
  
  .detail-image-container {
    flex: 1 1 auto;
    width: 100%;
    max-height: 400px;
  }
}
</style>