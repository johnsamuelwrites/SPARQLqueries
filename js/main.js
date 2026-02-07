/**
 * SPARQLqueries - Main JavaScript
 * Handles theme toggle, copy buttons, and run link pre-population
 */

(function() {
  'use strict';

  // ============================================
  // Theme Toggle
  // ============================================
  function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // ============================================
  // Copy Button Functionality
  // ============================================
  function initCopyButtons() {
    document.querySelectorAll('.query-block').forEach(block => {
      const copyBtn = block.querySelector('.query-action-btn:not(.primary)');
      if (!copyBtn) return;

      // Check if it's a copy button (text contains "Copy")
      if (!copyBtn.textContent.trim().toLowerCase().includes('copy')) return;

      copyBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const codeEl = block.querySelector('.query-block-content code');
        if (!codeEl) return;

        // Extract plain text (strips HTML tags from syntax highlighting)
        const query = codeEl.textContent;

        try {
          await copyToClipboard(query);
          showCopyFeedback(copyBtn, true);
        } catch (err) {
          console.error('Copy failed:', err);
          showCopyFeedback(copyBtn, false);
        }
      });
    });
  }

  async function copyToClipboard(text) {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for older browsers or HTTP context
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function showCopyFeedback(button, success) {
    const originalText = button.textContent;
    button.textContent = success ? 'Copied!' : 'Failed';
    button.classList.add(success ? 'copy-success' : 'copy-error');

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('copy-success', 'copy-error');
    }, 2000);
  }

  // ============================================
  // Run Link Pre-population
  // ============================================
  function initRunLinks() {
    document.querySelectorAll('.query-block').forEach(block => {
      const runLink = block.querySelector('.query-action-btn.primary');
      if (!runLink) return;

      const href = runLink.getAttribute('href');
      // Skip if already has query encoded (contains #)
      if (href && href.includes('#') && href.length > 30) return;

      const codeEl = block.querySelector('.query-block-content code');
      if (!codeEl) return;

      const query = codeEl.textContent;
      const encodedQuery = encodeURIComponent(query);
      runLink.setAttribute('href', `https://query.wikidata.org/#${encodedQuery}`);
    });
  }

  // ============================================
  // Initialize on DOM Ready
  // ============================================
  function init() {
    initThemeToggle();
    initCopyButtons();
    initRunLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
