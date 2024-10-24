/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 992px) { ... }

      xl: "1320px",
      // => @media (min-width: 1200px) { ... }

      // "2xl": "1536px",
      // // => @media (min-width: 1400px) { ... }
    },
    variants: {
      extend: {
        padding: ["responsive"], // Enable responsive padding utilities
      },
      margin: ["last"],
    },
    extend: {
      backgroundImage: {
        // not
        "dotted-line":
          "url('data:image/svg+xml,%3Csvg width='1px' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23F96D61' stroke-width='2' stroke-dasharray='6, 14' stroke-dashoffset='0' stroke-linecap='square'/%3E%3C/svg%3E')",
        "line-bg": "url('/images/about/line.svg')", //not
        abthome: "url('/images/about/home.svg')", // yes
      },
      height: {
        // not
        "140p": "140%", // 140% height for the after element
      },
      clipPath: {
        "custom-shape": "polygon(0 -1%, 100% 0, 100% 85%, 0 45%)", //yes
        "custom-shaped": "polygon(0 0%, 100% 0, 100% 85%, 0 60%)", // no
        "before-hero":
          "polygon(38% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 30%)", // no
        "after-hero":
          "polygon(38% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 30%)", // no
      },
      transitionProperty: {
        padding: "padding", // yes
        header:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
      transitionTimingFunction: {
        // yes
        custom: "cubic-bezier(.4,0,.2,1)",
      },
      transitionDuration: {
        200: "0.2s",
      },
      spacing: {
        //yes
        "gutter-x": "var(--bs-gutter-x)",
        "gutter-y": "var(--bs-gutter-y)",
        3.5: "0.8571429em",
        4.5: "1.1428571em",
        7: "1.7142857em",
        "1px": "1px",
      },
      backgroundColor: {
        // yes
        white: "rgba(255, 255, 255, 1)", // Set your custom background color and opacity here
        "custom-blue": "rgba(115, 177, 255, 0.1)",
        "custom-red": "hsla(5, 93%, 76%, 0.1)",
        "theme-light": "rgba(243, 240, 240, var(--tw-bg-opacity))",
        "theme-dark": "rgba(0, 0, 0, var(--tw-bg-opacity))",
        quote: "#f4fdff",
        prebg: "rgb(229 231 235/var(--tw-bg-opacity))",
      },
      fontFamily: {
        secondary: ["Merriweather", "sans-serif"],
        primary: ["Maven Pro", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        pre: ["monospace", "monospace"],
        sans: [
          'Inter',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      fontSize: {
        "custom-size": "2.28886641rem",
        "14px": "14px !important",
        "15px": "15px !important",
        customMarker: "1.125rem",
        h2: "1.831093128rem",
        h1: "2.2522445474399997rem",
        mdh2: "2.28886641rem",
        mdh1: "2.8153056842999997rem",
        h4: "1.5129rem",
        h6: "1rem",
        copyp: ["15px", { lineHeight: "1.625rem" }],
      },
      boxShadow: {
        default: "0 15px 60px rgba(0, 0, 0, .06)",
        navdrop: "0 4px 15px rgba(0,0,0,.05)",
        shdwhead: "0 20px 25px rgba(0,0,0,.03)",
        navwrap: "0 10px 10px rgba(0,0,0,.07)",
        custom:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1), 4px 0 6px rgba(0, 0, 0, 0.1), -4px 0 6px rgba(0, 0, 0, 0.1)",
        "custom-soft":
          "0 2px 4px rgba(0, 0, 0, 0.05), 0 -2px 4px rgba(0, 0, 0, 0.05), 2px 0 4px rgba(0, 0, 0, 0.05), -2px 0 4px rgba(0, 0, 0, 0.05)",
      },
      content: {
        wama: 'url("/images/logo/logo.png")',
        empty: "''",
      },
      lineHeight: {
        customMarker: "1.75rem", // 28px
        relaxed: "1.7142857", // This would be a custom value
        normal: "1.5",
      },
      width: {
        "130px": "130px",
        "col-10": "83.33333333333334%",
        "col-6": "50%",
        "calc-100-minus-80": "calc(100% - 80px)",
      },
      columns: {
        2: "2",
      },
      quotImae: {
        qbg: "url(./images/blog/qoute.svg)",
      },
      colors: {
        primary: {
          light: "#00C6FF", // Light Blue
          DEFAULT: "#0072FF", // Primary Blue
          dark: "#011F4B", // Dark Blue
        },
        secondari: {
          white: "#FFFFFF", // White
          lightGrey: "#F5F5F5", // Light Grey
          darkGrey: "#333333", // Dark Grey
          silver: "#C0C0C0", // Silver
          yellow: "#FFD700", // Soft Yellow
          turquoise: "#40E0D0", // Turquoise
        },
        pink: "#CD61A9",
        deepPink: "#5e3b76",
        current: "currentColor",
        transparent: "transparent",
        black: "#222222",
        // the blue color for buttons
        blue: "#0072FF",
        linkBlack: "rgb(8 8 8)",
        davy_grey: "#555555",
        yellow_tan: "#FDE179",
        seafoam_blue: "#73CFA8",
        crystal_blue: "#73B1FF",
        white: "#FFFFFF",
        quaternary: "#FDE077",
        geraldine: "#FB9289",
        dark: "rgb(34 34 34 / 1)",
        greyQ: "#000000",
        borderLeft: "#909090",
        tertiary: "#FB9289",
        secondary: "#73CFA8",
        quinary: "#73B1FF",
        aboutbg: "#FFF9E4",
        abphoto: "#F9FAFB",
        borderColor: "#F9FAFB",
        foColor: "#C5C5C5",
        hoverCo: "#ECECEC",
        light: "#e6e1e1",
        noticep: "rgb(85 85 85);",
        footerli: "hsla(0, 0%, 100%, .8);",
        copyco: "#ffffff",
        noticetip: "rgb(64 210 148 )",
        noticeinfo: "rgb(227 167 44 )",
        noticewarning: "rgb(219 44 35 )",
        tableborder: "rgb(219 219 219 )",
        tablenvbg: "rgb(243 240 240 )",
        bxIcoCo: "rgb(251 146 137)",
        bxIcoCol: "rgb(115 207 168)",
        bxIcoColo: "rgb(115 177 255)",
        bgo1Color: "rgb(244 253 255)",
        htmlColor: "rgb(0 0 0/var(1))",
        noticeNote: "rgb(27 131 226/var(--tw-text-opacity))",
        zinc: "rgb(113 113 122)",
        "custom-gray-marker": "#222",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-polygon": {
          "clip-path": "polygon(0 -1px,100% -1px,100% 100%,0 38%)",
        },
        ".clip-path-feature-polygon": {
          "clip-path": "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
        },
        ".clip-path-Innovative-polygon": {
          "clip-path": "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
        },
        ".clip-path-article-polygon": {
          "clip-path": "polygon(0 0, 100% 0, 100% 90%, 0 60%)",
        },
        ".clip-path-abtbefore-polygon": {
          "clip-path": "polygon(0 -1%,100% 0,100% 85%,0 45%)",
        },
        ".clip-path-project-polygon": {
          "clip-path": "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
        },
        ".clip-path-abtafter-polygon": {
          "clip-path": "polygon(0 -1%,100% 0,100% 85%,0 45%)",
        },
        ".clip-path-team-polygon": {
          "clip-path": "polygon(0 12%,100% 0,100% 88%,0 100%)",
        },
        ".clip-path-singleAuthor-polygon": {
          "clip-path": "polygon(0 0,100% 0,100% 80%,0 50%)",
        },
        ".clip-path-herobefore-polygon": {
          "clip-path": "polygon(38% 0,100% 0,100% 50%,100% 100%,0 100%,0 30%)",
        },
        ".clip-path-hero-polygon": {
          "clip-path": "polygon(32% 0,100% 0,100% 50%,100% 100%,0 100%,1% 28%)",
        },
        "after-hero": {
          clipPath:
            "polygon(38% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 30%)",
          content: '""',
          position: "absolute",
          top: "15px",
          right: "-20px",
          bottom: "-15px",
          left: "100px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]),
        addUtilities(
          {
            ".after-dotted-line": {
              "&::after": {
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width='1px' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23F96D61' stroke-width='2' stroke-dasharray='6, 14' stroke-dashoffset='0' stroke-linecap='square'/%3E%3C/svg%3E')",
                content: "''",
                position: "absolute",
                left: "0",
                top: "50%",
                height: "140%",
                width: "1px",
                transform: "translateY(-50%)",
              },
            },
          },
          ["responsive"]
        );
    },
    require("@tailwindcss/forms"),
    require("tailwindcss-pseudo-elements")({
      customPseudoClasses: [],
      customPseudoElements: ["after", "before"],
      contentUtilities: true,
      emptyContent: true,
      classNameReplacer: {
        after: "after",
        before: "before",
      },
    }),
  ],
};

