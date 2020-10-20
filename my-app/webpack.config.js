const { config } = require("process");

config.patch.entry({
    app: './src/index.js',
})

// config.devServer.host('')