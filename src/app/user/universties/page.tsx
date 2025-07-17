'use client';

import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@/components/ui/icons/SearchIcon';
import { MapPinIcon } from '@/components/ui/icons/MapPinIcon';
import { StarIcon } from '@/components/ui/icons/StarIcon';
import { HeartIcon } from '@/components/ui/icons/HeartIcon';
import { HeartSolidIcon } from '@/components/ui/icons/HeartSolidIcon';
import { EyeIcon } from '@/components/ui/icons/EyeIcon';
import { GraduationCapIcon } from '@/components/ui/icons/GraduationCapIcon';
import { GlobeIcon } from '@/components/ui/icons/GlobeIcon';
import { UsersIcon } from '@/components/ui/icons/UsersIcon';
import { BookOpenIcon } from '@/components/ui/icons/BookOpenIcon';

// Sample university data
const sampleUniversities = [
  {
    id: 1,
    universityName: "Harvard University",
    country: "United States",
    city: "Cambridge",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts.",
    worldRanking: 1,
    countryRanking: 1,
    acceptanceRate: 4.6,
    studentPopulation: 31200,
    internationalStudentsPercentage: 23.5,
    foundedYear: 1636,
    universityType: "Private",
    campusSize: "5,083 acres",
    address: "Cambridge, MA 02138, United States",
    phone: "+1-617-495-1000",
    email: "admissions@harvard.edu",
    universityWebsite: "https://www.harvard.edu",
    isActive: true
  },
  {
    id: 2,
    universityName: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/University_of_Oxford_logo.svg/1200px-University_of_Oxford_logo.svg.png",
    description: "The University of Oxford is a collegiate research university in Oxford, England.",
    worldRanking: 2,
    countryRanking: 1,
    acceptanceRate: 17.5,
    studentPopulation: 24400,
    internationalStudentsPercentage: 43.0,
    foundedYear: 1096,
    universityType: "Public",
    campusSize: "1,800 acres",
    address: "Oxford OX1 2JD, United Kingdom",
    phone: "+44-1865-270000",
    email: "undergraduate.admissions@ox.ac.uk",
    universityWebsite: "https://www.ox.ac.uk",
    isActive: true
  },
  {
    id: 3,
    universityName: "Stanford University",
    country: "United States",
    city: "Stanford",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png",
    description: "Stanford University is a private research university in Stanford, California.",
    worldRanking: 3,
    countryRanking: 2,
    acceptanceRate: 4.3,
    studentPopulation: 17250,
    internationalStudentsPercentage: 24.0,
    foundedYear: 1885,
    universityType: "Private",
    campusSize: "8,180 acres",
    address: "Stanford, CA 94305, United States",
    phone: "+1-650-723-2300",
    email: "admission@stanford.edu",
    universityWebsite: "https://www.stanford.edu",
    isActive: true
  }
];

interface University {
  id: number;
  universityName: string;
  country: string;
  city: string;
  logoUrl?: string;
  description?: string;
  worldRanking?: number;
  countryRanking?: number;
  acceptanceRate?: number;
  studentPopulation?: number;
  internationalStudentsPercentage?: number;
  foundedYear?: number;
  universityType?: string;
  campusSize?: string;
  address?: string;
  phone?: string;
  email?: string;
  universityWebsite: string;
  isActive: boolean;
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('ranking');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const itemsPerPage = 6;

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUniversities(sampleUniversities);
        setFilteredUniversities(sampleUniversities);
      } catch (err) {
        setError('Failed to load universities');
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  useEffect(() => {
    let filtered = universities;

    if (searchTerm) {
      filtered = filtered.filter(uni => 
        uni.universityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCountry) {
      filtered = filtered.filter(uni => uni.country === selectedCountry);
    }

    if (selectedType) {
      filtered = filtered.filter(uni => uni.universityType === selectedType);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'ranking':
          return (a.worldRanking || 9999) - (b.worldRanking || 9999);
        case 'name':
          return a.universityName.localeCompare(b.universityName);
        case 'acceptance':
          return (a.acceptanceRate || 100) - (b.acceptanceRate || 100);
        case 'population':
          return (b.studentPopulation || 0) - (a.studentPopulation || 0);
        default:
          return 0;
      }
    });

    setFilteredUniversities(filtered);
    setCurrentPage(1);
  }, [universities, searchTerm, selectedCountry, selectedType, sortBy]);

  const handleFavorite = (universityId: number) => {
    setFavorites(prev => 
      prev.includes(universityId) 
        ? prev.filter(id => id !== universityId)
        : [...prev, universityId]
    );
  };

  const getCountries = () => {
    return [...new Set(universities.map(uni => uni.country))];
  };

  const getTypes = () => {
    return [...new Set(universities.map(uni => uni.universityType).filter(Boolean))];
  };

  const paginatedUniversities = filteredUniversities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

  if (error) {
    return (
      <div className="w-full ml-64 p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Universities Worldwide
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover top universities across 147 countries and apply directly
        </p>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <GraduationCapIcon className="h-6 w-6 mr-2" />
            </div>
            <div className="text-3xl font-bold">{universities.length}</div>
            <div className="text-sm">Universities</div>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <GlobeIcon className="h-6 w-6 mr-2" />
            </div>
            <div className="text-3xl font-bold">{getCountries().length}</div>
            <div className="text-sm">Countries</div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpenIcon className="h-6 w-6 mr-2" />
            </div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-sm">Courses</div>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
            <div className="flex items-center justify-center mb-2">
              <UsersIcon className="h-6 w-6 mr-2" />
            </div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm">Students</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities, countries, cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Countries</option>
              {getCountries().map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              {getTypes().map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            >
              <option value="ranking">World Ranking</option>
              <option value="name">Name</option>
              <option value="acceptance">Acceptance Rate</option>
              <option value="population">Student Population</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('');
                setSelectedType('');
                setSortBy('ranking');
              }}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredUniversities.length} universities
        </p>
        <p className="text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* Universities Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedUniversities.map((university) => (
              <div key={university.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* University Logo */}
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={university.logoUrl || '/placeholder-university.png'}
                    alt={university.universityName}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {university.universityName}
                    </h3>
                    <button
                      onClick={() => handleFavorite(university.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {favorites.includes(university.id) ? (
                        <HeartSolidIcon className="h-5 w-5 fill-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center mb-3">
                    <MapPinIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">
                      {university.city}, {university.country}
                    </span>
                  </div>

                  {/* Rankings */}
                  <div className="flex gap-2 mb-4">
                    {university.worldRanking && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <StarIcon className="h-3 w-3 text-blue-500 mr-1" />
                        #{university.worldRanking} World
                      </span>
                    )}
                    {university.countryRanking && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <StarIcon className="h-3 w-3 text-purple-500 mr-1" />
                        #{university.countryRanking} Country
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {university.description && (
                    <p className="text-sm text-gray-600 mb-4">
                      {university.description.length > 120 
                        ? `${university.description.substring(0, 120)}...`
                        : university.description
                      }
                    </p>
                  )}

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    {university.acceptanceRate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Acceptance Rate:</span>
                        <span className="font-medium">{university.acceptanceRate}%</span>
                      </div>
                    )}
                    {university.studentPopulation && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-medium">{university.studentPopulation.toLocaleString()}</span>
                      </div>
                    )}
                    {university.internationalStudentsPercentage && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">International:</span>
                        <span className="font-medium">{university.internationalStudentsPercentage}%</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={university.universityWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        <EyeIcon className="h-4 w-4 text-white mr-1" />
                        Visit Website
                      </a>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <GraduationCapIcon className="h-4 w-4 text-gray-700 mr-1" />
                        View Courses
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 rounded-lg ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* No Results */}
      {!loading && filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No universities found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
    </div>
  );
}
