import React, { useState } from 'react';
import './SearchForm.css';

// Componente responsável apenas pelo formulário de busca
function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search">
      <h2 className="search__title">Encontre notícias de todo o mundo</h2>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Digite um tópico"
          required
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search__button" type="submit">Buscar</button>
      </form>
    </section>
  );
}

export default SearchForm;
