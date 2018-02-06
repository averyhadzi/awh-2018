var ProvidePlugin = require('webpack').ProvidePlugin;
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './js/app.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif)$/,
            exclude: /(node_modules)/,
            // loader: 'url-loader?limit=10000'
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // loader: "url-loader?limit=10000&minetype=application/font-woff"
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // loader: "file-loader"
            loader: 'file?name=[name].[ext]'
        }, { 
            test: /\.handlebars$/, loader: "handlebars-loader" 
        }]
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "windows.jQuery": 'jquery'
        })
    ],
    resolve: {
        modules:[
          path.resolve(__dirname), path.resolve(__dirname, "node_modules")
        ],
        alias: {
          "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
          "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
          "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
          "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
          "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
          "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
          "gsap.scrollto": path.resolve('node_modules', 'gsap/src/uncompressed/plugins/ScrollToPlugin.js'),
        },
  },
};
