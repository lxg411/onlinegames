'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { games, Game } from '../../../../lib/games';
import { useRouter } from 'next/navigation';

interface GameData extends Omit<Game, 'url'> {
  gameUrl: string;
}

export default function AddGame() {
  const router = useRouter();
  const [formData, setFormData] = useState<GameData>({
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    gameUrl: '',
    categories: [],
    rating: 4.5,
    playCount: 0
  });
  const [availableCategories] = useState([
    'Action', 'Adventure', 'Puzzle', 'Racing', 'Sports', 
    'Strategy', 'RPG', 'Shooter', 'Simulation', 'Arcade', 
    'Card', 'Board', 'Educational', 'Word', 'Family'
  ]);
  const [isPreview, setIsPreview] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

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

  // Generate ID from title
  useEffect(() => {
    if (formData.title) {
      // Generate URL-friendly ID
      const generatedId = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/--+/g, '-');     // Replace multiple hyphens with single one
      
      setFormData(prev => ({ ...prev, id: generatedId }));
    }
  }, [formData.title]);

  // Handle input changes
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

    setImageFile(file);
    
    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      
      // In a real environment, this would upload the image to the server
      // Since we're in a browser environment, we're just simulating the upload effect
      
      // Generate unique filename for the image
      const fileName = `${formData.id || Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      const filePath = `/images/games/${fileName}`;
      
      // Update imageUrl in form data with the relative path
      setFormData(prev => ({
        ...prev,
        imageUrl: filePath
      }));
      
      console.log(`Simulated upload: ${filePath}`);
      // Note: In a real production environment, we would call an API endpoint to handle the file upload
      // For example:
      // const formData = new FormData();
      // formData.append('image', file);
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(response => response.json())
      // .then(data => {
      //   setFormData(prev => ({
      //     ...prev,
      //     imageUrl: data.url
      //   }));
      // });
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
    
    if (!formData.imageUrl && !imageFile) {
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
    
    // Prepare game data to save
    const gameToSave: GameData = {
      ...formData,
      // Ensure playCount is a number
      playCount: typeof formData.playCount === 'string' 
        ? parseInt(formData.playCount) 
        : formData.playCount,
      // Ensure rating is a number
      rating: typeof formData.rating === 'string'
        ? parseFloat(formData.rating)
        : formData.rating
    };
    
    // Get existing game data from localStorage
    const allGames = loadGamesFromStorage();
    
    // Check if ID already exists
    const existingGame = allGames.find(g => g.id === gameToSave.id);
    if (existingGame) {
      // If ID exists, add random suffix
      gameToSave.id = `${gameToSave.id}-${Math.floor(Math.random() * 1000)}`;
    }
    
    // Add new game
    const updatedGames = [...allGames, gameToSave];
    
    // Save to localStorage
    localStorage.setItem('games', JSON.stringify(updatedGames));
    
    alert('Game has been successfully added!');
    
    // Redirect to management page
    router.push('/admin');
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Add New Game</h1>
          <p className="mt-1 text-sm text-gray-500">Create a new game and add it to the library</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsPreview(false)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              !isPreview 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setIsPreview(true)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              isPreview 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      {isPreview ? (
        // Preview mode
        <div className="bg-white shadow sm:rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            {imagePreview && (
              <div className="mb-6 flex justify-center">
                <div className="relative w-full max-w-md h-60">
                  <Image 
                    src={imagePreview}
                    alt={formData.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
            
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">{formData.title}</h2>
            
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-amber-400 text-2xl">
                  {star <= formData.rating ? '★' : '☆'}
                </span>
              ))}
              <span className="ml-2 text-gray-600">{formData.playCount.toLocaleString()} times played</span>
            </div>
            
            <p className="text-gray-700 mb-4">{formData.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {formData.categories.map(category => (
                <span key={category} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                  {category}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Link 
                href={formData.gameUrl}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md"
                target="_blank"
              >
                Start Game
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Edit mode
        <form onSubmit={handleSubmit} className="bg-white shadow sm:rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Game Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                      formErrors.title ? 'border-red-300' : ''
                    }`}
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="gameUrl" className="block text-sm font-medium text-gray-700">
                  Game URL
                </label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="gameUrl"
                    id="gameUrl"
                    value={formData.gameUrl}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                      formErrors.gameUrl ? 'border-red-300' : ''
                    }`}
                  />
                  {formErrors.gameUrl && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.gameUrl}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Game Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    className={`shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border border-gray-300 rounded-md ${
                      formErrors.description ? 'border-red-300' : ''
                    }`}
                  />
                  {formErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Game Image
                </label>
                <div className="mt-1 flex items-center">
                  <div className="flex-shrink-0">
                    {imagePreview ? (
                      <div className="relative h-32 w-32">
                        <Image
                          src={imagePreview}
                          alt="Game preview"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-md"
                        />
                      </div>
                    ) : (
                      <div className="h-32 w-32 border-2 border-gray-300 border-dashed rounded-md flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="relative bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500">
                      <label
                        htmlFor="image-upload"
                        className="relative text-sm font-medium text-amber-600 pointer-events-none"
                      >
                        <span>Upload Image</span>
                        <span className="sr-only">Game image</span>
                      </label>
                      <input
                        id="image-upload"
                        name="image-upload"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                        onChange={handleImageUpload}
                        accept="image/*"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 2MB</p>
                    {formErrors.image && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.image}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6">
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Game Categories</legend>
                  <div className="mt-2 grid grid-cols-2 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
                    {availableCategories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`category-${category}`}
                          name={`category-${category}`}
                          type="checkbox"
                          checked={formData.categories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formErrors.categories && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.categories}</p>
                  )}
                </fieldset>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating (1-5)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="playCount" className="block text-sm font-medium text-gray-700">
                  Play Count
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="playCount"
                    id="playCount"
                    min="0"
                    value={formData.playCount}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Save Game
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 