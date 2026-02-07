/**
 * SPARQLqueries Search Index
 * Contains all searchable content for client-side search
 */

const SEARCH_INDEX = {
  pages: [
    // === CORE CHAPTERS ===

    // Basic Chapter
    {
      url: 'basic/index.html',
      title: 'Basic Queries',
      chapter: 'basic',
      difficulty: 'beginner',
      description: 'Master foundational SPARQL: SELECT, PREFIX, DISTINCT, FILTER, OPTIONAL, and property paths.',
      keywords: ['basic', 'select', 'prefix', 'distinct', 'filter', 'optional', 'property paths', 'beginner', 'introduction']
    },

    // Expressions Chapter
    {
      url: 'expressions/index.html',
      title: 'Expressions',
      chapter: 'expressions',
      difficulty: 'intermediate',
      description: 'Work with string manipulation, date functions, mathematical operations, and hash functions.',
      keywords: ['expressions', 'string', 'date', 'math', 'hash', 'functions', 'manipulation', 'concat', 'strlen']
    },

    // Aggregate Chapter
    {
      url: 'aggregate/index.html',
      title: 'Aggregate Queries',
      chapter: 'aggregate',
      difficulty: 'intermediate',
      description: 'Analyze data with COUNT, SUM, AVG, GROUP BY, HAVING, and GROUP_CONCAT.',
      keywords: ['aggregate', 'count', 'sum', 'avg', 'average', 'group by', 'having', 'group_concat', 'sample', 'statistics']
    },

    // Advanced Chapter
    {
      url: 'advanced/index.html',
      title: 'Advanced Query Forms',
      chapter: 'advanced',
      difficulty: 'advanced',
      description: 'Go beyond SELECT with ASK, CONSTRUCT, and DESCRIBE query forms.',
      keywords: ['advanced', 'ask', 'construct', 'describe', 'query forms', 'boolean', 'rdf', 'graph']
    },

    // Federation Chapter
    {
      url: 'federation/index.html',
      title: 'Federation',
      chapter: 'federation',
      difficulty: 'advanced',
      description: 'Query multiple SPARQL endpoints simultaneously using SERVICE.',
      keywords: ['federation', 'service', 'endpoints', 'multiple sources', 'dbpedia', 'cross-endpoint', 'distributed']
    },

    // === TEMPORAL CHAPTER ===
    {
      url: 'temporal/index.html',
      title: 'Temporal Queries',
      chapter: 'temporal',
      difficulty: 'intermediate',
      description: 'Work with dates, timelines, and historical periods. Filter by time ranges.',
      keywords: ['temporal', 'dates', 'time', 'timeline', 'historical', 'calendar', 'year', 'month', 'day', 'period']
    },
    {
      url: 'temporal/dates.html',
      title: 'Working with Dates',
      chapter: 'temporal',
      difficulty: 'intermediate',
      description: 'Extract and filter date components using YEAR(), MONTH(), DAY() and date comparisons.',
      keywords: ['dates', 'year', 'month', 'day', 'filter', 'datetime', 'inception', 'P571', 'born', 'died']
    },
    {
      url: 'temporal/timelines.html',
      title: 'Timelines & Periods',
      chapter: 'temporal',
      difficulty: 'intermediate',
      description: 'Build chronological timelines and analyze time periods with grouping.',
      keywords: ['timeline', 'periods', 'chronological', 'decades', 'centuries', 'floor', 'visualization', 'history']
    },
    {
      url: 'temporal/historical.html',
      title: 'Historical Queries',
      chapter: 'temporal',
      difficulty: 'intermediate',
      description: 'Query historical events with statement qualifiers for start and end dates.',
      keywords: ['historical', 'events', 'qualifiers', 'start date', 'end date', 'P580', 'P582', 'pq:', 'ps:']
    },
    {
      url: 'temporal/precision.html',
      title: 'Time Precision',
      chapter: 'temporal',
      difficulty: 'advanced',
      description: 'Handle different precision levels from day to millennium using wikibase:timePrecision.',
      keywords: ['precision', 'timePrecision', 'psv:', 'day', 'month', 'year', 'decade', 'century', 'millennium']
    },
    {
      url: 'temporal/calendars.html',
      title: 'Calendar Systems',
      chapter: 'temporal',
      difficulty: 'advanced',
      description: 'Work with Gregorian, Julian, and proleptic calendars. Handle BC dates.',
      keywords: ['calendar', 'gregorian', 'julian', 'proleptic', 'BC', 'BCE', 'negative years', 'ancient']
    },

    // === GEOSPATIAL CHAPTER ===
    {
      url: 'geospatial/index.html',
      title: 'Geospatial Queries',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Query locations, calculate distances, and visualize results on maps.',
      keywords: ['geospatial', 'geographic', 'location', 'coordinates', 'distance', 'maps', 'gps', 'latitude', 'longitude']
    },
    {
      url: 'geospatial/coordinates.html',
      title: 'Coordinates',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Work with WKT Point format and extract latitude/longitude values.',
      keywords: ['coordinates', 'P625', 'WKT', 'Point', 'latitude', 'longitude', 'geof:', 'location']
    },
    {
      url: 'geospatial/distance.html',
      title: 'Distance Queries',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Find locations within a radius using wikibase:around service.',
      keywords: ['distance', 'radius', 'around', 'nearby', 'kilometers', 'wikibase:around', 'geof:distance']
    },
    {
      url: 'geospatial/bounding.html',
      title: 'Bounding Boxes',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Search within rectangular regions using wikibase:box.',
      keywords: ['bounding box', 'rectangle', 'wikibase:box', 'cornerSouthWest', 'cornerNorthEast', 'region']
    },
    {
      url: 'geospatial/regions.html',
      title: 'Regions & Areas',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Query administrative hierarchies with P131 for country, region, city relationships.',
      keywords: ['regions', 'administrative', 'P131', 'P17', 'country', 'city', 'continent', 'hierarchy', 'located in']
    },
    {
      url: 'geospatial/maps.html',
      title: 'Map Visualizations',
      chapter: 'geospatial',
      difficulty: 'intermediate',
      description: 'Create interactive maps with #defaultView:Map, clustering, and custom markers.',
      keywords: ['maps', 'visualization', 'defaultView:Map', 'clustering', 'markers', 'layers', 'interactive']
    },

    // === MULTILINGUAL CHAPTER ===
    {
      url: 'multilingual/index.html',
      title: 'Multilingual Queries',
      chapter: 'multilingual',
      difficulty: 'intermediate',
      description: 'Query across 400+ languages. Handle labels, scripts, and translations.',
      keywords: ['multilingual', 'languages', 'labels', 'translations', 'scripts', 'international', 'i18n', 'localization']
    },
    {
      url: 'multilingual/labels.html',
      title: 'Label Service',
      chapter: 'multilingual',
      difficulty: 'intermediate',
      description: 'Use wikibase:label service with fallback chains and AUTO_LANGUAGE.',
      keywords: ['labels', 'wikibase:label', 'AUTO_LANGUAGE', 'fallback', 'rdfs:label', 'service']
    },
    {
      url: 'multilingual/languages.html',
      title: 'Language Tags',
      chapter: 'multilingual',
      difficulty: 'intermediate',
      description: 'Work with BCP 47 language tags, LANG() function, and LANGMATCHES().',
      keywords: ['language tags', 'BCP 47', 'LANG', 'LANGMATCHES', 'en', 'fr', 'de', 'regional variants', 'zh-hans']
    },
    {
      url: 'multilingual/scripts.html',
      title: 'Scripts & Writing',
      chapter: 'multilingual',
      difficulty: 'intermediate',
      description: 'Handle different writing systems: Latin, Cyrillic, Arabic, CJK, RTL scripts.',
      keywords: ['scripts', 'writing systems', 'cyrillic', 'arabic', 'chinese', 'japanese', 'korean', 'RTL', 'unicode']
    },
    {
      url: 'multilingual/translations.html',
      title: 'Translations',
      chapter: 'multilingual',
      difficulty: 'intermediate',
      description: 'Build translation tables and detect missing translations across languages.',
      keywords: ['translations', 'missing', 'coverage', 'language pairs', 'comparison', 'localization']
    },
    {
      url: 'multilingual/lexemes.html',
      title: 'Lexicographical Data',
      chapter: 'multilingual',
      difficulty: 'advanced',
      description: 'Query Wikidata lexemes with ontolex vocabulary for forms and senses.',
      keywords: ['lexemes', 'ontolex', 'forms', 'senses', 'wikibase:lemma', 'dictionary', 'linguistics', 'morphology']
    },

    // === PATTERNS CHAPTER ===
    {
      url: 'patterns/index.html',
      title: 'Query Patterns',
      chapter: 'patterns',
      difficulty: 'advanced',
      description: 'Reusable patterns for hierarchy traversal, deduplication, ranking, and optimization.',
      keywords: ['patterns', 'best practices', 'reusable', 'design patterns', 'techniques', 'optimization']
    },
    {
      url: 'patterns/hierarchy.html',
      title: 'Hierarchy Traversal',
      chapter: 'patterns',
      difficulty: 'intermediate',
      description: 'Navigate class hierarchies using P31/P279* property paths.',
      keywords: ['hierarchy', 'P31', 'P279', 'instance of', 'subclass', 'property paths', 'transitive', 'tree']
    },
    {
      url: 'patterns/linking.html',
      title: 'Entity Linking',
      chapter: 'patterns',
      difficulty: 'intermediate',
      description: 'Connect entities using external IDs like VIAF, GND, ORCID, GitHub.',
      keywords: ['linking', 'external IDs', 'VIAF', 'GND', 'ORCID', 'GitHub', 'identifiers', 'sameAs', 'cross-reference']
    },
    {
      url: 'patterns/ranking.html',
      title: 'Ranking & Scoring',
      chapter: 'patterns',
      difficulty: 'advanced',
      description: 'Compute relevance scores using sitelinks, statements, and custom formulas.',
      keywords: ['ranking', 'scoring', 'sitelinks', 'statements', 'relevance', 'popularity', 'ordering', 'weight']
    },
    {
      url: 'patterns/dedup.html',
      title: 'Deduplication',
      chapter: 'patterns',
      difficulty: 'intermediate',
      description: 'Handle multi-valued properties with SAMPLE, GROUP_CONCAT, and DISTINCT.',
      keywords: ['deduplication', 'duplicates', 'SAMPLE', 'GROUP_CONCAT', 'DISTINCT', 'multi-valued', 'aggregation']
    },
    {
      url: 'patterns/optimization.html',
      title: 'Query Optimization',
      chapter: 'patterns',
      difficulty: 'advanced',
      description: 'Write faster queries with proper pattern ordering, hints, and avoiding anti-patterns.',
      keywords: ['optimization', 'performance', 'fast', 'slow', 'timeout', 'hints', 'anti-patterns', 'LIMIT']
    },
    {
      url: 'patterns/debugging.html',
      title: 'Debugging Queries',
      chapter: 'patterns',
      difficulty: 'intermediate',
      description: 'Diagnose empty results, timeouts, and syntax errors with debugging techniques.',
      keywords: ['debugging', 'empty results', 'timeout', 'syntax error', 'troubleshooting', 'diagnosis', 'fix']
    },

    // === OTHER PAGES ===
    {
      url: 'index.html',
      title: 'SPARQLqueries Home',
      chapter: 'home',
      difficulty: 'beginner',
      description: 'Learn SPARQL through real-world queries on Wikidata.',
      keywords: ['home', 'sparql', 'wikidata', 'learning', 'queries', 'introduction', 'tutorial']
    },
    {
      url: 'about.html',
      title: 'About SPARQLqueries',
      chapter: 'about',
      difficulty: 'beginner',
      description: 'About this open-source SPARQL learning resource.',
      keywords: ['about', 'project', 'author', 'license', 'open source', 'contribution']
    }
  ],

  chapters: {
    'basic': { name: 'Basic Queries', color: '#60a5fa' },
    'expressions': { name: 'Expressions', color: '#f472b6' },
    'aggregate': { name: 'Aggregate', color: '#34d399' },
    'advanced': { name: 'Advanced', color: '#a78bfa' },
    'federation': { name: 'Federation', color: '#fbbf24' },
    'temporal': { name: 'Temporal', color: '#a855f7' },
    'geospatial': { name: 'Geospatial', color: '#22c55e' },
    'multilingual': { name: 'Multilingual', color: '#ec4899' },
    'patterns': { name: 'Patterns', color: '#6366f1' }
  },

  difficulties: ['beginner', 'intermediate', 'advanced']
};
