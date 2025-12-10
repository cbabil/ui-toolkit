/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './.ladle/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          500: '#6b7280',
          700: '#374151',
          900: '#111827'
        },
        brand: {
          bg: { dark: 'var(--color-bg-dark)', light: 'var(--color-bg-light)' },
          surface: { dark: 'var(--color-surface-dark)', light: 'var(--color-surface-light)' },
          text: { dark: 'var(--color-text-dark)', light: 'var(--color-text-light)' },
          accent: {
            primary: 'var(--color-accent-primary)',
            boost: 'var(--color-accent-boost)',
            blue: 'var(--color-accent-blue)',
            green: 'var(--color-accent-green)',
            red: 'var(--color-accent-red)'
          },
          divider: 'var(--color-divider)'
        }
      },
      borderRadius: {
        md: '10px'
      }
    }
  },
  plugins: []
};
