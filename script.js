// Casino Bonus Finder - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the casino offers data
    initCasinoData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Animation effects
    initAnimations();
});

// Setup event listeners for interactive elements
function setupEventListeners() {
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // In a real site, this would send the email to a server
                alert(`Thank you for subscribing with ${emailInput.value}! You'll receive the best casino offers in your inbox.`);
                emailInput.value = '';
            }
        });
    }
    
    // Add click handlers for offer cards to track clicks
    document.querySelectorAll('.offer-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
                // Don't trigger the card click if a button was clicked
                return;
            }
            
            const casinoName = this.querySelector('.card-title h3').textContent;
            console.log(`Casino card clicked: ${casinoName}`);
            // In a real implementation, this would track analytics
        });
    });
}

// Add animation effects to elements
function initAnimations() {
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.feature, .offer-card, .review-card, .faq-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Casino offers data
function initCasinoData() {
    // Top casino offers data
    const topOffers = [
        {
            name: "BetMGM Casino",
            logo: "https://example.com/logos/betmgm.png", // Placeholder, would be real in production
            rating: 4.9,
            description: "100% Deposit Match up to $1,500 + $25 on the House",
            details: [
                "No deposit bonus of $25 just for signing up",
                "100% match up to $1,500 on first deposit",
                "Wagering requirement: 15x on deposit match, 1x on no deposit bonus",
                "Available in MI, NJ, PA & WV"
            ],
            promoCode: "GDC1500",
            link: "#"
        },
        {
            name: "Caesars Palace Casino",
            logo: "https://example.com/logos/caesars.png", // Placeholder, would be real in production
            rating: 4.8,
            description: "100% Deposit Match up to $2,500",
            details: [
                "Generous match percentage on first deposit",
                "One of the highest maximum bonus amounts available",
                "Access to exclusive Caesars Rewards",
                "Easy-to-navigate platform"
            ],
            promoCode: "GAMBLING2500",
            link: "#"
        },
        {
            name: "Hard Rock Bet Casino",
            logo: "https://example.com/logos/hardrock.png", // Placeholder, would be real in production
            rating: 4.7,
            description: "100% Deposit Match up to $1,000 & 500 Free Spins",
            details: [
                "Free spins distributed as 50 per day for 10 days",
                "Free spins valid on select slot games",
                "Good mix of deposit bonus and free spins",
                "Available in New Jersey only"
            ],
            promoCode: "ROCKON",
            link: "#"
        },
        {
            name: "Jackpot City Casino",
            logo: "https://example.com/logos/jackpotcity.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "50% Deposit Match Up to $1,000 + 20 Bonus Spins",
            details: [
                "Ideal for mobile users with excellent app",
                "Bonus spins on popular slot titles",
                "Lower wagering requirements than competitors",
                "Regular promotions for existing players"
            ],
            promoCode: "JACKPOT50",
            link: "#"
        },
        {
            name: "Bet365 Casino",
            logo: "https://example.com/logos/bet365.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "10 Days of Spins (NJ) / 100% Up To $500 & 100 Spins (PA)",
            details: [
                "Different offers depending on your state",
                "Great for testing games with free spins",
                "Established international brand",
                "Clean, user-friendly interface"
            ],
            promoCode: "SPIN365",
            link: "#"
        }
    ];

    // No deposit bonus offers data
    const noDepositOffers = [
        {
            name: "BetMGM Casino",
            logo: "https://example.com/logos/betmgm.png", // Placeholder, would be real in production
            rating: 4.9,
            description: "$25 on the House",
            details: [
                "No deposit required to claim",
                "1x wagering requirement",
                "Available in MI, NJ, PA & WV",
                "Must be 21+ to claim"
            ],
            promoCode: "GDC1500",
            link: "#"
        },
        {
            name: "Borgata Casino",
            logo: "https://example.com/logos/borgata.png", // Placeholder, would be real in production
            rating: 4.7,
            description: "$20 on the House",
            details: [
                "Free $20 bonus just for signing up",
                "1x wagering requirement",
                "User-friendly platform",
                "Wide variety of casino games available"
            ],
            promoCode: "BORG20",
            link: "#"
        },
        {
            name: "Harrah's Casino",
            logo: "https://example.com/logos/harrahs.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "20 Free Spins",
            details: [
                "No deposit needed to claim free spins",
                "Spins available on select popular slot games",
                "Connected to Caesars Rewards program",
                "User-friendly mobile app"
            ],
            promoCode: "SPIN20",
            link: "#"
        },
        {
            name: "Mega Bonanza",
            logo: "https://example.com/logos/megabonanza.png", // Placeholder, would be real in production
            rating: 4.4,
            description: "7,500 GC and 2.5 free SC",
            details: [
                "Register and verify email to claim",
                "Additional 1,500 GC and 0.2 SC daily on login",
                "Play without making a deposit",
                "900+ games available to play"
            ],
            promoCode: "Not required",
            link: "#"
        },
        {
            name: "Wins Royal",
            logo: "https://example.com/logos/winsroyal.png", // Placeholder, would be real in production
            rating: 4.3,
            description: "30 Free Spins on Book of Dead",
            details: [
                "Free spins upon registration",
                "Popular Book of Dead slot game",
                "No deposit required",
                "Reasonable wagering requirements"
            ],
            promoCode: "WRC30",
            link: "#"
        }
    ];

    // Free spins offers data
    const freeSpinsOffers = [
        {
            name: "Hard Rock Bet Casino",
            logo: "https://example.com/logos/hardrock.png", // Placeholder, would be real in production
            rating: 4.7,
            description: "500 Free Spins + 100% up to $1,000",
            details: [
                "50 free spins daily for 10 days",
                "Spins valid on popular slot games",
                "Generous deposit match alongside spins",
                "Available in New Jersey"
            ],
            promoCode: "ROCKON",
            link: "#"
        },
        {
            name: "Harrah's Casino",
            logo: "https://example.com/logos/harrahs.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "20 Free Spins No Deposit",
            details: [
                "No deposit required for free spins",
                "Valid on selected slot games",
                "Connect to Caesars Rewards program",
                "Additional deposit bonuses available"
            ],
            promoCode: "SPIN20",
            link: "#"
        },
        {
            name: "Avantgarde Casino",
            logo: "https://example.com/logos/avantgarde.png", // Placeholder, would be real in production
            rating: 4.4,
            description: "20 Free Spins on Viking Victory",
            details: [
                "Free spins on sign up",
                "No deposit required",
                "200% welcome bonus available after deposit",
                "Bonus up to $2,000 on first deposit"
            ],
            promoCode: "Not required",
            link: "#"
        },
        {
            name: "McLuck Casino",
            logo: "https://example.com/logos/mcluck.png", // Placeholder, would be real in production
            rating: 4.3,
            description: "57,500 Gold Coins + 27.5 FREE SC",
            details: [
                "Social casino with free play options",
                "No deposit required for initial coins",
                "Regular promotions for additional free coins",
                "Available on desktop and mobile"
            ],
            promoCode: "WSNLUCK",
            link: "#"
        },
        {
            name: "Stake.us",
            logo: "https://example.com/logos/stakeus.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "25 Stake Cash + 250,000 Gold Coins",
            details: [
                "Popular sweepstakes casino",
                "No purchase necessary",
                "Cryptocurrency-friendly",
                "Available in most US states"
            ],
            promoCode: "WSN",
            link: "#"
        }
    ];

    // Welcome bonus offers data
    const welcomeBonusOffers = [
        {
            name: "Caesars Palace Casino",
            logo: "https://example.com/logos/caesars.png", // Placeholder, would be real in production
            rating: 4.8,
            description: "100% Deposit Match up to $2,500",
            details: [
                "One of the highest bonus amounts available",
                "User-friendly platform with wide game selection",
                "Access to Caesars Rewards program",
                "Compatible with desktop and mobile"
            ],
            promoCode: "GAMBLING2500",
            link: "#"
        },
        {
            name: "BetMGM Casino",
            logo: "https://example.com/logos/betmgm.png", // Placeholder, would be real in production
            rating: 4.9,
            description: "100% Deposit Match up to $1,500 + $25 No Deposit",
            details: [
                "Dual bonus offering with no deposit bonus",
                "Reasonable 15x wagering on deposit match",
                "Wide variety of games to use bonus on",
                "Top-rated casino platform"
            ],
            promoCode: "GDC1500",
            link: "#"
        },
        {
            name: "Jackpot City Casino",
            logo: "https://example.com/logos/jackpotcity.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "50% Deposit Match Up to $1,000 + 20 Bonus Spins",
            details: [
                "Ideal for mobile casino players",
                "Great slot selection for bonus spins",
                "Established international brand",
                "Regular promotions for returning players"
            ],
            promoCode: "JACKPOT50",
            link: "#"
        },
        {
            name: "Crown Coins Casino",
            logo: "https://example.com/logos/crowncoins.png", // Placeholder, would be real in production
            rating: 4.3,
            description: "150% More Coins on First Purchase + Spin to Win",
            details: [
                "First purchase bonus with 150% extra coins",
                "Opportunity to win up to 100SC and 2M CC",
                "Social casino format with prizes",
                "Large selection of games"
            ],
            promoCode: "Not required",
            link: "#"
        },
        {
            name: "Legendz Casino",
            logo: "https://example.com/logos/legendz.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "50% Extra on Your First Purchase + 3 SC & 500 GC Free",
            details: [
                "Free coins without purchase",
                "50% extra on first purchase",
                "Sweepstakes model with real prizes",
                "User-friendly interface"
            ],
            promoCode: "Not required",
            link: "#"
        }
    ];

    // Casino reviews data
    const casinoReviews = [
        {
            name: "BetMGM Casino",
            score: 9.4,
            badges: ["Top Rated", "Best Bonuses", "Fast Payouts"],
            highlights: "BetMGM offers an impressive game library with over 700 titles, including exclusive games you won't find elsewhere. Their customer service is available 24/7, and withdrawals are processed within 24 hours."
        },
        {
            name: "Caesars Palace Casino",
            score: 9.2,
            badges: ["Exclusive Offers", "VIP Program", "Live Dealer"],
            highlights: "Caesars stands out with its excellent VIP program and connection to the famous Caesars Rewards. Their selection of live dealer games is among the best in the US market, and they offer fast payouts to most payment methods."
        },
        {
            name: "Hard Rock Bet Casino",
            score: 9.0,
            badges: ["Best for Slots", "Mobile Friendly", "Regular Promotions"],
            highlights: "Hard Rock Bet features an incredible collection of slot games with various themes and progressive jackpots. Their mobile app provides a seamless experience, and they frequently run promotions for existing players."
        },
        {
            name: "Jackpot City Casino",
            score: 8.9,
            badges: ["Mobile Excellence", "Fast Withdrawals", "Great Game Variety"],
            highlights: "Jackpot City is perfect for mobile users with an app that works flawlessly on both iOS and Android. They offer a wide range of payment methods, and their game library includes titles from top developers like NetEnt and Microgaming."
        },
        {
            name: "Bet365 Casino",
            score: 8.7,
            badges: ["Trusted Brand", "Sports & Casino", "24/7 Support"],
            highlights: "Bet365 combines sports betting and casino gaming in one platform, making it convenient for players who enjoy both. Their customer support team is highly responsive, and the platform has a reputation for fair play and reliability."
        }
    ];

    // Render the offers to the page
    renderOffers('topOffersGrid', topOffers);
    renderOffers('noDepositGrid', noDepositOffers);
    renderOffers('freeSpinsGrid', freeSpinsOffers);
    renderOffers('welcomeBonusGrid', welcomeBonusOffers);
    
    // Render the casino reviews
    renderReviews('reviewsGrid', casinoReviews);
}

// Render offers to the specified container
function renderOffers(containerId, offersData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    offersData.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card';
        
        // Use a placeholder image if the logo URL is not valid
        const logoSrc = offer.logo.includes('example.com') 
            ? `https://via.placeholder.com/80x80.png?text=${offer.name.charAt(0)}`
            : offer.logo;
        
        offerCard.innerHTML = `
            <div class="card-header">
                <img src="${logoSrc}" alt="${offer.name} Logo" class="casino-logo">
                <div class="card-title">
                    <h3>${offer.name}</h3>
                    <div class="rating">
                        ${getStarRating(offer.rating)}
                        <span>${offer.rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="bonus-description">${offer.description}</div>
                <ul class="bonus-details">
                    ${offer.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <a href="${offer.link}" class="btn primary">Claim Bonus</a>
            </div>
            <div class="card-footer">
                <div class="promo-code">Code: ${offer.promoCode}</div>
                <div class="link-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
        
        container.appendChild(offerCard);
    });
}

// Render casino reviews to the specified container
function renderReviews(containerId, reviewsData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    reviewsData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <h3>${review.name}</h3>
                <div class="review-score">${review.score}/10</div>
            </div>
            <div class="review-content">
                <div class="review-badges">
                    ${review.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                </div>
                <div class="review-highlights">
                    <h4>Highlights</h4>
                    <p>${review.highlights}</p>
                </div>
            </div>
            <div class="review-footer">
                <a href="#" class="review-link">Read Full Review</a>
                <a href="#" class="btn primary">Visit Casino</a>
            </div>
        `;
        
        container.appendChild(reviewCard);
    });
}

// Generate star rating HTML based on rating number
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Add some visual effects to the page
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    const floatingChips = document.querySelectorAll('.floating-chip');
    
    // Parallax effect for floating chips
    floatingChips.forEach((chip, index) => {
        const speed = 0.05 * (index + 1);
        chip.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
}); 