import React from 'react';

export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    specs: string;
    condition: 'Excellent' | 'Good' | 'Fair';
    verified: boolean;
    escrowSecured: boolean;
}

export interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
}

export interface PricingTier {
    name: string;
    fee: string;
    features: string[];
    cta: string;
    isPopular?: boolean;
    color: 'neon' | 'cyber' | 'gray';
}