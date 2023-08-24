import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="bg-light text-black text-center py-2 mt-3">
      <p>&copy; {currentYear} Company, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
