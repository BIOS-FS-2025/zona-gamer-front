/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Gaming Color Palette
      colors: {
        primary: {
          DEFAULT: '#ff4500',
          hover: '#e03e00',
        },
        secondary: {
          DEFAULT: '#00bfff',
          hover: '#009acd',
        },
        accent: '#ff6347',
        success: '#32cd32',
        warning: '#ffd700',
        
        // Background Colors
        bg: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          card: '#1e1e1e',
          'card-hover': '#252525',
        },
        
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: '#e0e0e0',
          muted: '#b0b0b0',
          dark: '#666666',
        },
      },
      
      // Background Images for Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff4500, #ff6347)',
        'gradient-secondary': 'linear-gradient(135deg, #00bfff, #0080ff)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 69, 0, 0.1), rgba(0, 191, 255, 0.1))',
      },
      
      // Shadows
      boxShadow: {
        'small': '0 2px 10px rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'large': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(255, 69, 0, 0.3)',
        'glow-secondary': '0 0 20px rgba(0, 191, 255, 0.3)',
      },
      
      // Custom Spacing
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        'xxl': '4rem',
      },
      
      // Border Radius
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      
      // Typography
      fontFamily: {
        'primary': ['Orbitron', 'monospace'],
        'secondary': ['Roboto', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      
      // Custom Screens/Breakpoints
      screens: {
        'mobile': '768px',
        'tablet': '1024px',
        'desktop': '1200px',
      },
      
      // Animations and Keyframes
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(249, 115, 22, 0.5)'
          },
          '50%': {
            textShadow: '0 0 25px rgba(249, 115, 22, 0.8), 0 0 35px rgba(249, 115, 22, 0.8)'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-in',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'slideDown': 'slideDown 0.3s ease',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'gaming': '10px',
      },
      
      // Custom letter spacing
      letterSpacing: {
        'gaming': '1px',
      },
      
      // Custom line heights
      lineHeight: {
        'gaming': '1.2',
      },
      
      // Custom transition timing
      transitionDuration: {
        '300': '300ms',
      },
      
      // Custom transform values
      translate: {
        'gaming': '-2px',
      },
    },
  },
  plugins: [],
}
