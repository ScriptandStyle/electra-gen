
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Shore Energy custom colors with expanded palette
				shore: {
					blue: '#0c4a6e',     // Deep blue for ocean/seawater
					teal: '#0d9488',     // Teal for purified water
					amber: '#f59e0b',    // Amber for sand/heat elements
					electric: '#3b82f6', // Electric blue for electricity
					lightblue: '#7dd3fc', // Light blue for water highlights
					turquoise: '#2dd4bf', // Turquoise for water variations
					coral: '#f87171',    // Coral for heat accents
					navy: '#1e3a8a',     // Navy for deep water
					gold: '#fbbf24',     // Gold for sand variations
					aqua: '#22d3ee',     // Aqua for clean water
					purple: '#a855f7',   // Purple for innovation
					emerald: '#10b981',  // Emerald for sustainability
					indigo: '#6366f1',   // Indigo for technology
					lime: '#84cc16',     // Lime for eco-friendly
					rose: '#f43f5e',     // Rose for energy
					// New enhanced colors
					deepblue: '#075985',  // Deeper blue variation
					oceangreen: '#0f766e', // Ocean green blend
					skyglow: '#38bdf8',   // Bright sky blue
					midnightblue: '#172554', // Midnight blue variant
					lagoon: '#0ea5e9',    // Lagoon blue color
					sandlight: '#fcd34d',  // Light sand color
					sandstone: '#d97706',  // Sandstone variation
					sunrise: '#fb923c',    // Sunrise orange tint
					sunset: '#e11d48',     // Sunset red tone
					seafoam: '#0d9488',    // Seafoam green hue
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flow-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'wave': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'rotate': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'water-ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.3' },
					'100%': { transform: 'scale(1.3)', opacity: '0' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(50px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-50px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'rotate-glow': {
					'0%': { transform: 'rotate(0deg)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' },
					'50%': { transform: 'rotate(180deg)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' },
					'100%': { transform: 'rotate(360deg)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }
				},
				'bubble-rise': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { opacity: '0.8' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'color-cycle': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				},
				'flip': {
					'0%': { transform: 'perspective(400px) rotateY(0)' },
					'100%': { transform: 'perspective(400px) rotateY(360deg)' }
				},
				'bounce': {
					'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
					'40%': { transform: 'translateY(-20px)' },
					'60%': { transform: 'translateY(-10px)' }
				},
				'ripple-out': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'color-pulse': {
					'0%, 100%': { backgroundColor: 'var(--color-start)' },
					'50%': { backgroundColor: 'var(--color-end)' }
				},
				'jello': {
					'0%, 100%': { transform: 'scale3d(1, 1, 1)' },
					'30%': { transform: 'scale3d(1.25, 0.75, 1)' },
					'40%': { transform: 'scale3d(0.75, 1.25, 1)' },
					'50%': { transform: 'scale3d(1.15, 0.85, 1)' },
					'65%': { transform: 'scale3d(0.95, 1.05, 1)' },
					'75%': { transform: 'scale3d(1.05, 0.95, 1)' }
				},
				'swirl': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.2)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				// New animations
				'ping-once': {
					'75%, 100%': { transform: 'scale(1.5)', opacity: '0' }
				},
				'spin-once': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'wobble': {
					'0%, 100%': { transform: 'translateX(0%)' },
					'15%': { transform: 'translateX(-15%) rotate(-5deg)' },
					'30%': { transform: 'translateX(10%) rotate(3deg)' },
					'45%': { transform: 'translateX(-10%) rotate(-3deg)' },
					'60%': { transform: 'translateX(5%) rotate(2deg)' },
					'75%': { transform: 'translateX(-5%) rotate(-1deg)' }
				},
				'vibrate': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'pulse-shadow': {
					'0%, 100%': { boxShadow: '0 0 8px rgba(45, 212, 191, 0.6)' },
					'50%': { boxShadow: '0 0 18px rgba(59, 130, 246, 0.8)' }
				},
				'rotate-scale': {
					'0%': { transform: 'scale(1) rotate(0)' },
					'50%': { transform: 'scale(1.1) rotate(180deg)' },
					'100%': { transform: 'scale(1) rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow-right': 'flow-right 3s ease-in-out infinite',
				'wave': 'wave 3s ease-in-out infinite',
				'rotate': 'rotate 10s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'float': 'float 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'scale-up': 'scale-up 0.4s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'slide-down': 'slide-down 0.6s ease-out forwards',
				'slide-left': 'slide-left 0.6s ease-out forwards',
				'slide-right': 'slide-right 0.6s ease-out forwards',
				'rotate-glow': 'rotate-glow 8s linear infinite',
				'bubble-rise': 'bubble-rise 8s ease-in infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'color-cycle': 'color-cycle 8s linear infinite',
				'flip': 'flip 2s ease-in-out',
				'bounce': 'bounce 2s ease-in-out infinite',
				'ripple-out': 'ripple-out 1.5s ease-out infinite',
				'color-pulse': 'color-pulse 3s ease-in-out infinite',
				'jello': 'jello 1s both',
				'swirl': 'swirl 3s ease-in-out infinite',
				// New animations
				'ping-once': 'ping-once 1s cubic-bezier(0, 0, 0.2, 1)',
				'spin-once': 'spin-once 0.7s ease-in-out',
				'wobble': 'wobble 1s ease-in-out',
				'vibrate': 'vibrate 0.3s linear infinite',
				'pulse-shadow': 'pulse-shadow 2s infinite',
				'rotate-scale': 'rotate-scale 3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
