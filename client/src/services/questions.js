import api from './apiConfig';

export const getAllQuestions = async () => {
  const resp = await api.get('/questions');
  return resp.data;
}

export const addQuestions = async (questionId, questionId) => {
  const resp = await api.put(`/flavors/${questionId}/questions/${questionId}`);
  return resp.data;
}