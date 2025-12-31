
// Fix: Added React import to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  email: string;
}
