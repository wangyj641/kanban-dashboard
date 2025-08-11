import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // 主色调 - 紫色系 (Figma Design System)
        primary: {
          50: 'rgb(245 243 255)',
          100: 'rgb(237 233 254)',
          200: 'rgb(221 214 254)',
          300: 'rgb(196 181 253)',
          400: 'rgb(167 139 250)',
          500: 'rgb(139 92 246)',
          600: 'rgb(124 58 237)',
          700: 'rgb(109 40 217)',
          800: 'rgb(91 33 182)',
          900: 'rgb(76 29 149)',
        },
        // 语义颜色 (Figma Design System)
        success: {
          50: 'rgb(240 253 244)',
          100: 'rgb(220 252 231)',
          200: 'rgb(187 247 208)',
          300: 'rgb(134 239 172)',
          400: 'rgb(74 222 128)',
          500: 'rgb(34 197 94)',
          600: 'rgb(22 163 74)',
          700: 'rgb(21 128 61)',
        },
        warning: {
          50: 'rgb(254 249 195)',
          100: 'rgb(254 243 199)',
          200: 'rgb(253 230 138)',
          300: 'rgb(252 211 77)',
          400: 'rgb(251 191 36)',
          500: 'rgb(245 158 11)',
          600: 'rgb(217 119 6)',
          700: 'rgb(180 83 9)',
        },
        danger: {
          50: 'rgb(254 242 242)',
          100: 'rgb(254 226 226)',
          200: 'rgb(254 202 202)',
          300: 'rgb(252 165 165)',
          400: 'rgb(248 113 113)',
          500: 'rgb(239 68 68)',
          600: 'rgb(220 38 38)',
          700: 'rgb(185 28 28)',
        },
        // 中性色 (Figma Design System)
        gray: {
          50: 'rgb(249 250 251)',
          100: 'rgb(243 244 246)',
          200: 'rgb(229 231 235)',
          300: 'rgb(209 213 219)',
          400: 'rgb(156 163 175)',
          500: 'rgb(107 114 128)',
          600: 'rgb(75 85 99)',
          700: 'rgb(55 65 81)',
          800: 'rgb(31 41 55)',
          900: 'rgb(17 24 39)',
        },
        // 项目状态颜色
        green: {
          500: '#10B981',
        },
        yellow: {
          500: '#F59E0B',
        },
        purple: {
          500: '#8B5CF6',
        },
        blue: {
          500: '#3B82F6',
        },
        red: {
          500: '#EF4444',
        },
        orange: {
          500: '#F97316',
        },
      },
      boxShadow: {
        // Figma Design System Shadows
        xs: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        sm: '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        // 自定义阴影
        card: '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        soft: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        sidebar: '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        // 拖拽状态阴影
        drag: '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'drag-primary': '0px 25px 50px -12px rgba(124, 58, 237, 0.25)',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        full: '9999px',
      },
      spacing: {
        // 8px 网格系统
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        // 布局尺寸
        sidebar: '280px',
        header: '80px',
        col: '320px',
        'col-gap': '24px',
      },
      width: {
        sidebar: '280px',
        col: '320px',
      },
      height: {
        header: '80px',
      },
      fontSize: {
        h1: ['32px', { lineHeight: '40px', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h3: ['18px', { lineHeight: '24px', fontWeight: '600' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        small: ['12px', { lineHeight: '16px', fontWeight: '400' }],
        tag: ['11px', { lineHeight: '14px', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(4px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
