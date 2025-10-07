/**
 * Style Store - Zustand State Management
 *
 * This store manages the current style configuration for the entire application.
 * It provides actions to update styles and persist them to localStorage.
 *
 * Think of this as the "current document state" - while types define what's POSSIBLE,
 * this store holds what's ACTUALLY being used right now.
 */

import { create } from 'zustand';
import {
  StyleConfig,
  DEFAULT_STYLE_CONFIG,
  NavigationConfig,
  CaseStudyConfig,
  GalleryConfig,
  ThemeConfig,
  isValidStyleConfig,
} from '@/types/styles';

/**
 * LocalStorage key for persisting styles
 */
const STORAGE_KEY = 'portfolio-style-config';

/**
 * Store State Interface
 * Defines the shape of our state and available actions
 */
interface StyleStore {
  // Current style configuration
  config: StyleConfig;

  // Actions to update specific sections
  updateNavigation: (navigation: Partial<NavigationConfig>) => void;
  updateCaseStudy: (caseStudy: Partial<CaseStudyConfig>) => void;
  updateGallery: (gallery: Partial<GalleryConfig>) => void;
  updateTheme: (theme: Partial<ThemeConfig>) => void;

  // Action to update entire config at once (used by AI)
  updateConfig: (config: Partial<StyleConfig>) => void;

  // Reset to defaults
  resetStyles: () => void;

  // Persistence helpers
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

/**
 * Helper: Load config from localStorage
 * Returns parsed config if valid, otherwise returns defaults
 */
function loadConfigFromStorage(): StyleConfig {
  if (typeof window === 'undefined') {
    // Server-side rendering - return defaults
    return DEFAULT_STYLE_CONFIG;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_STYLE_CONFIG;

    const parsed = JSON.parse(stored);

    // Validate the stored config
    if (isValidStyleConfig(parsed)) {
      return parsed;
    } else {
      console.warn('Invalid style config in localStorage, using defaults');
      return DEFAULT_STYLE_CONFIG;
    }
  } catch (error) {
    console.error('Failed to load styles from localStorage:', error);
    return DEFAULT_STYLE_CONFIG;
  }
}

/**
 * Helper: Save config to localStorage
 */
function saveConfigToStorage(config: StyleConfig): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Failed to save styles to localStorage:', error);
  }
}

/**
 * Create the Zustand store
 */
export const useStyleStore = create<StyleStore>((set, get) => ({
  // Initial state - try to load from localStorage, fallback to defaults
  config: loadConfigFromStorage(),

  /**
   * Update navigation settings
   * Merges partial updates with existing navigation config
   */
  updateNavigation: (navigation) => {
    set((state) => {
      const newConfig = {
        ...state.config,
        navigation: {
          ...state.config.navigation,
          ...navigation,
        },
      };
      saveConfigToStorage(newConfig);
      return { config: newConfig };
    });
  },

  /**
   * Update case study settings
   * Merges partial updates with existing case study config
   */
  updateCaseStudy: (caseStudy) => {
    set((state) => {
      const newConfig = {
        ...state.config,
        caseStudy: {
          ...state.config.caseStudy,
          ...caseStudy,
        },
      };
      saveConfigToStorage(newConfig);
      return { config: newConfig };
    });
  },

  /**
   * Update gallery settings
   * Merges partial updates with existing gallery config
   */
  updateGallery: (gallery) => {
    set((state) => {
      const newConfig = {
        ...state.config,
        gallery: {
          ...state.config.gallery,
          ...gallery,
        },
      };
      saveConfigToStorage(newConfig);
      return { config: newConfig };
    });
  },

  /**
   * Update theme settings
   * Merges partial updates with existing theme config
   */
  updateTheme: (theme) => {
    set((state) => {
      const newConfig = {
        ...state.config,
        theme: {
          ...state.config.theme,
          ...theme,
        },
      };
      saveConfigToStorage(newConfig);
      return { config: newConfig };
    });
  },

  /**
   * Update entire config (or multiple sections at once)
   * This is what the AI will use to apply style changes
   */
  updateConfig: (partialConfig) => {
    set((state) => {
      const newConfig = {
        navigation: {
          ...state.config.navigation,
          ...(partialConfig.navigation || {}),
        },
        caseStudy: {
          ...state.config.caseStudy,
          ...(partialConfig.caseStudy || {}),
        },
        gallery: {
          ...state.config.gallery,
          ...(partialConfig.gallery || {}),
        },
        theme: {
          ...state.config.theme,
          ...(partialConfig.theme || {}),
        },
      };
      saveConfigToStorage(newConfig);
      return { config: newConfig };
    });
  },

  /**
   * Reset all styles to defaults
   */
  resetStyles: () => {
    saveConfigToStorage(DEFAULT_STYLE_CONFIG);
    set({ config: DEFAULT_STYLE_CONFIG });
  },

  /**
   * Manually save current config to localStorage
   */
  saveToLocalStorage: () => {
    const { config } = get();
    saveConfigToStorage(config);
  },

  /**
   * Manually load config from localStorage
   */
  loadFromLocalStorage: () => {
    const config = loadConfigFromStorage();
    set({ config });
  },
}));
