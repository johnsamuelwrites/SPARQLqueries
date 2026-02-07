/**
 * SPARQLqueries - Search Functionality
 * Client-side search with filtering and highlighting
 */

(function() {
  'use strict';

  // DOM elements
  let searchInput;
  let searchResults;
  let chapterFilter;
  let difficultyFilter;
  let searchStats;

  /**
   * Initialize search functionality
   */
  function initSearch() {
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    chapterFilter = document.getElementById('chapterFilter');
    difficultyFilter = document.getElementById('difficultyFilter');
    searchStats = document.getElementById('searchStats');

    if (!searchInput || !searchResults) return;

    // Get query from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('search') || '';

    if (initialQuery) {
      searchInput.value = initialQuery;
      performSearch();
    } else {
      // Show all results initially
      performSearch();
    }

    // Event listeners
    searchInput.addEventListener('input', debounce(performSearch, 200));
    if (chapterFilter) chapterFilter.addEventListener('change', performSearch);
    if (difficultyFilter) difficultyFilter.addEventListener('change', performSearch);

    // Focus search input
    searchInput.focus();
  }

  /**
   * Perform search and render results
   */
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const chapter = chapterFilter ? chapterFilter.value : '';
    const difficulty = difficultyFilter ? difficultyFilter.value : '';

    // Parse search terms
    const terms = query.split(/\s+/).filter(t => t.length > 0);

    // Filter pages
    const results = SEARCH_INDEX.pages.filter(page => {
      // Apply chapter filter
      if (chapter && page.chapter !== chapter) return false;

      // Apply difficulty filter
      if (difficulty && page.difficulty !== difficulty) return false;

      // If no search terms, show all matching filters
      if (terms.length === 0) return true;

      // Build searchable text
      const searchText = [
        page.title,
        page.description,
        page.keywords.join(' ')
      ].join(' ').toLowerCase();

      // All terms must match
      return terms.every(term => searchText.includes(term));
    });

    // Update stats
    if (searchStats) {
      const termText = terms.length > 0 ? ` for "${query}"` : '';
      searchStats.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}${termText}`;
    }

    // Render results
    renderResults(results, terms);
  }

  /**
   * Render search results
   */
  function renderResults(results, terms) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <p>No results found. Try different keywords or adjust filters.</p>
        </div>
      `;
      return;
    }

    const html = results.map(page => {
      const chapterInfo = SEARCH_INDEX.chapters[page.chapter] || { name: page.chapter, color: '#888' };
      const title = highlightTerms(page.title, terms);
      const description = highlightTerms(page.description, terms);

      return `
        <a href="${page.url}" class="search-result-card">
          <div class="search-result-chapter" style="color: ${chapterInfo.color}">
            ${chapterInfo.name}
          </div>
          <div class="search-result-title">${title}</div>
          <div class="search-result-description">${description}</div>
          <div class="search-result-meta">
            <span class="difficulty difficulty-${page.difficulty}">${capitalize(page.difficulty)}</span>
          </div>
        </a>
      `;
    }).join('');

    searchResults.innerHTML = html;
  }

  /**
   * Highlight search terms in text
   */
  function highlightTerms(text, terms) {
    if (!terms || terms.length === 0) return escapeHtml(text);

    let result = escapeHtml(text);

    terms.forEach(term => {
      const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    });

    return result;
  }

  /**
   * Escape HTML entities
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Escape regex special characters
   */
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Capitalize first letter
   */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Debounce function calls
   */
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
