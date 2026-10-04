/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LeadModal } from './components/modals/LeadModal';
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { PricingPage } from './pages/PricingPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CompanyPage } from './pages/CompanyPage';
import { ModalType } from './types';

function AppContent() {
  const { currentPath } = useRouter();
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  // Route Dispatcher
  const renderCurrentView = () => {
    // 1. Root / Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onOpenModal={handleOpenModal} />;
    }

    // 2. Platform Routes: /platform or /platform/:slug
    if (currentPath.startsWith('/platform')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || '';
      return <PlatformPage slug={slug} onOpenModal={handleOpenModal} />;
    }

    // 3. Solutions Routes: /solutions or /solutions/:slug
    if (currentPath.startsWith('/solutions')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || '';
      return <SolutionsPage slug={slug} onOpenModal={handleOpenModal} />;
    }

    // 4. Developers Routes: /developers or /developers/:slug
    if (currentPath.startsWith('/developers')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || '';
      return <DevelopersPage slug={slug} onOpenModal={handleOpenModal} />;
    }

    // 5. Pricing Route: /pricing
    if (currentPath === '/pricing') {
      return <PricingPage onOpenModal={handleOpenModal} />;
    }

    // 6. Resources Routes: /resources or /resources/:slug
    if (currentPath.startsWith('/resources')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || '';
      return <ResourcesPage slug={slug} onOpenModal={handleOpenModal} />;
    }

    // 7. Company Routes: /company or /company/:slug
    if (currentPath.startsWith('/company')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || '';
      return <CompanyPage slug={slug} onOpenModal={handleOpenModal} />;
    }

    // Default Fallback
    return <HomePage onOpenModal={handleOpenModal} />;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* SECTION 1: GLOBAL NAVBAR WITH MEGA-MENU */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* DEDICATED ROUTE VIEW */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* SECTION 18: GLOBAL FOOTER WITH ALL SLUGS */}
      <Footer onOpenModal={handleOpenModal} />

      {/* SHARED LEAD & DEMO CAPTURE MODAL */}
      <LeadModal 
        type={modalType} 
        onClose={handleCloseModal} 
      />

    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
