module.exports = {
    publicPath: './',
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                data: `
                  @import "src/styles/_variables";
                `,
            },
        },
    },
};