import api from './apiConfig';

export const getAllQuestions = async () => {
  const resp = await api.get('/questions');
  return resp.data;
}

export const addQuestion = async (questionId, commentId) => {
  const resp = await api.put(`/questions/${questionId}/comments/${commentId}`);
  return resp.data;
}