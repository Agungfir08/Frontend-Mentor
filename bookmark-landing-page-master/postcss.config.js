module.exports = {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
        // Tidak disertakan di development:
        // ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
};
