import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection.jsx';

const levels = ["Bachelor's", "Master's", 'Associate', 'PhD / Doctorate', 'Language Course'];
const languages = ['English', 'Turkish'];
const universities = ['Istanbul Medipol University', 'Istanbul Technical University', 'Hacettepe University', 'Koc University', 'Sabanci University', 'Aydin University', 'Topkapi University', 'Gelisim University', 'Beykoz University'];
const cities = ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bolu'];

export default function SearchSection() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('');
  const [lang, setLang] = useState('');
  const [univ, setUniv] = useState('');
  const [city, setCity] = useState('');
  const [scholarship, setScholarship] = useState(false);

  const handleClear = () => {
    setQuery('');
    setLevel('');
    setLang('');
    setUniv('');
    setCity('');
    setScholarship(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query || 'All programs'} with selected filters.`);
  };

  return (
    <section id="programs" className="search-section">
      <div className="container">
        <AnimatedSection className="search-section__title">
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Find Your Ideal Program</h2>
          <p style={{ color: 'var(--gray-text)', marginTop: '8px' }}>
            Filter through hundreds of courses and find the perfect match for your academic future.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form className="filter-grid" onSubmit={handleSearch}>
            {/* Search Input */}
            <div className="filter-field">
              <input
                type="text"
                placeholder="Search programs by name, university, or..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Level */}
            <div className="filter-field">
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">All Levels</option>
                {levels.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div className="filter-field">
              <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="">All Languages</option>
                {languages.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* University */}
            <div className="filter-field">
              <select value={univ} onChange={(e) => setUniv(e.target.value)}>
                <option value="">All Universities</option>
                {universities.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="filter-field">
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">All Cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </form>

          {/* Additional Filter Row */}
          <div className="filter-options">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={scholarship}
                onChange={(e) => setScholarship(e.target.checked)}
              />
              <span>Show Programs with Scholarships Available</span>
            </label>

            <button type="button" className="filter-clear-btn" onClick={handleClear}>
              Clear Filters
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

