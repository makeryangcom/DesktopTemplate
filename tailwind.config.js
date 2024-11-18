// Copyright 2024 MakerYang, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @type {import("tailwindcss").Config} */

import tailwindcssAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    darkMode: "class",
    content: ["./template/src/**/*.{vue,js,ts,.d.ts,jsx,tsx,md,mdx}"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                default: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                switch: "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: 0
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)"
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)"
                    },
                    to: {
                        height: 0
                    },
                },
                "collapsible-down": {
                    from: {
                        height: 0
                    },
                    to: {
                        height: "var(--radix-collapsible-content-height)"
                    },
                },
                "collapsible-up": {
                    from: {
                        height: "var(--radix-collapsible-content-height)"
                    },
                    to: {
                        height: 0
                    },
                },
                "scroll-left-right": {
                    "0%, 100%": {
                        transform: "translateX(0)"
                    },
                    "50%": {
                        transform: "translateX(-100%)"
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-in-out",
                "accordion-up": "accordion-up 0.2s ease-in-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
                "scroll-left-right": "scroll-left-right 5s linear infinite",
            },
        },
    },
    plugins: [tailwindcssAnimate]
}