module.exports = {
  presets: ["@babel/preset-env"],
  ignore: [
    "**/node_modules/@jitsi/rnnoise-wasm/**",
    "**/node_modules/@vladmandic/human/**",
    "**/node_modules/@jitsi/excalidraw/**"
  ]
};,

    // This happens because react native has conflict with @babel/plugin-transform-private-methods plugin
    // https://github.com/ethers-io/ethers.js/discussions/4309#discussioncomment-6694524
    plugins: [ 'optional-require',
        [ '@babel/plugin-transform-private-methods', {
            'loose': true
        } ]
    ]
};
