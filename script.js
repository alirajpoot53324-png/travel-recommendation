const recommendations = [
  {
    category: "Beach",
    title: "Coastal escapes",
    description: "Slow mornings, clear water, and wide-open horizons for travelers who need a little more blue.",
    destinations: "Maldives · Bali",
    images: ["images/beach1.jpg", "images/beach2.jpg"],
    keywords: ["beach", "beaches", "maldives", "bali", "coast", "coastal"]
  },
  {
    category: "Beach",
    title: "Shores worth slowing down for",
    description: "Find peaceful coastlines, warm sunsets, and easy days beside the sea.",
    destinations: "Bali · Maldives",
    images: ["images/beach1.jpg", "images/beach2.jpg"],
    keywords: ["beach", "beaches", "shore", "coast", "coastal"]
  },
  {
    category: "Temple",
    title: "Sacred places",
    description: "Discover beautiful temples where architecture, history, and quiet moments meet.",
    destinations: "Kyoto · New Delhi",
    images: ["images/temple1.jpg", "images/temple2.jpg"],
    keywords: ["temple", "temples", "kyoto", "india", "japan", "new delhi"]
  },
  {
    category: "Country",
    title: "Japan in every season",
    description: "Move from neon city streets to peaceful gardens, mountain towns, and unforgettable food.",
    destinations: "Japan · Tokyo · Kyoto",
    images: ["images/country1.jpg", "images/country2.jpg"],
    keywords: ["japan", "country", "tokyo", "kyoto", "asia"]
  },
  {
    category: "Country",
    title: "The colors of India",
    description: "Experience a rich mix of flavors, landscapes, festivals, and stories across every region.",
    destinations: "India · Jaipur · Kerala",
    images: ["images/country1.jpg", "images/country2.jpg"],
    keywords: ["india", "country", "jaipur", "kerala", "asia"]
  },
  {
    category: "Country",
    title: "The spirit of Pakistan",
    description: "From lively cities to dramatic mountains, find warm hospitality and remarkable scenery.",
    destinations: "Pakistan · Hunza · Lahore",
    images: ["images/country1.jpg", "images/country2.jpg"],
    keywords: ["pakistan", "country", "hunza", "lahore", "asia"]
  }
];

function createRecommendationCard(recommendation) {
  return `
    <article class="recommendation-card">
      <img class="card-image" src="${recommendation.images[0]}" alt="${recommendation.title} destination">
      <div class="card-body">
        <span class="card-category">${recommendation.category}</span>
        <h3>${recommendation.title}</h3>
        <p>${recommendation.description}</p>
        <span class="card-location">${recommendation.destinations}</span>
        <img class="card-image card-image-secondary" src="${recommendation.images[1]}" alt="More views of ${recommendation.title}" loading="lazy">
      </div>
    </article>`;
}

function displayRecommendations(items, message) {
  const grid = document.getElementById("recommendationGrid");
  const resultMessage = document.getElementById("resultMessage");
  if (!grid || !resultMessage) return;

  resultMessage.textContent = message;
  grid.innerHTML = items.length
    ? items.map(createRecommendationCard).join("")
    : '<p class="no-results">We couldn\'t find that destination yet. Try searching for beach, temple, Japan, India, or Pakistan.</p>';
}

function searchRecommendations(event) {
  event.preventDefault();
  const input = document.getElementById("searchInput");
  const query = input.value.trim().toLowerCase();

  if (!query) {
    displayRecommendations(recommendations, "Showing all recommendations");
    return;
  }

  const matches = recommendations.filter((recommendation) =>
    recommendation.keywords.some((keyword) => keyword.includes(query) || query.includes(keyword))
  );
  displayRecommendations(matches, matches.length ? `Found ${matches.length} recommendation${matches.length === 1 ? "" : "s"}` : "No recommendations found");
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.value = "";
  displayRecommendations(recommendations, "Showing all recommendations");
}

function handleContactForm(event) {
  event.preventDefault();
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "Thank you! Your message has been received.";
  event.target.reset();
}

const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", searchRecommendations);
  displayRecommendations(recommendations, "Showing all recommendations");
}

const clearButton = document.getElementById("clearButton");
if (clearButton) clearButton.addEventListener("click", clearSearch);

const contactForm = document.getElementById("contactForm");
if (contactForm) contactForm.addEventListener("submit", handleContactForm);
