// src/App.js
import React, { useState } from 'react';
import './App.css';

// Importando todos os componentes refatorados
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import NewsCardList from './components/NewsCardList/NewsCardList';
import Footer from './components/Footer/Footer';
import * as api from './utils/api';

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Estado para o "Mostrar Mais"

  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    setApiError(null);
    setResults([]);
    setHasSearched(true);
    setVisibleCount(3); // Reseta a contagem a cada nova busca

    api.getNews(searchTerm)
      .then((data) => {
        if (data.articles) {
          setResults(data.articles);
        }
      })
      .catch((err) => {
        console.error(err);
        setApiError('Ocorreu um erro ao buscar as notícias. Tente novamente mais tarde.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        {/* Renderiza o componente de busca e passa a função de busca */}
        <SearchForm onSearch={handleSearch} />

        {/* Lógica para renderizar os resultados, preloader ou mensagens */}
        {isLoading && <p className="message">Buscando...</p>}
        
        {apiError && <p className="message message_error">{apiError}</p>}
        
        {results.length > 0 && (
          <NewsCardList
            articles={results}
            visibleCount={visibleCount}
            onShowMore={handleShowMore}
          />
        )}

        {results.length === 0 && !isLoading && hasSearched && !apiError && (
          <p className="message">Nenhum resultado encontrado.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
