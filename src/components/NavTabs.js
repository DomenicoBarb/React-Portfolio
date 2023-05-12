import React from 'react';

// We are able to extract the key value pairs from props using destructuring assignment in the function parameter.
// In this case, we are extracting `currentPage` and `handlePageChange` from the `props` object.

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //* The following logic is a conditional (ternary) operator.
          //* It checks whether `currentPage` is equal to 'Home'.
          //* If it is true, it applies the 'nav-link active' class to indicate the active tab.
          //* If it is false, it applies only the 'nav-link' class.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This logic is similar to the previous one.
          // It checks whether `currentPage` is equal to 'About'.
          // If it is true, it applies the 'nav-link active' class.
          // If it is false, it applies only the 'nav-link' class.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // This logic is also similar to the previous ones.
          // It checks whether `currentPage` is equal to 'Blog'.
          // If it is true, it applies the 'nav-link active' class.
          // If it is false, it applies only the 'nav-link' class.

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // This logic is the same as the previous ones.
          // It checks whether `currentPage` is equal to 'Contact'.
          // If it is true, it applies the 'nav-link active' class.
          // If it is false, it applies only the 'nav-link' class.

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
