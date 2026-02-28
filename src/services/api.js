import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getMovies = () => api.get('/movies');

export const deleteMovie = async (movie) => {
  if (!movie.canDelete) {
    alert("Data bawaan tidak boleh dihapus");
    return;
  }

  return api.delete(`/movies/${movie.id}`);
};
export const addMovie = (movieData) =>
  api.post('/movies', {
    ...movieData,
    canDelete: true,
  });

export default api;