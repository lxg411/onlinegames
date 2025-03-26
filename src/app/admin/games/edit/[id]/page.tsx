'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { games, Game } from '../../../../../lib/games';
import GameEmbed from '../../../../../components/GameEmbed';

interface GameData extends Omit<Game, 'url'> {
  gameUrl: string;
}

export default function EditGame() {
  const router = useRouter();
  const params = useParams();
  const gameId = params?.id as string || '';
  
  const [formData, setFormData] = useState<GameData>({
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    gameUrl: '',
    categories: [],
    rating: 0,
    playCount: 0
  });
  
  const [availableCategories] = useState([
    'Action', 'Adventure', 'Puzzle', 'Racing', 'Sports', 
    'Strategy', 'RPG', 'Shooter', 'Simulation', 'Arcade', 
    'Card', 'Board', 'Educational', 'Word', 'Family'
  ]);
  
  const [previewMode, setPreviewMode] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [gameNotFound, setGameNotFound] = useState(false);
  
  // Load all game data from localStorage
  const loadGamesFromStorage = (): GameData[] => {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      return JSON.parse(storedGames);
    }
    // Convert original Game type to GameData type
    return games.map(game => ({
      ...game,
      gameUrl: game.url,
    })) as GameData[];
  };

  // Initialize localStorage game data (if it doesn't exist)
  useEffect(() => {
    if (!localStorage.getItem('games')) {
      // Convert Game[] to GameData[]
      const convertedGames = games.map(game => ({
        ...game,
        gameUrl: game.url,
      }));
      localStorage.setItem('games', JSON.stringify(convertedGames));
    }
  }, []);

  // Load game data
  useEffect(() => {
    if (gameId) {
      setIsLoading(true);
      
      // Prioritize getting game data from localStorage
      const allGames = loadGamesFromStorage();
      const game = allGames.find(g => g.id === gameId);
      
      if (game) {
        setFormData({
          id: game.id,
          title: game.title,
          description: game.description,
          imageUrl: game.imageUrl,
          gameUrl: game.gameUrl || '',
          categories: game.categories || [],
          rating: game.rating || 0,
          playCount: game.playCount || 0
        });
        setImagePreview(game.imageUrl);
      } else {
        setGameNotFound(true);
      }
      setIsLoading(false);
    }
  }, [gameId]);
  
  // Handle form input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear resolved errors
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle category selection
  const handleCategoryToggle = (category: string) => {
    setFormData(prev => {
      const currentCategories = [...prev.categories];
      
      if (currentCategories.includes(category)) {
        return {
          ...prev,
          categories: currentCategories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          categories: [...currentCategories, category]
        };
      }
    });
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(file);
    
    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      
      // In a real environment, this would upload the image to the server
      // Since we're in a browser environment, we're just simulating the upload effect
      
      // Generate unique filename for the image
      const fileName = `${gameId}_${file.name.replace(/\s+/g, '_')}`;
      const filePath = `/images/games/${fileName}`;
      
      // Update imageUrl in form data
      setFormData(prev => ({
        ...prev,
        imageUrl: filePath
      }));
      
      console.log(`Simulated upload: ${filePath}`);
      // Note: In a real production environment, this should call an API endpoint to handle file upload
    };
    reader.readAsDataURL(file);
  };
  
  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Game title cannot be empty';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Game description cannot be empty';
    }
    
    if (!formData.gameUrl.trim()) {
      errors.gameUrl = 'Game URL cannot be empty';
    }
    
    if (!formData.imageUrl && !uploadedImage) {
      errors.image = 'Please upload game image';
    }
    
    if (formData.categories.length === 0) {
      errors.categories = 'Please select at least one category';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Update game data in localStorage
    const allGames = loadGamesFromStorage();
    const updatedGames = allGames.map(game => 
      game.id === gameId ? formData : game
    );
    
    localStorage.setItem('games', JSON.stringify(updatedGames));
    
    alert('Game information updated!');
  };
  
  // Toggle preview mode
  const togglePreview = () => {
    if (!previewMode && !validateForm()) {
      return;
    }
    setPreviewMode(!previewMode);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }
  
  if (gameNotFound) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Game not found</h1>
          <p className="text-gray-600 mb-6">Cannot find game with ID "{gameId}".</p>
          <Link 
            href="/admin" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600"
          >
            Back to Game List
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-xl font-bold text-amber-500">OnlineGames<span className="text-gray-800">.wiki</span></div>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Back to Frontend
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Edit Game: {formData.title}</h1>
            <div className="flex space-x-3">
              <Link href="/admin" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Back to Game List
              </Link>
              <button
                type="button"
                onClick={togglePreview}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
              >
                {previewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
            </div>
          </div>

          {previewMode ? (
            /* Preview Mode */
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4">{formData.title}</h2>
                <div className="flex justify-center mb-8">
                  <div className="relative h-96 w-full max-w-3xl">
                    {formData.gameUrl && (
                      <iframe 
                        src={formData.gameUrl}
                        className="absolute inset-0 w-full h-full"
                        style={{ backgroundColor: "#000" }}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{formData.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Game Details</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Rating:</span> {formData.rating}/5
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Play Count:</span> {formData.playCount.toLocaleString()}
                      </p>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Categories:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.categories.map(category => (
                            <span key={category} className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Image 
                    src={imagePreview || formData.imageUrl || '/placeholder.png'} 
                    alt={formData.title}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Edit Mode */
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Game Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className={`mt-1 block w-full rounded-md shadow-sm ${
                        formErrors.title ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
                      } sm:text-sm`}
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                    {formErrors.title && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.title}</p>
                    )}
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                      Game ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      id="id"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-gray-100"
                      value={formData.id}
                      disabled
                    />
                    <p className="mt-2 text-xs text-gray-500">ID cannot be changed</p>
                  </div>
                  
                  <div className="col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Game Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      className={`mt-1 block w-full rounded-md shadow-sm ${
                        formErrors.description ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
                      } sm:text-sm`}
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                    {formErrors.description && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.description}</p>
                    )}
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="gameUrl" className="block text-sm font-medium text-gray-700">
                      Game URL
                    </label>
                    <input
                      type="url"
                      name="gameUrl"
                      id="gameUrl"
                      className={`mt-1 block w-full rounded-md shadow-sm ${
                        formErrors.gameUrl ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'
                      } sm:text-sm`}
                      placeholder="https://example.com/game"
                      value={formData.gameUrl}
                      onChange={handleInputChange}
                    />
                    {formErrors.gameUrl && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.gameUrl}</p>
                    )}
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1">
                    <div className="flex justify-between">
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating (1-5)
                      </label>
                      <span className="text-sm text-gray-500">{formData.rating}</span>
                    </div>
                    <input
                      type="range"
                      name="rating"
                      id="rating"
                      min="1"
                      max="5"
                      step="0.1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      value={formData.rating}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="playCount" className="block text-sm font-medium text-gray-700">
                      Play Count
                    </label>
                    <input
                      type="number"
                      name="playCount"
                      id="playCount"
                      min="0"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      value={formData.playCount}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Game Image
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="mr-4">
                        {(imagePreview || formData.imageUrl) ? (
                          <div className="relative h-32 w-32 rounded-md overflow-hidden bg-gray-100">
                            <Image 
                              src={imagePreview || formData.imageUrl}
                              alt={formData.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        ) : (
                          <div className="h-32 w-32 border-2 border-gray-300 border-dashed rounded-md flex items-center justify-center">
                            <span className="text-gray-500">No image</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex text-sm">
                          <label
                            htmlFor="image-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none"
                          >
                            <span>Upload Image</span>
                            <input
                              id="image-upload"
                              name="image-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 2MB</p>
                      </div>
                    </div>
                    {formErrors.image && (
                      <p className="mt-2 text-sm text-red-600">{formErrors.image}</p>
                    )}
                  </div>
                  
                  <div className="col-span-2">
                    <fieldset>
                      <legend className="text-sm font-medium text-gray-700">Game Categories</legend>
                      {formErrors.categories && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.categories}</p>
                      )}
                      <div className="mt-2 grid grid-cols-2 gap-y-2 gap-x-4 sm:grid-cols-3 md:grid-cols-4">
                        {availableCategories.map((category) => (
                          <div key={category} className="flex items-center">
                            <input
                              id={`category-${category}`}
                              name={`category-${category}`}
                              type="checkbox"
                              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                              checked={formData.categories.includes(category)}
                              onChange={() => handleCategoryToggle(category)}
                            />
                            <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Link
                    href="/admin"
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
} 