/**
 * types.ts
 * 
 * Central type definitions for the Bludify application.
 * Contains TypeScript interfaces and types used across components.
 * 
 * Type Definitions:
 * - Product: Marketplace product data structure
 * - IconProps: Standard props for icon components
 * 
 * NOTE: Keep all shared types in this file for consistency
 * TODO: Add User type for authentication
 * TODO: Add Order/Transaction types for purchase flow
 * TODO: Add VerificationReport type for detailed verification data
 */
import React from 'react';

/**
 * Product interface representing a marketplace item.
 * Used in Marketplace page and product cards.
 * 
 * @property {string} id - Unique identifier in format BLD-XXXX-XX
 * @property {string} title - Product name and model
 * @property {number} price - Price in INR (paise, needs /100 for display)
 * @property {string} image - URL to product image
 * @property {string} specs - Brief specifications (e.g., "16GB • 512GB")
 * @property {string} condition - Device condition: Excellent, Good, or Fair
 * @property {boolean} verified - Whether device passed verification
 * @property {boolean} escrowSecured - Whether payment is held in escrow
 */
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