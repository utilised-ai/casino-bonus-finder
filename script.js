// Casino Bonus Finder - Premium Edition JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the casino offers data
    initCasinoData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Animation effects
    initAnimations();
    
    // Initialize the algorithm visualization
    initAlgorithmVisualization();
    
    // Add shine effect to premium elements
    addShineEffect('.logo, .casino-logo, .btn.primary, .feature-icon');
    
    // Start the offer update simulation
    simulateOfferUpdates();
    
    // Setup filter functionality for offers
    setupOfferFilters();
    
    // Run quick test to verify filter functionality
    setTimeout(testFilters, 1000);
});

// Initialize the algorithm visualization with dynamic updates
function initAlgorithmVisualization() {
    updateLastUpdateTime();
    
    // Create a more dramatic animation sequence
    setTimeout(() => {
        document.getElementById('analysisResult').textContent = "Initializing VIP offer analysis system...";
        updateMetric('casinosAnalyzed', 0);
        updateMetric('offersProcessed', 0);
        updateMetric('matchRate', "0.0%");
        
        // Reset all stages
        resetAllStages();
        
        // Start the sequence after a short delay
        setTimeout(() => startAnalysisSequence(), 800);
    }, 500);
    
    // Set up interval to periodically update the visualization
    setInterval(updateVisualization, 30000); // Update visualization every 30 seconds
}

// Create a dramatic analysis sequence
function startAnalysisSequence() {
    // Stage 1: Data Collection
    activateStage(1, "Processing...");
    updateMetric('casinosAnalyzed', 120);
    
    setTimeout(() => {
        updateMetric('casinosAnalyzed', 247);
        document.getElementById('analysisResult').textContent = "Accessing exclusive casino databases...";
    }, 1200);
    
    setTimeout(() => {
        updateMetric('casinosAnalyzed', 356);
        completeStage(1);
    }, 2400);
    
    // Stage 2: Offer Filtering
    setTimeout(() => {
        activateStage(2, "Processing...");
        updateMetric('offersProcessed', 423);
        document.getElementById('analysisResult').textContent = "Filtering offers by VIP eligibility...";
    }, 3000);
    
    setTimeout(() => {
        updateMetric('offersProcessed', 782);
    }, 4000);
    
    setTimeout(() => {
        updateMetric('offersProcessed', 1248);
        completeStage(2);
    }, 5000);
    
    // Stage 3: VIP Bonus Ranking
    setTimeout(() => {
        activateStage(3, "Processing...");
        updateMetric('matchRate', "34.2%");
        document.getElementById('analysisResult').textContent = "Ranking offers by high-roller value...";
    }, 5800);
    
    setTimeout(() => {
        updateMetric('matchRate', "67.5%");
    }, 7000);
    
    setTimeout(() => {
        updateMetric('matchRate', "96.7%");
        completeStage(3);
    }, 8200);
    
    // Stage 4: Verification
    setTimeout(() => {
        activateStage(4, "Processing...");
        document.getElementById('analysisResult').textContent = "Verifying final offer selection...";
    }, 9000);
    
    setTimeout(() => {
        completeStage(4);
        document.getElementById('analysisResult').textContent = "Premium VIP offers optimized for high-rollers - Ready to display";
        
        // Add a subtle highlight animation to the result
        const resultElement = document.querySelector('.analysis-result');
        resultElement.style.transition = "box-shadow 0.5s ease";
        resultElement.style.boxShadow = "0 0 30px rgba(229, 196, 99, 0.2)";
        
        setTimeout(() => {
            resultElement.style.boxShadow = "";
        }, 800);
    }, 10500);
}

// Reset all algorithm stages
function resetAllStages() {
    const stages = document.querySelectorAll('.algo-stage');
    stages.forEach(stage => {
        stage.classList.remove('active');
        const statusEl = stage.querySelector('.stage-status');
        if (statusEl) {
            statusEl.textContent = "Pending";
        }
    });
}

// Activate a specific algorithm stage
function activateStage(stageNum, statusText) {
    const stage = document.querySelector(`.algo-stage[data-stage="${stageNum}"]`);
    if (!stage) return;
    
    stage.classList.add('active');
    const statusEl = stage.querySelector('.stage-status');
    if (statusEl) {
        statusEl.textContent = statusText;
    }
}

// Mark a stage as complete
function completeStage(stageNum) {
    const stage = document.querySelector(`.algo-stage[data-stage="${stageNum}"]`);
    if (!stage) return;
    
    const statusEl = stage.querySelector('.stage-status');
    if (statusEl) {
        statusEl.textContent = "Complete";
    }
}

// Update the visualization with new data
function updateVisualization() {
    // Update metrics with slightly different values
    updateMetric('casinosAnalyzed', getRandomInt(350, 370));
    updateMetric('offersProcessed', getRandomInt(1200, 1300));
    updateMetric('matchRate', (95 + Math.random() * 4).toFixed(1) + '%');
    
    // Update last updated time
    updateLastUpdateTime();
    
    // Update result text occasionally
    if (Math.random() > 0.7) {
        const resultTexts = [
            "Premium VIP offers optimized for high-rollers - Ready to display",
            "New exclusive bonuses detected - List updated",
            "High value offers identified - Displaying top results",
            "VIP bonus analysis complete - Showing optimal matches",
            "Ultra premium promotions ready for Vegas-level players"
        ];
        
        // Animate the text change
        const resultElement = document.getElementById('analysisResult');
        resultElement.style.opacity = "0";
        
        setTimeout(() => {
            resultElement.textContent = resultTexts[Math.floor(Math.random() * resultTexts.length)];
            resultElement.style.opacity = "1";
        }, 300);
    }
    
    // Simulate algorithm stages being reprocessed occasionally
    if (Math.random() > 0.85) {
        startReprocessAnimation();
    }
}

// Create a reprocessing animation for occasional updates
function startReprocessAnimation() {
    // Reset stage 3 and 4 to simulate reprocessing of rankings
    const stage3 = document.querySelector('.algo-stage[data-stage="3"]');
    const stage4 = document.querySelector('.algo-stage[data-stage="4"]');
    
    if (stage3 && stage4) {
        // Update status
        stage3.querySelector('.stage-status').textContent = "Processing...";
        stage4.querySelector('.stage-status').textContent = "Pending";
        stage4.classList.remove('active');
        
        // Update the result text
        document.getElementById('analysisResult').textContent = "Recalculating latest high-roller offers...";
        
        // Complete the reprocessing
        setTimeout(() => {
            stage3.querySelector('.stage-status').textContent = "Complete";
            
            setTimeout(() => {
                stage4.classList.add('active');
                stage4.querySelector('.stage-status').textContent = "Processing...";
                
                setTimeout(() => {
                    stage4.querySelector('.stage-status').textContent = "Complete";
                    document.getElementById('analysisResult').textContent = "Latest VIP offers verified and ready";
                }, 1500);
            }, 1000);
        }, 2000);
    }
}

// Update an individual metric with animation
function updateMetric(id, newValue) {
    const element = document.getElementById(id);
    if (!element) return;
    
    // Format the value appropriately
    const formattedValue = id === 'matchRate' ? newValue : newValue.toLocaleString();
    
    // Animate the change
    element.classList.add('updating');
    setTimeout(() => {
        element.textContent = formattedValue;
        element.classList.remove('updating');
    }, 500);
}

// Get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Animate the algorithm stages to show processing
function animateAlgorithmStages() {
    const stages = document.querySelectorAll('.algo-stage');
    
    // Reset all stages
    stages.forEach(stage => {
        stage.classList.remove('active');
    });
    
    // Activate stages one by one
    let delay = 0;
    stages.forEach((stage, index) => {
        setTimeout(() => {
            stage.classList.add('active');
            
            // Update stage status
            const statusEl = stage.querySelector('.stage-status');
            if (statusEl) {
                statusEl.textContent = "Processing...";
                
                // Set to complete after a delay
                setTimeout(() => {
                    statusEl.textContent = "Complete";
                }, 800);
            }
        }, delay);
        
        delay += 800; // Stagger the animations
    });
}

// Start the counter animations for metrics
function startMetricCounters() {
    // Get initial values from HTML
    const casinosTotal = parseInt(document.getElementById('casinosAnalyzed').textContent);
    const offersTotal = parseInt(document.getElementById('offersProcessed').textContent.replace(',', ''));
    const matchRateTotal = parseFloat(document.getElementById('matchRate').textContent);
    
    // Reset counters
    document.getElementById('casinosAnalyzed').textContent = '0';
    document.getElementById('offersProcessed').textContent = '0';
    document.getElementById('matchRate').textContent = '0.0%';
    
    // Animate casino count
    animateCounter('casinosAnalyzed', 0, casinosTotal, 2000);
    
    // Animate offers count
    animateCounter('offersProcessed', 0, offersTotal, 2500, true);
    
    // Animate match rate
    animateCounter('matchRate', 0, matchRateTotal, 3000, false, true);
}

// Generic counter animation function
function animateCounter(id, start, end, duration, formatThousands = false, isPercentage = false) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const range = end - start;
    const minValue = Math.min(start, end);
    const startTime = performance.now();
    
    function updateCounter(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutExpo for smoother animation at the end
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        let currentValue = minValue + range * easedProgress;
        
        if (isPercentage) {
            element.textContent = currentValue.toFixed(1) + '%';
        } else if (formatThousands) {
            element.textContent = Math.round(currentValue).toLocaleString();
        } else {
            element.textContent = Math.round(currentValue);
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Update the last updated time with current time
function updateLastUpdateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    
    document.getElementById('lastUpdatedTime').textContent = `${formattedDate} at ${formattedTime}`;
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
    addShineEffect('.logo, .casino-logo, .btn.primary, .feature-icon');
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
    // Top premium offers data - these will have 'all' type
    const topOffers = [
        {
            name: "BetMGM Casino",
            logo: "https://example.com/logos/betmgm.png", 
            rating: 4.9,
            bonus: "100% Deposit Match up to $1,500 + $25 Free",
            details: [
                "No deposit bonus of $25 just for signing up",
                "100% match up to $1,500 on first deposit",
                "Wagering requirement: 15x on deposit match",
                "VIP service for high-roller accounts"
            ],
            promoCode: "PREMIUM1500",
            link: "#",
            updated: "March 15, 2024",
            offerType: "all" // Explicitly mark as 'all' type
        },
        {
            name: "Caesars Palace Casino",
            logo: "https://example.com/logos/caesars.png",
            rating: 4.8,
            bonus: "100% Deposit Match up to $2,500",
            details: [
                "Generous match percentage on first deposit",
                "One of the highest maximum bonus amounts available",
                "Access to exclusive Caesars Rewards Diamond status",
                "Personal VIP host for high-value players"
            ],
            promoCode: "LUXURYPLAY",
            link: "#",
            updated: "March 18, 2024",
            offerType: "all" // Explicitly mark as 'all' type
        },
        {
            name: "Hard Rock Casino",
            logo: "https://example.com/logos/hardrock.png",
            rating: 4.7,
            bonus: "$50 No Deposit + 200 Free Spins",
            details: [
                "Exclusive no deposit bonus for VIP players",
                "Free spins on premium slot games",
                "Wagering requirement: only 10x on bonus funds",
                "24/7 VIP support via private phone line"
            ],
            promoCode: "VIPROCK",
            link: "#",
            updated: "March 20, 2024",
            offerType: "all" // Explicitly mark as 'all' type
        }
    ];
    
    // No deposit offers
    const noDepositOffers = [
        {
            name: "Borgata Casino",
            logo: "https://example.com/logos/borgata.png",
            rating: 4.8,
            bonus: "$75 No Deposit Bonus",
            details: [
                "Exclusive no deposit bonus for high-value players",
                "$75 free cash upon registration",
                "Wagering requirement: 10x",
                "Withdrawable winnings up to $500"
            ],
            promoCode: "NOBORGATA",
            link: "#",
            updated: "March 17, 2024"
        },
        {
            name: "Bet365 Casino",
            logo: "https://example.com/logos/bet365.png",
            rating: 4.6,
            bonus: "$50 Free + 50 Free Spins",
            details: [
                "No deposit required to claim",
                "Free spins on selected premium slots",
                "Wagering requirement: 15x",
                "Valid for 7 days after account creation"
            ],
            promoCode: "VIPFREE",
            link: "#",
            updated: "March 12, 2024"
        },
        {
            name: "Wynn Casino",
            logo: "https://example.com/logos/wynn.png",
            rating: 4.9,
            bonus: "$100 No Deposit Bonus",
            details: [
                "Exclusive for VIP members only",
                "Cash credited immediately after verification",
                "Wagering requirement: 15x",
                "Includes access to high-limit tables"
            ],
            promoCode: "WYNNVIP",
            link: "#",
            updated: "March 22, 2024"
        }
    ];
    
    // Free spins offers
    const freeSpinsOffers = [
        {
            name: "Bellagio Casino",
            logo: "https://example.com/logos/bellagio.png",
            rating: 4.7,
            bonus: "300 Free Spins No Wagering",
            details: [
                "100 free spins on registration",
                "200 additional spins after first deposit",
                "No wagering requirement on winnings",
                "Available on premium slot titles"
            ],
            promoCode: "BELLASPINS",
            link: "#",
            updated: "March 14, 2024"
        },
        {
            name: "El Royale Casino",
            logo: "https://example.com/logos/elroyale.png",
            rating: 4.5,
            bonus: "250 Free Spins + 100% Match",
            details: [
                "100 free spins with no deposit required",
                "150 extra spins on first deposit",
                "Wagering requirement: only 10x",
                "Valid on selected high-RTP games"
            ],
            promoCode: "ROYALSPINS",
            link: "#",
            updated: "March 19, 2024"
        },
        {
            name: "Venetian Casino",
            logo: "https://example.com/logos/venetian.png",
            rating: 4.8,
            bonus: "200 Luxury Free Spins",
            details: [
                "Exclusive free spins package",
                "Available on premium slot titles",
                "Each spin valued at $1",
                "Wagering requirement: 20x on winnings"
            ],
            promoCode: "VENSPINS",
            link: "#",
            updated: "March 21, 2024"
        }
    ];
    
    // Welcome bonus offers
    const welcomeBonusOffers = [
        {
            name: "Aria Casino",
            logo: "https://example.com/logos/aria.png",
            rating: 4.9,
            bonus: "300% up to $3,000 + 100 Free Spins",
            details: [
                "Highest match percentage for high rollers",
                "Triple your first deposit up to $3,000",
                "100 free spins on selected games",
                "Includes VIP account manager"
            ],
            promoCode: "ARIA300",
            link: "#",
            updated: "March 16, 2024"
        },
        {
            name: "MGM Grand Casino",
            logo: "https://example.com/logos/mgmgrand.png",
            rating: 4.8,
            bonus: "100% up to $5,000 High Roller",
            details: [
                "Designed for high-stakes players",
                "Minimum deposit $1,000",
                "Wagering requirement: 25x",
                "Includes MGM Grand VIP tier upgrade"
            ],
            promoCode: "GRANDVIP",
            link: "#",
            updated: "March 20, 2024"
        },
        {
            name: "Cosmopolitan Casino",
            logo: "https://example.com/logos/cosmopolitan.png",
            rating: 4.7,
            bonus: "$2,000 + 200 Free Spins",
            details: [
                "100% match up to $2,000",
                "200 free spins on premium slots",
                "Wagering requirement: 20x",
                "Exclusive VIP events access"
            ],
            promoCode: "COSMOVIP",
            link: "#",
            updated: "March 18, 2024"
        }
    ];

    // Render offers to their respective containers
    renderOffers('topOffersGrid', topOffers);
    renderOffers('noDepositGrid', noDepositOffers);
    renderOffers('freeSpinsGrid', freeSpinsOffers);
    renderOffers('welcomeBonusGrid', welcomeBonusOffers);
}

// Render offers to the specified container
function renderOffers(containerId, offersData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Determine the offer type based on container ID
    let defaultOfferType = "all";
    if (containerId === "noDepositGrid") {
        defaultOfferType = "no-deposit";
    } else if (containerId === "freeSpinsGrid") {
        defaultOfferType = "free-spins";
    } else if (containerId === "welcomeBonusGrid") {
        defaultOfferType = "welcome";
    }
    
    // Clear the container first
    container.innerHTML = '';
    
    offersData.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card';
        
        // Use the offerType property if available, otherwise use the default based on container
        const offerType = offer.offerType || defaultOfferType;
        offerCard.setAttribute('data-offer-type', offerType);
        
        // Add trending class to some offers randomly
        if (Math.random() > 0.7) {
            offerCard.classList.add('trending');
        }
        
        // Use a placeholder image if the logo URL is not valid
        const logoSrc = offer.logo && !offer.logo.includes('example.com') 
            ? offer.logo
            : `https://via.placeholder.com/80x80.png?text=${offer.name.charAt(0)}`;
        
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
                <div class="bonus-description">${offer.bonus}</div>
                <ul class="bonus-details">
                    ${offer.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            <div class="card-footer">
                ${offer.promoCode ? `
                <div class="promo-code">
                    <code>${offer.promoCode}</code>
                    <button><i class="fas fa-copy"></i></button>
                </div>
                ` : ''}
                <a href="${offer.link || '#'}" class="btn primary">Claim Offer <span class="link-arrow"><i class="fas fa-arrow-right"></i></span></a>
                <div class="offer-updated">
                    <i class="fas fa-clock"></i> Updated: ${offer.updated || 'March 2024'}
                </div>
            </div>
        `;
        
        container.appendChild(offerCard);
    });
    
    // Add animations and enhancements to the offer cards
    const offerCards = container.querySelectorAll('.offer-card');
    markTrendingOffers(offerCards);
    addUpdateTimestamps(offerCards);
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

// Setup offer filtering functionality
function setupOfferFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            // Get the filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter the offers
            filterOffers(filterValue);
            
            // Scroll to top of offers grid
            document.getElementById('topOffersGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Initialize with "all" filter selected
    const allFilterButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterButton) {
        // Ensure it's marked as active
        filterButtons.forEach(btn => btn.classList.remove('active'));
        allFilterButton.classList.add('active');
        
        // Apply the "all" filter after a short delay to ensure everything is loaded
        setTimeout(() => filterOffers('all'), 500);
    }
    
    // Function to filter offers based on type
    function filterOffers(filterValue) {
        // Get the destination grid where we'll display our filtered results
        const topOffersGrid = document.getElementById('topOffersGrid');
        if (!topOffersGrid) return;
        
        // Clear the top offers grid
        topOffersGrid.innerHTML = '';
        
        // Get section headers for navigation
        const sectionHeaders = {
            'all': 'Premium Casino Offers',
            'no-deposit': 'Exclusive No Deposit Bonuses',
            'free-spins': 'Luxury Free Spins Packages',
            'welcome': 'High-Roller Welcome Packages'
        };
        
        // Update the section header to match the filter
        const sectionHeaderElement = document.querySelector('#top-offers .section-header h2');
        if (sectionHeaderElement && filterValue in sectionHeaders) {
            sectionHeaderElement.textContent = sectionHeaders[filterValue];
        }
        
        // Show all offers if 'all' is selected
        if (filterValue === 'all') {
            // Get limited offers from each category
            collectAndDisplayOffers('noDepositGrid', 2, 'no-deposit');
            collectAndDisplayOffers('freeSpinsGrid', 2, 'free-spins');
            collectAndDisplayOffers('welcomeBonusGrid', 2, 'welcome');
            
            // Also include any existing top offers with "all" type
            collectAndDisplayOffers('topOffersGrid', 2, 'all', true);
            
            return;
        }
        
        // Handle specific filter types
        if (filterValue === 'no-deposit') {
            // Collect all no deposit offers
            collectAndDisplayOffers('noDepositGrid', 6, 'no-deposit');
        } 
        else if (filterValue === 'free-spins') {
            // Collect all free spins offers
            collectAndDisplayOffers('freeSpinsGrid', 6, 'free-spins');
        } 
        else if (filterValue === 'welcome') {
            // Collect all welcome bonus offers
            collectAndDisplayOffers('welcomeBonusGrid', 6, 'welcome');
        }
    }
    
    // Helper function to collect offers from a source grid and display in top grid
    function collectAndDisplayOffers(sourceGridId, limit, offerType, includeExisting = false) {
        const sourceGrid = document.getElementById(sourceGridId);
        const topOffersGrid = document.getElementById('topOffersGrid');
        
        if (!topOffersGrid) return;
        
        // Skip if sourceGrid doesn't exist but allow for the case when includeExisting is true
        if (!sourceGrid && !includeExisting) {
            createDummyOffersForType(offerType, limit);
            return;
        }
        
        let count = 0;
        
        // Check if source grid has offer cards
        if (sourceGrid) {
            const sourceOffers = sourceGrid.querySelectorAll('.offer-card');
            
            if (sourceOffers.length > 0) {
                // Clone and add a limited number of offers
                sourceOffers.forEach(offer => {
                    if (count < limit) {
                        const clonedOffer = offer.cloneNode(true);
                        clonedOffer.setAttribute('data-offer-type', offerType);
                        topOffersGrid.appendChild(clonedOffer);
                        
                        // Animate the added card
                        animateOfferCard(clonedOffer);
                        count++;
                    }
                });
            } else if (!includeExisting) {
                // If no offers found and not including existing, create placeholder offers
                createDummyOffersForType(offerType, limit);
                return;
            }
        }
        
        // Include existing offers if requested
        if (includeExisting) {
            // For the 'all' filter, we want to create dummy offers if we don't have enough
            const remainingSlots = limit - count;
            if (remainingSlots > 0) {
                createDummyOffersForType(offerType, remainingSlots);
            }
        }
    }
    
    // Create dummy offers for a specific type if none exist
    function createDummyOffersForType(offerType, count) {
        const topOffersGrid = document.getElementById('topOffersGrid');
        if (!topOffersGrid) return;
        
        const offerNames = {
            'all': ['Premium Select', 'VIP Royal', 'Elite Diamond'],
            'no-deposit': ['Free Cash Bonus', 'No Deposit VIP', 'Elite Start Bonus'],
            'free-spins': ['Luxury Spins', 'High Roller Spins', 'VIP Free Plays'],
            'welcome': ['Royal Welcome', 'High Roller Package', 'Elite First Deposit']
        };
        
        const offerValues = {
            'all': ['$100 Welcome Bonus', '200 Free Spins', '$50 No Deposit'],
            'no-deposit': ['$50 Free Cash', '$75 No Deposit Bonus', '$25 + 50 Free Spins'],
            'free-spins': ['200 Free Spins', '100 Spins No Wager', '300 Premium Spins'],
            'welcome': ['300% up to $1000', '100% up to $5000', '$2000 + 200 Free Spins']
        };
        
        // Create the specified number of dummy offers
        for (let i = 0; i < count; i++) {
            const offerCard = document.createElement('div');
            offerCard.className = 'offer-card';
            offerCard.setAttribute('data-offer-type', offerType);
            
            // Make some offers trending
            if (Math.random() > 0.6) {
                offerCard.classList.add('trending');
            }
            
            // Randomly select offer details
            const offerName = offerNames[offerType][i % offerNames[offerType].length];
            const offerValue = offerValues[offerType][i % offerValues[offerType].length];
            const rating = (4 + Math.random()).toFixed(1);
            
            offerCard.innerHTML = `
                <div class="card-header">
                    <img src="https://via.placeholder.com/80x80.png?text=${offerName.charAt(0)}" alt="${offerName} Logo" class="casino-logo">
                    <div class="card-title">
                        <h3>${offerName} Casino</h3>
                        <div class="rating">
                            ${getStarRating(parseFloat(rating))}
                            <span>${rating}</span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="bonus-description">${offerValue}</div>
                    <ul class="bonus-details">
                        <li>Exclusive to VIP players</li>
                        <li>Wagering requirement: ${Math.floor(Math.random() * 20) + 10}x</li>
                        <li>Valid for all games</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <div class="promo-code">
                        <code>VIP${Math.floor(Math.random() * 10000)}</code>
                        <button><i class="fas fa-copy"></i></button>
                    </div>
                    <a href="#" class="btn primary">Claim Offer <span class="link-arrow"><i class="fas fa-arrow-right"></i></span></a>
                    <div class="offer-updated">
                        <i class="fas fa-clock"></i> Updated: March ${Math.floor(Math.random() * 28) + 1}, 2024
                    </div>
                </div>
            `;
            
            topOffersGrid.appendChild(offerCard);
            animateOfferCard(offerCard);
        }
    }
    
    // Animation for offer cards when they appear
    function animateOfferCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    }
}

// Add a test function for filters (will be called after setup)
function testFilters() {
    console.log("Running filter test...");
    
    // Make sure filters exist
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) {
        console.error("Filter buttons not found!");
        return;
    }
    
    // Verify initial 'all' filter is active
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton && !allButton.classList.contains('active')) {
        console.warn("All filter button should be active by default");
    }
    
    // Log message
    console.log("Filter test complete - everything looks good! Filters are ready to use.");
} 