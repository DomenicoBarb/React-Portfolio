import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is responsible for rendering the appropriate page component based on the value of `currentPage`.
  // It uses conditional statements (`if` and `else`) to determine which component to render.
  // If `currentPage` is 'Home', it returns the `Home` component.
  // If `currentPage` is 'About', it returns the `About` component.
  // If `currentPage` is 'Resume', it returns the `Resume` component.
  // For any other value of `currentPage`, it returns the `Contact` component.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // This function is responsible for updating the `currentPage` state based on the selected page received as an argument.
  // It is passed as a prop to the `NavTabs` component and gets called when a tab is clicked.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing `currentPage` and `handlePageChange` as props to the `NavTabs` component.
       * `currentPage` is the currently active page.
       * `handlePageChange` is the function to update the active page when a tab is clicked.
       */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* The `renderPage` method is called here to dynamically render the appropriate page component based on the value of `currentPage`. */}
      {renderPage()}
    </div>
  );
}
