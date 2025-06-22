// src/utils/api.js

import { BASE_URL, API_KEY } from '../constants/apiConfig';

// Função para verificar se a resposta da API é OK
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // Se a resposta não for ok, rejeita a promise com o status
  return Promise.reject(`Erro: ${res.status}`);
};

// Função para buscar notícias
export const getNews = (searchTerm) => {
  const toDate = new Date().toISOString();
  // Busca notícias dos últimos 7 dias
  const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const url = `${BASE_URL}?q=${searchTerm}&apiKey=${API_KEY}&from=${fromDate}&to=${toDate}&pageSize=100`;

  return fetch(url).then(checkResponse);
};
