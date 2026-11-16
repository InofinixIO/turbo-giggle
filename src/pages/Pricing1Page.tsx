import React from 'react';
import { PricingSection } from '../components/home/PricingSection';
import { ModalType } from '../types';

interface PricingPageProps {
  onOpenModal: (type: ModalType) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-24 pb-20">
      <PricingSection onOpenModal={onOpenModal} />
    </div>
  );
};
