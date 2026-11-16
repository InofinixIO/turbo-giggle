import React from 'react';
import { PricingSection } from '../components/home/PricingSection';
import { ModalType } from '../types';

interface Pricing1PageProps {
  onOpenModal: (type: ModalType) => void;
}

export const Pricing1Page: React.FC<Pricing1PageProps> = ({ onOpenModal }) => {
  return (
    <div className="pt-24 pb-20">
      <PricingSection onOpenModal={onOpenModal} />
    </div>
  );
};
