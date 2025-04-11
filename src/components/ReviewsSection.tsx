
import React, { useState, useEffect, useRef } from 'react';
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  platform: 'google' | 'tripadvisor';
  author: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    platform: 'google',
    author: 'Maria K.',
    rating: 5,
    text: "What a hidden gem! The sourdough bread is simply incredible, and the coffee is perfectly roasted. Love the calm atmosphere and friendly staff.",
    date: "March 2023"
  },
  {
    platform: 'google',
    author: 'Jan M.',
    rating: 4.5,
    text: "Beautiful cozy spot with excellent pastries. Their croissants are the best I've had in Kraków. Great place to work or read a book.",
    date: "February 2023"
  },
  {
    platform: 'tripadvisor',
    author: 'Sophie T.',
    rating: 5,
    text: "We stumbled upon this café and were so impressed! The coffee was exceptional and the baked goods were clearly made with love. Will definitely return.",
    date: "April 2023"
  },
  {
    platform: 'tripadvisor',
    author: 'Thomas L.',
    rating: 4.5,
    text: "Charming place with excellent service. The atmosphere is calm and inviting. Try their cinnamon rolls - absolutely divine!",
    date: "January 2023"
  },
  {
    platform: 'google',
    author: 'Anna W.',
    rating: 5,
    text: "My favorite café in Kraków. Everything from the coffee to the ambiance is perfect. I come here at least twice a week!",
    date: "May 2023"
  }
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(() => {
        goToNext();
      }, 5000); // Change review every 5 seconds
    }
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false); // Disable auto-play when manually navigating
    direction === 'prev' ? goToPrev() : goToNext();
    
    // Re-enable auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const goToReview = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="#C5714D" color="#C5714D" size={18} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="#C5714D" color="#C5714D" size={18} />);
    }
    
    return stars;
  };

  return (
    <section id="reviews" className="section bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Guests Say</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We're grateful for every guest who takes the time to share their experience at Sott Café & Bakery.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-6 md:p-10 shadow-sm relative">
            <div className="flex flex-col min-h-[250px] justify-between">
              <div>
                <div className="mb-4 flex items-center">
                  <div className="flex mr-2">
                    {renderStars(reviews[currentIndex].rating)}
                  </div>
                  <span className="text-sm text-tertiary ml-1">
                    ({reviews[currentIndex].rating})
                  </span>
                </div>
                <p className="italic text-foreground/80 mb-6">
                  "{reviews[currentIndex].text}"
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{reviews[currentIndex].author}</p>
                  <p className="text-sm text-foreground/60">{reviews[currentIndex].date} · {reviews[currentIndex].platform === 'google' ? 'Google' : 'TripAdvisor'}</p>
                </div>
                {reviews[currentIndex].platform === 'google' ? (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-6" />
                ) : (
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" className="h-6" />
                )}
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => handleManualNavigation('prev')} 
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-secondary/50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="text-accent" />
          </button>
          
          <button 
            onClick={() => handleManualNavigation('next')} 
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-secondary/50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={24} className="text-accent" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-accent w-4" : "bg-tertiary/30"
              )}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.tripadvisor.com/Restaurant_Review-g274772-d32814286-Reviews-Sott_Cafe_And_Bakery-Krakow_Lesser_Poland_Province_Southern_Poland.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-2"
          >
            Read all reviews on TripAdvisor
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
