'use client';

import React, { useState, useEffect } from 'react';

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  gamesPerPage: number;
  allowComments: boolean;
  requireModeration: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  socialFacebook: string;
  socialTwitter: string;
  socialInstagram: string;
  gameImagesFolder: string;
  maxUploadSize: number;
  acceptedImageTypes: string[];
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'OnlineGames.wiki',
    siteDescription: 'Free online gaming website offering various types of HTML5 games, no download required, play instantly',
    contactEmail: 'admin@onlinegames.wiki',
    gamesPerPage: 12,
    allowComments: true,
    requireModeration: true,
    seoTitle: 'OnlineGames.wiki - Free Online Games, HTML5 Games',
    seoDescription: 'Experience a variety of free HTML5 games on OnlineGames.wiki, no download required, covering action, puzzle, card, racing and many other types',
    seoKeywords: 'online games,HTML5 games,free games,web games,mobile games,casual games',
    socialFacebook: 'https://facebook.com/onlinegameswiki',
    socialTwitter: 'https://twitter.com/onlinegameswiki',
    socialInstagram: 'https://instagram.com/onlinegameswiki',
    gameImagesFolder: '/images/games',
    maxUploadSize: 2,
    acceptedImageTypes: ['image/jpeg', 'image/png', 'image/webp']
  });

  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) : value
    });
  };

  // Handle image type checkbox changes
  const handleImageTypeChange = (type: string) => {
    const currentTypes = [...settings.acceptedImageTypes];
    
    if (currentTypes.includes(type)) {
      // If already selected, remove it
      setSettings({
        ...settings,
        acceptedImageTypes: currentTypes.filter(t => t !== type)
      });
    } else {
      // If not selected, add it
      setSettings({
        ...settings,
        acceptedImageTypes: [...currentTypes, type]
      });
    }
  };

  // Save settings
  const handleSaveSettings = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Saved settings:', settings);
      setSaveMessage('Settings saved successfully!');
      setIsSaving(false);
      
      // Clear message
      setTimeout(() => {
        setSaveMessage('');
      }, 3000);
    }, 800);
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">System Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage global settings and configurations for the website</p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('general')}
              className={`${
                activeTab === 'general'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Basic Settings
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`${
                activeTab === 'seo'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              SEO Settings
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`${
                activeTab === 'social'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('uploads')}
              className={`${
                activeTab === 'uploads'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Upload Settings
            </button>
          </nav>
        </div>

        <div className="px-4 py-5 sm:p-6">
          {/* Basic Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                    Website Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="siteName"
                      id="siteName"
                      value={settings.siteName}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="contactEmail"
                      id="contactEmail"
                      value={settings.contactEmail}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                    Website Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="siteDescription"
                      name="siteDescription"
                      rows={3}
                      value={settings.siteDescription}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Briefly describe the main content and features of the website
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="gamesPerPage" className="block text-sm font-medium text-gray-700">
                    Games Per Page
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="gamesPerPage"
                      id="gamesPerPage"
                      min="4"
                      max="48"
                      value={settings.gamesPerPage}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="allowComments"
                        name="allowComments"
                        type="checkbox"
                        checked={settings.allowComments}
                        onChange={handleInputChange}
                        className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="allowComments" className="font-medium text-gray-700">
                        Allow Game Comments
                      </label>
                      <p className="text-gray-500">Whether to allow users to comment on games</p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="requireModeration"
                        name="requireModeration"
                        type="checkbox"
                        checked={settings.requireModeration}
                        onChange={handleInputChange}
                        className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="requireModeration" className="font-medium text-gray-700">
                        Require Comment Moderation
                      </label>
                      <p className="text-gray-500">Whether comments require approval before being published</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Settings */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-700">
                    SEO Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="seoTitle"
                      id="seoTitle"
                      value={settings.seoTitle}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    The title that appears in search engine results
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="seoDescription" className="block text-sm font-medium text-gray-700">
                    Meta Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="seoDescription"
                      name="seoDescription"
                      rows={3}
                      value={settings.seoDescription}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    A brief description of your website for search engines
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="seoKeywords" className="block text-sm font-medium text-gray-700">
                    Meta Keywords
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="seoKeywords"
                      id="seoKeywords"
                      value={settings.seoKeywords}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Comma-separated keywords for search engines
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Save button */}
          <div className="mt-8 pt-5 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                {isSaving ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isSaving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
            {saveMessage && (
              <div className="mt-3">
                <p className="text-sm text-green-600">{saveMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 