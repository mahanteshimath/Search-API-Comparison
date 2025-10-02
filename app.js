// Complete Search API Comparison Tool - All 19 Providers
// Application data from the comprehensive provider database
const providersData = {
  "providers": [
    {
      "name": "Perplexity Search API",
      "pricePerK": 5.00,
      "freeTier": "None",
      "apiType": "Search API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Raw web search results, advanced filtering capabilities, built for AI agents",
      "bestFor": "AI agents needing raw web data with filtering",
      "limitations": "No free tier, newer API",
      "prosVsPerplexity": ["This is the baseline comparison"],
      "consVsPerplexity": ["N/A - This is Perplexity"],
      "useCase": "Reference provider",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Raw web results, advanced filtering, built for AI agents",
      "isBaseline": true
    },
    {
      "name": "Serper",
      "pricePerK": 0.30,
      "freeTier": "None",
      "apiType": "SERP API",
      "responseTime": "1-2s",
      "status": "Active",
      "keyFeatures": "Ultra-fast Google SERP results, cheapest pricing",
      "bestFor": "High-volume, speed-critical applications",
      "limitations": "No free tier, limited to Google SERP only",
      "prosVsPerplexity": ["94% cheaper pricing", "Ultra-fast response times", "Focused on speed and cost", "Optimized for Google results"],
      "consVsPerplexity": ["No free tier", "SERP data only (not raw web)", "Limited to Google results", "No advanced filtering", "Requires SERP parsing"],
      "useCase": "Budget-conscious, high-volume projects",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Fastest response time, ultra-competitive pricing"
    },
    {
      "name": "WebSearchAPI.ai",
      "pricePerK": 1.00,
      "freeTier": "100 total",
      "apiType": "Search API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Multi-format search (web/images/videos/news), very cheap pricing",
      "bestFor": "Budget-conscious projects, multi-format search needs",
      "limitations": "Very new provider, limited track record",
      "prosVsPerplexity": ["80% cheaper", "Multi-format search", "Some free tier", "Supports multiple content types"],
      "consVsPerplexity": ["New provider with limited track record", "Very limited free tier", "Less advanced filtering", "Unproven reliability"],
      "useCase": "Budget projects needing multi-format search",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Cheapest option, multi-format (web/images/videos/news)"
    },
    {
      "name": "HasData",
      "pricePerK": 1.22,
      "freeTier": "None",
      "apiType": "SERP API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Real-time SERP data, LLM-ready output format",
      "bestFor": "Real-time SERP analysis, LLM applications",
      "limitations": "No free tier, limited documentation",
      "prosVsPerplexity": ["76% cheaper", "Real-time results", "LLM-optimized output", "Fast response times"],
      "consVsPerplexity": ["No free tier", "SERP focus vs raw web data", "Limited filtering options", "Smaller provider"],
      "useCase": "Cost-effective SERP analysis",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Real-time, LLM-ready output"
    },
    {
      "name": "OxyLabs",
      "pricePerK": 2.80,
      "freeTier": "None",
      "apiType": "SERP API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Enterprise-grade infrastructure, proxy network",
      "bestFor": "Enterprise applications requiring high reliability",
      "limitations": "No free tier, enterprise-focused pricing",
      "prosVsPerplexity": ["44% cheaper", "Enterprise-grade reliability", "Global proxy network", "High success rates"],
      "consVsPerplexity": ["No free tier", "SERP focus", "Enterprise complexity", "Higher minimum commitments"],
      "useCase": "Enterprise SERP collection",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Enterprise-grade, proxy support"
    },
    {
      "name": "Bright Data SERP API",
      "pricePerK": 3.00,
      "freeTier": "7-day trial",
      "apiType": "SERP API",
      "responseTime": "Under 5s",
      "status": "Active",
      "keyFeatures": "Enterprise-grade proxies, global coverage, high reliability",
      "bestFor": "Enterprise applications, geo-targeted search",
      "limitations": "Expensive for small projects, minimum $499/month plan",
      "prosVsPerplexity": ["40% cheaper per request", "Enterprise-grade infrastructure", "Global proxy network", "High reliability", "Geo-targeting"],
      "consVsPerplexity": ["High minimum monthly commitment", "Enterprise focus vs developer-friendly", "SERP focus vs raw web data", "Complex pricing"],
      "useCase": "Enterprise geo-targeted search",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Enterprise-grade proxies, global coverage, high reliability"
    },
    {
      "name": "Apify",
      "pricePerK": 3.50,
      "freeTier": "5000 credits",
      "apiType": "Web Scraping",
      "responseTime": "Variable",
      "status": "Active",
      "keyFeatures": "Platform approach with custom actors, web scraping focus",
      "bestFor": "Custom scraping solutions, data extraction projects",
      "limitations": "Complex platform, requires technical setup",
      "prosVsPerplexity": ["30% cheaper", "5000 free credits", "Highly customizable", "Full web scraping platform", "Custom actors"],
      "consVsPerplexity": ["Complex setup required", "Platform learning curve", "Not pure search API", "Variable response times"],
      "useCase": "Custom web scraping projects",
      "dailyLimit": "Based on credits",
      "uniqueSellingPoints": "Platform approach, custom actors"
    },
    {
      "name": "SearchAPI",
      "pricePerK": 4.00,
      "freeTier": "100 requests",
      "apiType": "SERP API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Real-time SERP data, multiple search engines",
      "bestFor": "Real-time SERP monitoring, multiple engine coverage",
      "limitations": "SERP parsing required, limited free tier",
      "prosVsPerplexity": ["20% cheaper", "100 free requests", "Multiple search engines", "Real-time updates"],
      "consVsPerplexity": ["SERP data requires parsing", "Limited free tier", "Less control over raw results", "Multi-engine complexity"],
      "useCase": "Multi-engine SERP monitoring",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Real-time SERP, multiple engines"
    },
    {
      "name": "Google Custom Search JSON API",
      "pricePerK": 5.00,
      "freeTier": "100/day",
      "apiType": "Custom Search",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Google-powered search, custom search engines, reliable infrastructure",
      "bestFor": "Custom search implementations, established applications",
      "limitations": "Limited to 10K requests/day, Google dependency",
      "prosVsPerplexity": ["100 free daily queries", "Google's vast search index", "Proven reliability", "Custom search engine creation"],
      "consVsPerplexity": ["10K daily limit", "Less filtering control", "Google dependency", "Structured for custom engines vs raw results"],
      "useCase": "Custom search implementations",
      "dailyLimit": "10,000",
      "uniqueSellingPoints": "Google-powered, custom search engines, reliable infrastructure"
    },
    {
      "name": "Brave Search API",
      "pricePerK": 5.00,
      "freeTier": "2K/month",
      "apiType": "Search API",
      "responseTime": "Fast (<1s for 95%)",
      "status": "Active",
      "keyFeatures": "Independent index, privacy-focused, no tracking",
      "bestFor": "Privacy-conscious applications, independent results",
      "limitations": "Smaller index than Google, $3 minimum for advanced features",
      "prosVsPerplexity": ["2000 free monthly queries", "Privacy-focused approach", "Independent from Google", "Sub-second response times"],
      "consVsPerplexity": ["Smaller search index", "Less advanced filtering", "Minimum payment required for features", "Limited compared to Google's coverage"],
      "useCase": "Privacy-conscious applications",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Independent index, privacy-focused, no tracking"
    },
    {
      "name": "Exa.ai",
      "pricePerK": 5.00,
      "freeTier": "$10 credit",
      "apiType": "AI Search",
      "responseTime": "45-90s (research)",
      "status": "Active",
      "keyFeatures": "Semantic/neural search, find similar pages, research automation",
      "bestFor": "Semantic search, research automation, finding similar content",
      "limitations": "Focused on semantic search, higher latency for research",
      "prosVsPerplexity": ["Semantic search capabilities", "Neural embeddings", "Find similar content", "Research automation", "AI-powered relevance"],
      "consVsPerplexity": ["Much slower response times", "Focused on semantic vs raw search", "Higher latency", "Complex for simple queries"],
      "useCase": "Research and semantic search",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Semantic/neural search, find similar pages, research agent"
    },
    {
      "name": "Tavily",
      "pricePerK": 8.00,
      "freeTier": "1K/month",
      "apiType": "AI Search",
      "responseTime": "40s (advanced)",
      "status": "Active",
      "keyFeatures": "AI-optimized search results, citation-ready outputs",
      "bestFor": "AI/LLM applications requiring citations",
      "limitations": "Slower for advanced searches, higher cost than competitors",
      "prosVsPerplexity": ["1000 free monthly queries", "AI-optimized results", "Citation-ready outputs", "Built for LLMs", "Advanced filtering"],
      "consVsPerplexity": ["60% more expensive", "Slower response times", "Less control over raw data", "Optimized for specific use cases"],
      "useCase": "LLM applications needing citations",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "AI-optimized results, citation-ready, LLM-specific"
    },
    {
      "name": "DataForSEO",
      "pricePerK": 10.00,
      "freeTier": "None",
      "apiType": "SERP API",
      "responseTime": "Variable",
      "status": "Active",
      "keyFeatures": "Comprehensive SERP data, live/historical methods, AI summary",
      "bestFor": "SEO analysis, comprehensive market research",
      "limitations": "No free tier, complex API structure",
      "prosVsPerplexity": ["Comprehensive SERP coverage", "Historical data", "AI-powered summaries", "SEO-focused features"],
      "consVsPerplexity": ["100% more expensive", "No free tier", "Complex API", "SERP focus vs raw web", "Slower for simple queries"],
      "useCase": "Professional SEO analysis",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Live/Standard methods, AI summary"
    },
    {
      "name": "ZenSerp",
      "pricePerK": 12.00,
      "freeTier": "100 requests",
      "apiType": "SERP API",
      "responseTime": "Fast",
      "status": "Active",
      "keyFeatures": "Multiple search engines, organic results focus",
      "bestFor": "Multi-engine SERP analysis, organic result tracking",
      "limitations": "Expensive for high volume, limited free tier",
      "prosVsPerplexity": ["100 free requests", "Multiple search engines", "Organic results focus", "Clean API design"],
      "consVsPerplexity": ["140% more expensive", "Limited free tier", "SERP parsing required", "Less flexible than raw results"],
      "useCase": "Multi-engine organic result tracking",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Multiple engines, organic results"
    },
    {
      "name": "ScraperAPI",
      "pricePerK": 12.25,
      "freeTier": "5000 credits",
      "apiType": "Web Scraping",
      "responseTime": "Variable",
      "status": "Active",
      "keyFeatures": "Proxy network, CAPTCHA solving, web scraping focus",
      "bestFor": "General web scraping, handling anti-bot measures",
      "limitations": "Not specifically optimized for search, variable performance",
      "prosVsPerplexity": ["5000 free credits", "Proxy network", "CAPTCHA solving", "General web scraping", "Global proxy coverage"],
      "consVsPerplexity": ["145% more expensive", "Not search-specific", "Variable response times", "Complex for simple search needs"],
      "useCase": "General web scraping with anti-bot handling",
      "dailyLimit": "Based on credits",
      "uniqueSellingPoints": "Proxy network, CAPTCHA solving"
    },
    {
      "name": "SerpApi",
      "pricePerK": 15.00,
      "freeTier": "250/month",
      "apiType": "SERP API",
      "responseTime": "1-3s average",
      "status": "Active",
      "keyFeatures": "Multi-engine SERP support, structured data, mature platform",
      "bestFor": "Comprehensive SERP analysis, established workflows",
      "limitations": "Expensive for high volume, complex pricing tiers",
      "prosVsPerplexity": ["250 free monthly queries", "Multi-engine support", "Structured SERP data", "Mature platform", "Comprehensive documentation", "Enterprise features"],
      "consVsPerplexity": ["200% more expensive", "SERP parsing overhead", "Complex pricing structure", "Overkill for simple needs"],
      "useCase": "Enterprise SERP analysis",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Multi-engine SERP, structured data, mature platform"
    },
    {
      "name": "Firecrawl Search",
      "pricePerK": 19.00,
      "freeTier": "None",
      "apiType": "AI Search",
      "responseTime": "Variable",
      "status": "Active",
      "keyFeatures": "Crawling + search combination, LLM integration",
      "bestFor": "AI applications requiring both crawling and search",
      "limitations": "Expensive, complex feature set",
      "prosVsPerplexity": ["Crawling + search combination", "LLM integration", "Comprehensive data extraction", "AI-optimized"],
      "consVsPerplexity": ["280% more expensive", "No free tier", "Complex for simple search", "Overkill for basic needs"],
      "useCase": "AI applications with comprehensive data needs",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "Crawling + search, LLM integration"
    },
    {
      "name": "Bing Search API (Deprecated)",
      "pricePerK": 25.00,
      "freeTier": "1000/month",
      "apiType": "Search API",
      "responseTime": "Fast",
      "status": "Deprecated",
      "keyFeatures": "Multi-type search (web/images/videos/news) - No longer available",
      "bestFor": "Previously: Microsoft ecosystem integration",
      "limitations": "Deprecated August 2025, no longer available",
      "prosVsPerplexity": ["Was: 1000 free monthly queries", "Was: Multi-format search", "Was: Microsoft integration"],
      "consVsPerplexity": ["Deprecated - no longer available", "Was 400% more expensive", "Forced migration to alternatives"],
      "useCase": "No longer available - historical reference",
      "dailyLimit": "N/A (Deprecated)",
      "uniqueSellingPoints": "Multi-type search (deprecated Aug 2025)"
    },
    {
      "name": "Microsoft Grounding with Bing",
      "pricePerK": 35.00,
      "freeTier": "None",
      "apiType": "AI Grounding",
      "responseTime": "Variable",
      "status": "Active",
      "keyFeatures": "AI agent integration, Azure ecosystem, grounding service",
      "bestFor": "Azure AI Foundry applications, enterprise AI agents",
      "limitations": "Extremely expensive, Azure-only, limited to AI grounding use cases",
      "prosVsPerplexity": ["AI agent integration", "Azure ecosystem", "Enterprise support", "Grounding-specific features"],
      "consVsPerplexity": ["600% more expensive", "No free tier", "Azure-only", "Limited to specific use cases", "Enterprise complexity"],
      "useCase": "Azure AI Foundry grounding",
      "dailyLimit": "Unlimited",
      "uniqueSellingPoints": "AI agent integration, Azure-only"
    }
  ],
  "marketStats": {
    "totalProviders": 19,
    "activeProviders": 18,
    "deprecatedProviders": 1,
    "averagePrice": 9.06,
    "medianPrice": 5.00,
    "cheapestPrice": 0.30,
    "mostExpensive": 35.00,
    "cheaperThanPerplexity": 7,
    "sameAsPerplexity": 4,
    "moreExpensiveThanPerplexity": 8
  },
  "priceRanges": {
    "budget": {"min": 0, "max": 3, "count": 4, "label": "Budget (<$3/1K)"},
    "midTier": {"min": 3, "max": 8, "count": 8, "label": "Mid-tier ($3-8/1K)"},
    "premium": {"min": 8, "max": 15, "count": 4, "label": "Premium ($8-15/1K)"},
    "enterprise": {"min": 15, "max": 40, "count": 3, "label": "Enterprise (>$15/1K)"}
  },
  "apiTypes": {
    "Search API": 4,
    "SERP API": 8,
    "AI Search": 3,
    "Web Scraping": 2,
    "Custom Search": 1,
    "AI Grounding": 1
  }
};

// Application state
let filteredProviders = [...providersData.providers];
let currentFilter = 'all';
let sortDirection = {};

// DOM elements
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const apiTypeFilter = document.getElementById('apiTypeFilter');
const filterButtons = document.querySelectorAll('.filter-btn');
const providersTableBody = document.getElementById('providersTableBody');
const sortableHeaders = document.querySelectorAll('.sortable');
const comparisonModal = document.getElementById('comparisonModal');
const closeModal = document.getElementById('closeModal');
const getRecommendationsBtn = document.getElementById('getRecommendations');
const recommendationsResult = document.getElementById('recommendationsResult');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateStats();
    renderProvidersTable();
    initializeCharts();
    setupEventListeners();
}

function updateStats() {
    // Update the overview stats based on actual data
    document.getElementById('totalProviders').textContent = providersData.marketStats.totalProviders;
    document.getElementById('priceRange').textContent = `$${providersData.marketStats.cheapestPrice.toFixed(2)} - $${providersData.marketStats.mostExpensive.toFixed(2)}`;
    document.getElementById('cheaperCount').textContent = providersData.marketStats.cheaperThanPerplexity;
    document.getElementById('marketSegments').textContent = Object.keys(providersData.apiTypes).length;
}

function renderProvidersTable() {
    const tbody = document.getElementById('providersTableBody');
    tbody.innerHTML = '';
    
    filteredProviders.forEach(provider => {
        const row = createProviderRow(provider);
        tbody.appendChild(row);
    });
}

function createProviderRow(provider) {
    const row = document.createElement('tr');
    row.className = 'provider-row';
    row.dataset.provider = provider.name;
    row.tabIndex = 0; // Make focusable for accessibility
    
    if (provider.isBaseline || provider.name === 'Perplexity Search API') {
        row.classList.add('perplexity');
    }
    
    const priceClass = getPriceClass(provider.pricePerK);
    const statusClass = provider.status === 'Deprecated' ? 'status--deprecated' : 'status--success';
    
    row.innerHTML = `
        <td><strong>${provider.name}</strong></td>
        <td class="price-cell ${priceClass}">$${provider.pricePerK.toFixed(2)}</td>
        <td>${provider.freeTier}</td>
        <td>${provider.apiType}</td>
        <td>${provider.responseTime}</td>
        <td><span class="status ${statusClass}">${provider.status}</span></td>
        <td class="features-cell">${provider.keyFeatures}</td>
    `;
    
    row.addEventListener('click', () => openComparisonModal(provider));
    row.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openComparisonModal(provider);
        }
    });
    
    return row;
}

function getPriceClass(price) {
    const perplexityPrice = 5.00;
    if (price < perplexityPrice) return 'price-cheaper';
    if (price === perplexityPrice) return 'price-same';
    return 'price-expensive';
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', applyFilters);
    
    // Filter dropdowns
    statusFilter.addEventListener('change', applyFilters);
    apiTypeFilter.addEventListener('change', applyFilters);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Sort functionality
    sortableHeaders.forEach(header => {
        header.addEventListener('click', handleSort);
    });
    
    // Modal functionality
    closeModal.addEventListener('click', closeComparisonModal);
    comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) {
            closeComparisonModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !comparisonModal.classList.contains('hidden')) {
            closeComparisonModal();
        }
    });
    
    // Recommendations
    getRecommendationsBtn.addEventListener('click', generateRecommendations);
}

function handleFilter(e) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    applyFilters();
}

function applyFilters() {
    // Start with all providers
    let providers = [...providersData.providers];
    
    // Apply search filter
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        providers = providers.filter(provider =>
            provider.name.toLowerCase().includes(query) ||
            provider.apiType.toLowerCase().includes(query) ||
            provider.keyFeatures.toLowerCase().includes(query) ||
            provider.bestFor.toLowerCase().includes(query)
        );
    }
    
    // Apply status filter
    const statusValue = statusFilter.value;
    if (statusValue !== 'all') {
        if (statusValue === 'active') {
            providers = providers.filter(p => p.status === 'Active');
        } else if (statusValue === 'deprecated') {
            providers = providers.filter(p => p.status === 'Deprecated');
        }
    }
    
    // Apply API type filter
    const apiTypeValue = apiTypeFilter.value;
    if (apiTypeValue !== 'all') {
        providers = providers.filter(p => p.apiType === apiTypeValue);
    }
    
    // Apply price range filter
    if (currentFilter !== 'all') {
        providers = providers.filter(provider => {
            switch (currentFilter) {
                case 'budget':
                    return provider.pricePerK < 3;
                case 'mid-tier':
                    return provider.pricePerK >= 3 && provider.pricePerK <= 8;
                case 'premium':
                    return provider.pricePerK > 8 && provider.pricePerK <= 15;
                case 'enterprise':
                    return provider.pricePerK > 15;
                default:
                    return true;
            }
        });
    }
    
    filteredProviders = providers;
    renderProvidersTable();
}

function handleSort(e) {
    const column = e.target.dataset.sort;
    const isAsc = sortDirection[column] !== 'asc';
    sortDirection[column] = isAsc ? 'asc' : 'desc';
    
    filteredProviders.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        // Handle different data types
        if (column === 'pricePerK') {
            aVal = parseFloat(aVal);
            bVal = parseFloat(bVal);
        } else if (typeof aVal === 'string' && typeof bVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (aVal < bVal) return isAsc ? -1 : 1;
        if (aVal > bVal) return isAsc ? 1 : -1;
        return 0;
    });
    
    renderProvidersTable();
    
    // Update sort indicator
    sortableHeaders.forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
    });
    e.target.classList.add(isAsc ? 'sort-asc' : 'sort-desc');
}

function openComparisonModal(provider) {
    const perplexity = providersData.providers.find(p => p.isBaseline);
    
    document.getElementById('modalTitle').textContent = `${provider.name} vs Perplexity`;
    document.getElementById('selectedProviderName').textContent = provider.name;
    
    // Fill provider details
    document.getElementById('selectedProviderDetails').innerHTML = `
        <div><strong>Price:</strong> $${provider.pricePerK}/1K</div>
        <div><strong>Free Tier:</strong> ${provider.freeTier}</div>
        <div><strong>API Type:</strong> ${provider.apiType}</div>
        <div><strong>Response Time:</strong> ${provider.responseTime}</div>
        <div><strong>Status:</strong> ${provider.status}</div>
        <div><strong>Best For:</strong> ${provider.bestFor}</div>
        <div><strong>Key Features:</strong> ${provider.keyFeatures}</div>
        <div><strong>Daily Limit:</strong> ${provider.dailyLimit}</div>
    `;
    
    // Add cost analysis
    const costDifference = ((provider.pricePerK - perplexity.pricePerK) / perplexity.pricePerK * 100).toFixed(0);
    const costAnalysis = provider.pricePerK < perplexity.pricePerK 
        ? `<div class="cost-item text-success"><strong>Cost Savings:</strong> ${Math.abs(costDifference)}% cheaper</div>`
        : provider.pricePerK > perplexity.pricePerK 
        ? `<div class="cost-item text-error"><strong>Cost Premium:</strong> ${costDifference}% more expensive</div>`
        : `<div class="cost-item text-warning"><strong>Cost:</strong> Same as Perplexity</div>`;
    
    document.getElementById('selectedProviderCost').innerHTML = costAnalysis;
    
    document.getElementById('perplexityDetails').innerHTML = `
        <div><strong>Price:</strong> $${perplexity.pricePerK}/1K</div>
        <div><strong>Free Tier:</strong> ${perplexity.freeTier}</div>
        <div><strong>API Type:</strong> ${perplexity.apiType}</div>
        <div><strong>Response Time:</strong> ${perplexity.responseTime}</div>
        <div><strong>Status:</strong> ${perplexity.status}</div>
        <div><strong>Best For:</strong> ${perplexity.bestFor}</div>
        <div><strong>Key Features:</strong> ${perplexity.keyFeatures}</div>
        <div><strong>Daily Limit:</strong> ${perplexity.dailyLimit}</div>
    `;
    
    // Fill pros and cons
    const prosList = document.getElementById('prosList');
    const consList = document.getElementById('consList');
    
    prosList.innerHTML = '';
    consList.innerHTML = '';
    
    provider.prosVsPerplexity.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        prosList.appendChild(li);
    });
    
    provider.consVsPerplexity.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        consList.appendChild(li);
    });
    
    // Add feature comparison matrix
    generateFeatureComparison(provider, perplexity);
    
    comparisonModal.classList.remove('hidden');
}

function generateFeatureComparison(provider, perplexity) {
    const features = [
        { name: 'Free Tier', provider: provider.freeTier !== 'None', perplexity: false },
        { name: 'Real-time Results', provider: provider.responseTime.includes('Fast'), perplexity: true },
        { name: 'Multi-format Search', provider: provider.keyFeatures.includes('multi-format'), perplexity: false },
        { name: 'Enterprise Features', provider: provider.keyFeatures.includes('Enterprise'), perplexity: false },
        { name: 'AI Integration', provider: provider.apiType.includes('AI'), perplexity: true },
        { name: 'Custom Filtering', provider: provider.keyFeatures.includes('filtering'), perplexity: true }
    ];
    
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = '';
    
    features.forEach(feature => {
        const item = document.createElement('div');
        item.className = 'feature-item';
        
        const providerCheck = feature.provider ? '✓' : '✗';
        const perplexityCheck = feature.perplexity ? '✓' : '✗';
        const providerClass = feature.provider ? 'yes' : 'no';
        const perplexityClass = feature.perplexity ? 'yes' : 'no';
        
        item.innerHTML = `
            <span>${feature.name}</span>
            <div style="display: flex; gap: 8px; margin-left: auto;">
                <div class="feature-check ${providerClass}">${providerCheck}</div>
                <span style="font-size: 12px;">vs</span>
                <div class="feature-check ${perplexityClass}">${perplexityCheck}</div>
            </div>
        `;
        
        featuresGrid.appendChild(item);
    });
}

function closeComparisonModal() {
    comparisonModal.classList.add('hidden');
}

function initializeCharts() {
    createPriceChart();
    createFreeTierChart();
    createMarketSegmentChart();
    createApiTypeChart();
}

function createPriceChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const providers = [...providersData.providers].sort((a, b) => a.pricePerK - b.pricePerK);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: providers.map(p => p.name.replace(' API', '').replace(' Search', '')),
            datasets: [{
                label: 'Price per 1K requests ($)',
                data: providers.map(p => p.pricePerK),
                backgroundColor: providers.map(p => 
                    p.isBaseline ? '#1FB8CD' : 
                    p.pricePerK < 5 ? '#5D878F' : 
                    p.pricePerK > 15 ? '#B4413C' :
                    p.pricePerK > 8 ? '#944454' : '#FFC185'
                ),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const provider = providers[context.dataIndex];
                            return [
                                `Price: $${provider.pricePerK}/1K`,
                                `Type: ${provider.apiType}`,
                                `Status: ${provider.status}`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price ($)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Providers'
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function createFreeTierChart() {
    const ctx = document.getElementById('freeTierChart').getContext('2d');
    const providers = providersData.providers.filter(p => p.freeTier !== 'None');
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Providers with Free Tiers',
                data: providers.map(p => ({
                    x: p.pricePerK,
                    y: getFreeTierValue(p.freeTier),
                    label: p.name
                })),
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw.label}: $${context.parsed.x}/1K, ${providers[context.dataIndex].freeTier} free`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Price per 1K ($)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Free Tier Value (estimated requests)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

function createMarketSegmentChart() {
    const ctx = document.getElementById('segmentChart').getContext('2d');
    
    const segments = {
        'Budget (<$3)': 0,
        'Mid-tier ($3-8)': 0,
        'Premium ($8-15)': 0,
        'Enterprise (>$15)': 0
    };
    
    providersData.providers.forEach(p => {
        if (p.pricePerK < 3) segments['Budget (<$3)']++;
        else if (p.pricePerK <= 8) segments['Mid-tier ($3-8)']++;
        else if (p.pricePerK <= 15) segments['Premium ($8-15)']++;
        else segments['Enterprise (>$15)']++;
    });
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(segments),
            datasets: [{
                data: Object.values(segments),
                backgroundColor: ['#5D878F', '#FFC185', '#944454', '#B4413C'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / providersData.marketStats.totalProviders) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} providers (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createApiTypeChart() {
    const ctx = document.getElementById('apiTypeChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(providersData.apiTypes),
            datasets: [{
                data: Object.values(providersData.apiTypes),
                backgroundColor: ['#1FB8CD', '#FFC185', '#5D878F', '#944454', '#B4413C', '#ECEBD5'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / providersData.marketStats.totalProviders) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} providers (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function getFreeTierValue(freeTier) {
    if (freeTier === 'None') return 0;
    if (freeTier.includes('100/day')) return 3000; // ~100*30
    if (freeTier.includes('2K/month')) return 2000;
    if (freeTier.includes('1K/month')) return 1000;
    if (freeTier.includes('1000/month')) return 1000;
    if (freeTier.includes('250/month')) return 250;
    if (freeTier.includes('100 total')) return 100;
    if (freeTier.includes('100 requests')) return 100;
    if (freeTier.includes('$10 credit')) return 2000; // Estimate based on $5/1K
    if (freeTier.includes('7-day trial')) return 500; // Estimate
    if (freeTier.includes('5000 credits')) return 5000;
    return 0;
}

function generateRecommendations() {
    const useCase = document.getElementById('useCase').value;
    const volume = document.getElementById('volume').value;
    const budget = document.getElementById('budget').value;
    const technical = document.getElementById('technical').value;
    
    if (!useCase || !volume || !budget || !technical) {
        alert('Please fill in all fields to get personalized recommendations');
        return;
    }
    
    const recommendations = getRecommendations(useCase, volume, budget, technical);
    displayRecommendations(recommendations);
}

function getRecommendations(useCase, volume, budget, technical) {
    let scored = providersData.providers
        .filter(p => !p.isBaseline && p.status === 'Active') // Exclude Perplexity and deprecated
        .map(p => ({
            ...p,
            score: calculateRecommendationScore(p, useCase, volume, budget, technical)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    
    return scored.map(p => ({
        ...p,
        tradeoffs: generateTradeoffs(p, useCase, volume, budget, technical)
    }));
}

function calculateRecommendationScore(provider, useCase, volume, budget, technical) {
    let score = 0;
    
    // Budget scoring (40% weight)
    if (budget === 'budget' && provider.pricePerK < 3) score += 40;
    if (budget === 'mid' && provider.pricePerK >= 3 && provider.pricePerK <= 8) score += 40;
    if (budget === 'premium' && provider.pricePerK > 8 && provider.pricePerK <= 15) score += 40;
    if (budget === 'enterprise' && provider.pricePerK > 15) score += 40;
    
    // Use case scoring (30% weight)
    if (useCase === 'budget' && provider.pricePerK < 2) score += 30;
    if (useCase === 'enterprise' && provider.keyFeatures.includes('Enterprise')) score += 30;
    if (useCase === 'ai' && (provider.apiType.includes('AI') || provider.name.includes('Tavily'))) score += 30;
    if (useCase === 'research' && provider.name.includes('Exa')) score += 30;
    if (useCase === 'privacy' && provider.name.includes('Brave')) score += 30;
    if (useCase === 'speed' && provider.responseTime.includes('1-2s')) score += 30;
    if (useCase === 'multi-format' && provider.keyFeatures.includes('multi-format')) score += 30;
    
    // Volume scoring (15% weight)
    if (volume === 'low' && provider.freeTier !== 'None') score += 15;
    if (volume === 'medium' && provider.pricePerK < 8) score += 15;
    if (volume === 'high' && provider.pricePerK < 5) score += 15;
    if (volume === 'enterprise' && provider.keyFeatures.includes('Enterprise')) score += 15;
    
    // Technical requirements (15% weight)
    if (technical === 'simple' && !provider.limitations.includes('Complex')) score += 15;
    if (technical === 'advanced' && provider.keyFeatures.includes('filtering')) score += 15;
    if (technical === 'proxy' && provider.keyFeatures.includes('proxy')) score += 15;
    if (technical === 'realtime' && provider.keyFeatures.includes('Real-time')) score += 15;
    if (technical === 'semantic' && provider.keyFeatures.includes('Semantic')) score += 15;
    
    // Free tier bonus
    if (provider.freeTier !== 'None') score += 5;
    
    return score;
}

function generateTradeoffs(provider, useCase, volume, budget, technical) {
    const tradeoffs = [];
    const perplexityPrice = 5.00;
    
    if (provider.pricePerK < perplexityPrice) {
        tradeoffs.push(`${Math.round((perplexityPrice - provider.pricePerK) / perplexityPrice * 100)}% cheaper than Perplexity`);
    } else {
        tradeoffs.push(`${Math.round((provider.pricePerK - perplexityPrice) / perplexityPrice * 100)}% more expensive than Perplexity`);
    }
    
    if (provider.freeTier !== 'None') {
        tradeoffs.push('Includes free tier for testing');
    }
    
    if (provider.limitations) {
        tradeoffs.push(`Limitation: ${provider.limitations.split(',')[0]}`);
    }
    
    // Add specific advantages based on use case
    if (useCase === 'ai' && provider.apiType.includes('AI')) {
        tradeoffs.push('Optimized for AI/LLM applications');
    }
    
    if (technical === 'proxy' && provider.keyFeatures.includes('proxy')) {
        tradeoffs.push('Built-in proxy support');
    }
    
    return tradeoffs.join(' • ');
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendationsList');
    container.innerHTML = '';
    
    recommendations.forEach((provider, index) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card fade-in';
        
        card.innerHTML = `
            <div class="recommendation-score">Match Score: ${provider.score}%</div>
            <h4>${index + 1}. ${provider.name}</h4>
            <div class="recommendation-details">
                <span><strong>Price:</strong> $${provider.pricePerK}/1K</span>
                <span><strong>Free Tier:</strong> ${provider.freeTier}</span>
                <span><strong>Type:</strong> ${provider.apiType}</span>
                <span><strong>Response:</strong> ${provider.responseTime}</span>
                <span><strong>Status:</strong> ${provider.status}</span>
                <span><strong>Daily Limit:</strong> ${provider.dailyLimit}</span>
            </div>
            <div class="recommendation-tradeoffs">
                <strong>Key Trade-offs vs Perplexity:</strong> ${provider.tradeoffs}
            </div>
        `;
        
        // Make clickable to open detailed comparison
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openComparisonModal(provider));
        
        container.appendChild(card);
    });
    
    recommendationsResult.classList.remove('hidden');
    recommendationsResult.scrollIntoView({ behavior: 'smooth' });
}