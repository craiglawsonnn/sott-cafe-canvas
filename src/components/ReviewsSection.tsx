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
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    <path d="M1 1h22v22H1z" fill="none"/>
                  </svg>
                ) : (
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" className="h-6" />
                )}
              </div>
            </div>
          </div>
          
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
