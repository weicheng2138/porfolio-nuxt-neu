const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                mono: ["SF Mono", "Fira Code", "sans-serif"],
                sans: ["Calibri", "San Francisco", "SF Pro Text"],
            },
            fontSize: {
                bcXxs: "12px",
                bcXs: "13px",
                bcSm: "14px",
                bcMd: "16px",
                bcLg: "18px",
                bcXl: "20px",
                bcXxl: "22px",
                bdHeading: "32px",
            },
            spacing: {
                bcTabMR: "5px",
                bcTabP: "10px",
                bcTouchButton: "50px",
                bcNavHeight: "100px",
                bcNavScrollHeight: "70px",
            },
            colors: {
                emerald: colors.emerald,
                gray: colors.trueGray,
                cwc: {
                    100: "#000000",
                },
                bgColor: "#E5E7EB",
                bcColor: "#ef8354",
                bcColorTitle: "#344E41",
                bcColorText: "#3A5A40",
                bcDarkNavy: "#020c1b",
                bcLightNavy: "#DAD7CD",
                bcLightestNavy: "#DAD7CD",
                bcNavyShadow: "rgba(2, 12, 27, 0.7)",
                bcDarkSlate: "#495670",
                bcSlate: "#588157",
                bcLightSlate: "#588157",
                bcLightestSlate: "#b5b5b5",
                bcWhite: "#ced4da;",
                bcColorTint: "rgba(100, 255, 218, 0.1)",
            },
            borderRadius: {
                bcBorderRadius: "4px",
            },
            height: {
                bcNavHeight: "100px",
                bcNavScrollHeight: "70px",
                bcTabHeight: "42px",
                bcHamburgerLineHeight: "2px",
            },
            width: {
                bcTabWidth: "120px",
                bcHamburgerWidth: "30px",
            },
            transitionTimingFunction: {
                bcEasing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            },
            transitionDuration: {
                250: "250ms",
            },
            outline: {
                bcStyle: ["2px dashed #ef8354", "3px"],
            },
            inset: {
                sideLg: "40px",
                sideMd: "20px",
            },
            boxShadow: {
                appbar: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
                lightOuter: "-6px -6px 7px #ffffff73, 6px 6px 7px #D1D5DB",
                lightInner:
                    "inset -6px -6px 7px #ffffff73, inset 6px 6px 7px #D1D5DB",
                darkOuter: "6px 6px 12px #2c4237, -6px -6px 12px #3c5a4b",
                darkInner:
                    "inset -6px -6px 7px #2c4237, inset 6px 6px 7px #3c5a4b",
                light2XL: "0 25px 30px -12px #000000",
            },
            maxWidth: {
                "900": "900px",
            },
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1080px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
