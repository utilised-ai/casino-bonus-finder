// Casino Bonus Finder - Premium Edition JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add the search animation to top-offers section
    addSearchAnimation();
    
    // Initialize the casino offers data
    initCasinoData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Animation effects
    initAnimations();
    
    // Start the offer update simulation
    simulateOfferUpdates();
});

// Add search animation to show actively finding offers
function addSearchAnimation() {
    const topOffersSection = document.getElementById('top-offers');
    if (!topOffersSection) return;
    
    const container = topOffersSection.querySelector('.container');
    if (!container) return;
    
    const sectionIntro = container.querySelector('.section-intro');
    
    const searchAnimationDiv = document.createElement('div');
    searchAnimationDiv.className = 'search-animation';
    searchAnimationDiv.innerHTML = `
        <div class="search-bar">
            <div class="search-icon">
                <i class="fas fa-search"></i>
            </div>
            <div class="search-text">Finding the best casino offers for high rollers...</div>
            <div class="search-progress"></div>
        </div>
    `;
    
    container.insertBefore(searchAnimationDiv, sectionIntro.nextSibling);
    
    // Start the search animation cycle
    setTimeout(() => {
        updateSearchText('Analyzing bonus terms and conditions...');
    }, 3000);
    
    setTimeout(() => {
        updateSearchText('Verifying wagering requirements...');
    }, 6000);
    
    setTimeout(() => {
        updateSearchText('Sorting by exclusive VIP bonuses...');
    }, 9000);
    
    setTimeout(() => {
        updateSearchText('Deals updated! Showing latest luxury casino offers.');
    }, 12000);
}

// Update the search text in the animation
function updateSearchText(text) {
    const searchText = document.querySelector('.search-text');
    if (searchText) {
        searchText.textContent = text;
    }
}

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
                alert(`Thank you for subscribing with ${emailInput.value}! We'll send you exclusive premium casino offers.`);
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
    
    // Create copy functionality for promo codes
    document.querySelectorAll('.promo-code').forEach(codeElement => {
        codeElement.style.cursor = 'pointer';
        codeElement.title = 'Click to copy';
        
        codeElement.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text.replace('Code: ', '')).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1500);
            });
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
    
    // Add shine effect to premium elements
    addShineEffect('.btn.primary');
    addShineEffect('.casino-logo');
}

// Add shine effect to premium elements
function addShineEffect(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            const shine = document.createElement('div');
            shine.style.position = 'absolute';
            shine.style.top = '0';
            shine.style.left = '-100%';
            shine.style.width = '50%';
            shine.style.height = '100%';
            shine.style.background = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)';
            shine.style.transform = 'skewX(-25deg)';
            shine.style.transition = 'left 0.7s ease-in-out';
            shine.style.zIndex = '1';
            
            this.appendChild(shine);
            
            setTimeout(() => {
                shine.style.left = '150%';
            }, 100);
            
            setTimeout(() => {
                this.removeChild(shine);
            }, 800);
        });
    });
}

// Simulate offer updates to create the impression of live updating
function simulateOfferUpdates() {
    // Get all offer cards
    const offerCards = document.querySelectorAll('.offer-card');
    
    // Exit if no cards are found
    if (offerCards.length === 0) return;
    
    // Mark some offers as trending/hot
    markTrendingOffers(offerCards);
    
    // Add update timestamps to each card
    addUpdateTimestamps(offerCards);
    
    // Simulate periodic updates
    setInterval(() => {
        // Select a random card to "update"
        const randomIndex = Math.floor(Math.random() * offerCards.length);
        const randomCard = offerCards[randomIndex];
        
        // Flash the card to show it's being updated
        randomCard.style.transition = 'box-shadow 0.5s ease';
        randomCard.style.boxShadow = '0 0 25px rgba(212, 175, 55, 0.6)';
        
        // Update the timestamp
        const timestampEl = randomCard.querySelector('.offer-updated');
        if (timestampEl) {
            timestampEl.innerHTML = `<span class="live-dot"></span> Just updated`;
            
            // Reset the shadow after a brief moment
            setTimeout(() => {
                randomCard.style.boxShadow = '';
                
                // Then update the timestamp text
                setTimeout(() => {
                    timestampEl.innerHTML = `<span class="live-dot"></span> Updated just now`;
                }, 2000);
            }, 800);
        }
    }, 45000); // Update a random card every 45 seconds
}

// Mark some offers as trending/hot
function markTrendingOffers(offerCards) {
    // Select 30% of cards at random to mark as trending
    const numTrending = Math.ceil(offerCards.length * 0.3);
    const cardIndices = Array.from({ length: offerCards.length }, (_, i) => i);
    
    // Shuffle the array to randomly select cards
    for (let i = cardIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardIndices[i], cardIndices[j]] = [cardIndices[j], cardIndices[i]];
    }
    
    // Mark the selected cards as trending
    for (let i = 0; i < numTrending; i++) {
        offerCards[cardIndices[i]].classList.add('trending');
    }
}

// Add update timestamps to each card
function addUpdateTimestamps(offerCards) {
    offerCards.forEach((card, index) => {
        // Create timestamps with varying times
        const timestamp = document.createElement('div');
        timestamp.className = 'offer-updated';
        
        // Distribute timestamps for visual variety
        if (index % 5 === 0) {
            timestamp.innerHTML = `<span class="live-dot"></span> Just updated`;
        } else if (index % 5 === 1) {
            timestamp.innerHTML = `<span class="live-dot"></span> Updated 2h ago`;
        } else if (index % 5 === 2) {
            timestamp.innerHTML = `<span class="live-dot"></span> Updated today`;
        } else if (index % 5 === 3) {
            timestamp.innerHTML = `<span class="live-dot"></span> Updated 1d ago`;
        } else {
            timestamp.innerHTML = `<span class="live-dot"></span> Updated 2d ago`;
        }
        
        // Add to the card header
        const cardHeader = card.querySelector('.card-header');
        if (cardHeader) {
            cardHeader.style.position = 'relative';
            cardHeader.appendChild(timestamp);
        }
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
                "VIP service for high-roller accounts"
            ],
            promoCode: "PREMIUM1500",
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
                "Access to exclusive Caesars Rewards Diamond status",
                "Personal VIP host for high-value players"
            ],
            promoCode: "LUXURYPLAY",
            link: "#"
        },
        {
            name: "Hard Rock Bet Casino",
            logo: "https://example.com/logos/hardrock.png", // Placeholder, would be real in production
            rating: 4.7,
            description: "100% Deposit Match up to $1,000 & 500 Free Spins",
            details: [
                "Free spins distributed as 50 per day for 10 days",
                "Free spins valid on premium slot games",
                "Exclusive high-stakes table games access",
                "VIP events and promotions for qualified players"
            ],
            promoCode: "VIPROCK",
            link: "#"
        },
        {
            name: "Jackpot City Casino",
            logo: "https://example.com/logos/jackpotcity.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "50% Deposit Match Up to $1,000 + 20 Bonus Spins",
            details: [
                "Ideal for mobile users with premium app experience",
                "Bonus spins on exclusive high-value slot titles",
                "Lower wagering requirements than competitors",
                "Regular promotions for high-roller players"
            ],
            promoCode: "HIGHROLLER50",
            link: "#"
        },
        {
            name: "Bet365 Casino",
            logo: "https://example.com/logos/bet365.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "10 Days of Spins (NJ) / 100% Up To $500 & 100 Spins (PA)",
            details: [
                "Different offers depending on your state",
                "Premium slots with higher RTP for VIP members",
                "Established international brand with strong reputation",
                "Sophisticated user interface with premium design"
            ],
            promoCode: "ELITESPIN",
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
                "VIP-specific no deposit bonuses available"
            ],
            promoCode: "PREMIUM25",
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
                "Luxury casino experience for high rollers",
                "Private tables and premium support"
            ],
            promoCode: "LUXE20",
            link: "#"
        },
        {
            name: "Harrah's Casino",
            logo: "https://example.com/logos/harrahs.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "20 Free Spins",
            details: [
                "No deposit needed to claim free spins",
                "Spins available on selected premium slot games",
                "Connected to Caesars Rewards program",
                "Fast-track to higher tier status for VIPs"
            ],
            promoCode: "VIPSPIN20",
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
                "VIP lounge with enhanced redemption rates",
                "900+ premium games available to play"
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
                "Free spins upon registration for premium members",
                "Popular Book of Dead slot game with high RTP",
                "No deposit required",
                "Exclusive VIP tournaments available"
            ],
            promoCode: "ROYALSPINS",
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
                "50 premium free spins daily for 10 days",
                "Spins valid on high RTP slot games",
                "Generous deposit match alongside spins",
                "High roller tables with increased limits"
            ],
            promoCode: "VIPROCK",
            link: "#"
        },
        {
            name: "Harrah's Casino",
            logo: "https://example.com/logos/harrahs.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "20 Free Spins No Deposit",
            details: [
                "No deposit required for premium free spins",
                "Valid on selected high-value slot games",
                "Connect to Caesars Rewards VIP program",
                "Higher conversion rate for VIP members"
            ],
            promoCode: "ELITESPIN",
            link: "#"
        },
        {
            name: "Avantgarde Casino",
            logo: "https://example.com/logos/avantgarde.png", // Placeholder, would be real in production
            rating: 4.4,
            description: "20 Free Spins on Viking Victory",
            details: [
                "Premium free spins on sign up",
                "No deposit required for elite members",
                "200% welcome bonus available after deposit",
                "Bonus up to $2,000 on first deposit for high rollers"
            ],
            promoCode: "LUXESPIN",
            link: "#"
        },
        {
            name: "McLuck Casino",
            logo: "https://example.com/logos/mcluck.png", // Placeholder, would be real in production
            rating: 4.3,
            description: "57,500 Gold Coins + 27.5 FREE SC",
            details: [
                "Premium social casino with exclusive offerings",
                "No deposit required for initial premium coins",
                "VIP-only promotions and exclusive tournaments",
                "Luxurious mobile experience with high-end graphics"
            ],
            promoCode: "PREMIUM27",
            link: "#"
        },
        {
            name: "Stake.us",
            logo: "https://example.com/logos/stakeus.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "25 Stake Cash + 250,000 Gold Coins",
            details: [
                "Premium sweepstakes casino for sophisticated players",
                "No purchase necessary with exclusive VIP offers",
                "Cryptocurrency-friendly with enhanced security",
                "Available in most US states with premium support"
            ],
            promoCode: "VIPSTAKE",
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
                "Highest bonus amount available for elite players",
                "Sophisticated platform with premium game selection",
                "Access to Caesars Rewards Diamond status",
                "VIP hosts for high-roller accounts"
            ],
            promoCode: "LUXURYPLAY",
            link: "#"
        },
        {
            name: "BetMGM Casino",
            logo: "https://example.com/logos/betmgm.png", // Placeholder, would be real in production
            rating: 4.9,
            description: "100% Deposit Match up to $1,500 + $25 No Deposit",
            details: [
                "Dual premium bonus offering with no deposit bonus",
                "Reasonable 15x wagering on deposit match",
                "Exclusive high-limit games for VIP members",
                "Personalized account manager for high rollers"
            ],
            promoCode: "PREMIUM1500",
            link: "#"
        },
        {
            name: "Jackpot City Casino",
            logo: "https://example.com/logos/jackpotcity.png", // Placeholder, would be real in production
            rating: 4.6,
            description: "50% Deposit Match Up to $1,000 + 20 Bonus Spins",
            details: [
                "Ideal for luxury mobile casino players",
                "Exclusive slot selection for high-value members",
                "Established international brand with VIP services",
                "Premium promotions for high-volume players"
            ],
            promoCode: "HIGHROLLER50",
            link: "#"
        },
        {
            name: "Crown Coins Casino",
            logo: "https://example.com/logos/crowncoins.png", // Placeholder, would be real in production
            rating: 4.3,
            description: "150% More Coins on First Purchase + Spin to Win",
            details: [
                "Elite first purchase bonus with 150% extra coins",
                "Opportunity to win up to 100SC and 2M CC for VIPs",
                "Social casino with exclusive luxury prizes",
                "Large selection of premium games with high RTP"
            ],
            promoCode: "VIPCC150",
            link: "#"
        },
        {
            name: "Legendz Casino",
            logo: "https://example.com/logos/legendz.png", // Placeholder, would be real in production
            rating: 4.5,
            description: "50% Extra on Your First Purchase + 3 SC & 500 GC Free",
            details: [
                "Premium coins without purchase for elite members",
                "50% extra on first purchase with VIP boosts",
                "Sweepstakes model with high-value prizes",
                "Sophisticated interface for discerning players"
            ],
            promoCode: "LUXELEGENDZ",
            link: "#"
        }
    ];

    // Casino reviews data
    const casinoReviews = [
        {
            name: "BetMGM Casino",
            score: 9.4,
            badges: ["Elite Choice", "Premium Bonuses", "VIP Service"],
            highlights: "BetMGM offers an impressive premium game library with over 700 titles, including exclusive games only available to VIP players. Their personalized customer service is available 24/7, and withdrawals for VIP members are processed within 12 hours."
        },
        {
            name: "Caesars Palace Casino",
            score: 9.2,
            badges: ["Luxury Experience", "Elite VIP Program", "Premium Live Dealer"],
            highlights: "Caesars stands out with its exceptional VIP program and connection to the prestigious Caesars Rewards Diamond tier. Their selection of high-stakes live dealer games is unmatched in the US market, and they offer priority payouts to high-roller members."
        },
        {
            name: "Hard Rock Bet Casino",
            score: 9.0,
            badges: ["Exclusive Slots", "VIP Mobile Experience", "Premium Promotions"],
            highlights: "Hard Rock Bet features a curated collection of premium slot games with high-value jackpots. Their sophisticated mobile app delivers a seamless high-end experience, and they regularly offer exclusive promotions for VIP players."
        },
        {
            name: "Jackpot City Casino",
            score: 8.9,
            badges: ["Premium Mobile", "Priority Withdrawals", "Exclusive Game Library"],
            highlights: "Jackpot City is perfect for discerning mobile users with an elite app experience on both iOS and Android. They offer expedited payment processing for high-value members, and their premium game library includes exclusive titles from top developers."
        },
        {
            name: "Bet365 Casino",
            score: 8.7,
            badges: ["Prestigious Brand", "Comprehensive Luxury Platform", "24/7 VIP Support"],
            highlights: "Bet365 combines sports betting and casino gaming in one sophisticated platform, catering to discerning players who enjoy both. Their dedicated VIP support team is highly responsive, and the platform has earned a reputation for fair play and elite service."
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
                <a href="${offer.link}" class="btn primary">Claim Premium Bonus</a>
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
                    <h4>Premium Highlights</h4>
                    <p>${review.highlights}</p>
                </div>
            </div>
            <div class="review-footer">
                <a href="#" class="review-link">Read Full VIP Review</a>
                <a href="#" class="btn primary">Visit Elite Casino</a>
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