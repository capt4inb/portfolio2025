module.exports = {
  // ... existing config ...
  extend: {
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "slide-up": {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
    },
    animation: {
      "fade-in": "fade-in 1s ease-out",
      "fade-in-delay": "fade-in 1s ease-out 0.5s forwards",
      "slide-up": "slide-up 0.8s ease-out",
      "slide-up-delay": "slide-up 0.8s ease-out 0.3s forwards",
      float: "float 3s ease-in-out infinite",
    },
  },
};
