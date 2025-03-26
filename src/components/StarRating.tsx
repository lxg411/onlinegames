'use client';

import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
  onChange?: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
  readOnly?: boolean;
  precision?: 'full' | 'half';
}

const StarRating = ({
  initialRating = 0,
  totalStars = 5,
  onChange,
  size = 'medium',
  readOnly = false,
  precision = 'half'
}: StarRatingProps) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number | null>(null);
  const [animateIndex, setAnimateIndex] = useState<number | null>(null);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  // Determine star size based on size property
  const getStarSize = () => {
    switch (size) {
      case 'small':
        return 'text-xl';
      case 'large':
        return 'text-3xl';
      default:
        return 'text-2xl';
    }
  };

  // Get star rating text
  const getRatingText = (value: number) => {
    if (value === 0) return 'Not Rated';
    if (value <= 1) return 'Poor';
    if (value <= 2) return 'Fair';
    if (value <= 3) return 'Average';
    if (value <= 4) return 'Good';
    return 'Excellent';
  };

  // Handle star click event
  const handleClick = (value: number) => {
    if (readOnly) return;
    
    // If clicking on the currently selected star, clear the rating
    if (rating === value && onChange) {
      setRating(0);
      onChange(0);
      return;
    }
    
    setRating(value);
    setAnimateIndex(value);
    
    // Reset animation
    setTimeout(() => {
      setAnimateIndex(null);
    }, 300);
    
    if (onChange) {
      onChange(value);
    }
  };

  // Handle star hover event
  const handleMouseEnter = (value: number) => {
    if (readOnly) return;
    setHover(value);
  };

  // Handle star leave event
  const handleMouseLeave = () => {
    if (readOnly) return;
    setHover(null);
  };

  // Handle half-star rating
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      // Determine the value of the current star
      const value = i;
      // Current rating being displayed (hover or fixed rating)
      const currentRating = hover !== null ? hover : rating;
      // Determine if the star is fully filled, half filled, or empty
      let starType = 'empty';
      
      if (currentRating >= value) {
        starType = 'full';
      } else if (precision === 'half' && currentRating + 0.5 >= value) {
        starType = 'half';
      }

      stars.push(
        <div
          key={i}
          className={`inline-block cursor-pointer transition-transform duration-200 ${
            animateIndex === i ? 'animate-bounce' : ''
          }`}
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
        >
          {starType === 'full' ? (
            <span className={`${getStarSize()} text-amber-400`}>★</span>
          ) : starType === 'half' ? (
            <span className={`${getStarSize()} relative`}>
              <span className="absolute text-gray-300">★</span>
              <span className="absolute text-amber-400" style={{ width: '50%', overflow: 'hidden' }}>★</span>
            </span>
          ) : (
            <span className={`${getStarSize()} text-gray-300`}>★</span>
          )}
        </div>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-1">{renderStars()}</div>
      {!readOnly && (
        <div className="mt-1 text-sm text-amber-500 font-medium">
          {getRatingText(hover !== null ? hover : rating)}
        </div>
      )}
    </div>
  );
};

export default StarRating; 