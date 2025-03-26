'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Define category interface
interface Category {
  id: string;
  name: string;
  slug: string;
  gamesCount: number;
}

export default function CategoriesManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // Mock getting categories from API
  useEffect(() => {
    // In a real application, this would be an API call
    const demoCategories: Category[] = [
      { id: '1', name: 'Action', slug: 'action', gamesCount: 15 },
      { id: '2', name: 'Adventure', slug: 'adventure', gamesCount: 12 },
      { id: '3', name: 'Puzzle', slug: 'puzzle', gamesCount: 20 },
      { id: '4', name: 'Strategy', slug: 'strategy', gamesCount: 8 },
      { id: '5', name: 'Racing', slug: 'racing', gamesCount: 7 },
      { id: '6', name: 'Sports', slug: 'sports', gamesCount: 9 },
      { id: '7', name: 'Simulation', slug: 'simulation', gamesCount: 6 },
      { id: '8', name: 'Arcade', slug: 'arcade', gamesCount: 11 },
      { id: '9', name: 'Card', slug: 'card', gamesCount: 5 },
      { id: '10', name: 'Board', slug: 'board', gamesCount: 4 },
      { id: '11', name: 'Educational', slug: 'educational', gamesCount: 3 },
      { id: '12', name: 'RPG', slug: 'rpg', gamesCount: 8 },
      { id: '13', name: 'Multiplayer', slug: 'multiplayer', gamesCount: 10 },
    ];
    
    setCategories(demoCategories);
    setLoading(false);
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // If editing the name, automatically generate slug
    if (name === 'name') {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
        
      setFormData({
        ...formData,
        name: value,
        slug: slug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = 'Category name cannot be empty';
    if (!formData.slug.trim()) errors.slug = 'Category slug cannot be empty';
    
    // Check if slug already exists (except for the currently edited category)
    const existingCategory = categories.find(
      cat => cat.slug === formData.slug && 
      (!selectedCategory || cat.id !== selectedCategory.id)
    );
    
    if (existingCategory) errors.slug = 'This category slug already exists';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Add category
  const handleAddCategory = () => {
    setFormData({ name: '', slug: '' });
    setFormErrors({});
    setIsAdding(true);
    setIsEditing(false);
    setSelectedCategory(null);
  };

  // Edit category
  const handleEditCategory = (category: Category) => {
    setFormData({ 
      name: category.name,
      slug: category.slug 
    });
    setFormErrors({});
    setIsAdding(false);
    setIsEditing(true);
    setSelectedCategory(category);
  };

  // Cancel editing or adding
  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setSelectedCategory(null);
    setFormData({ name: '', slug: '' });
    setFormErrors({});
  };

  // Save category
  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (isAdding) {
      // Mock adding category
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        slug: formData.slug,
        gamesCount: 0
      };
      
      setCategories([...categories, newCategory]);
      alert('Category added successfully!');
    } else if (isEditing && selectedCategory) {
      // Mock updating category
      const updatedCategories = categories.map(cat => 
        cat.id === selectedCategory.id 
          ? { ...cat, name: formData.name, slug: formData.slug }
          : cat
      );
      
      setCategories(updatedCategories);
      alert('Category updated successfully!');
    }
    
    // Reset form
    handleCancel();
  };

  // Delete category
  const handleDeleteCategory = (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this category? Related games will lose this category tag.')) {
      // Mock deleting category
      const updatedCategories = categories.filter(cat => cat.id !== categoryId);
      setCategories(updatedCategories);
      alert('Category deleted successfully');
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Category Management</h1>
        {!isAdding && !isEditing && (
          <button
            onClick={handleAddCategory}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700"
          >
            Add Category
          </button>
        )}
      </div>

      {(isAdding || isEditing) && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {isAdding ? 'Add New Category' : 'Edit Category'}
            </h2>
            <form onSubmit={handleSaveCategory} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.name ? 'border-red-500' : ''}`}
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                  Category Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className={`mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${formErrors.slug ? 'border-red-500' : ''}`}
                />
                {formErrors.slug && <p className="mt-1 text-sm text-red-500">{formErrors.slug}</p>}
                <p className="mt-1 text-sm text-gray-500">Will be used in URL, for example: /categories/action</p>
              </div>

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category Slug
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Game Count
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.slug}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.gamesCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link 
                        href={`/categories/${category.slug}`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="text-red-600 hover:text-red-900"
                        disabled={category.gamesCount > 0}
                        title={category.gamesCount > 0 ? 'This category has games, cannot delete' : ''}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
} 