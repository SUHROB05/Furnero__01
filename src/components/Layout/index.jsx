import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div>
      <Header /> {/* Header ni qo'shamiz */}
      <main>{children}</main> {/* Asosiy kontent */}
      <Footer /> {/* Footer ni qo'shamiz */}
    </div>
  );
}

export default Layout;