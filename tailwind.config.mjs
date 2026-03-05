export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Dynamic color classes used in leadership pages
    {
      pattern: /border-(emerald|indigo|amber|rose|cyan|violet)-(500)/,
      variants: ['hover'],
    },
    {
      pattern: /border-(emerald|indigo|amber|rose|cyan|violet)-500\/(20|30)/,
    },
    {
      pattern: /text-(emerald|indigo|amber|rose|cyan|violet)-(400|500)/,
    },
    {
      pattern: /bg-(emerald|indigo|amber|rose|cyan|violet)-500\/(5|10|15|20)/,
    },
    // Rose color extensions needed for leadership pages
    'text-rose-400',
    'text-rose-500',
    'border-rose-500',
    'border-rose-500/30',
    'bg-rose-500/5',
    'bg-rose-500/10',
    'bg-rose-500/20',
    'hover:border-rose-500',
    'border-l-4',
    // Cyan color extensions
    'text-cyan-400',
    'text-cyan-500',
    'border-cyan-500',
    'border-cyan-500/30',
    'hover:border-cyan-500',
    'bg-cyan-500/10',
    // Violet color extensions
    'text-violet-400',
    'text-violet-500',
    'border-violet-500',
    'border-violet-500/30',
    'hover:border-violet-500',
    'bg-violet-500/10',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          300: '#6ee7b7',
          500: '#10b981',
          600: '#059669',
          800: '#065f46',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        amber: {
          500: '#f59e0b',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          800: '#155e75',
        },
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          800: '#5b21b6',
        },
        slate: {
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};