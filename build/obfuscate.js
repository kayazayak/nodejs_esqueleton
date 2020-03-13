// Require Filesystem module
var fs = require("fs");

// Require the Obfuscator Module
var JavaScriptObfuscator = require('javascript-obfuscator');

var options_low = {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        log: false,
        mangle: true,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: false,
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
};

var options_med = {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        log: false,
        mangle: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: 'base64',
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
};

var options_high = {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        log: false,
        mangle: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: 'rc4',
        stringArrayThreshold: 1,
        unicodeEscapeSequence: false
}

var options = options_low;

// Read the file of your original JavaScript Code as text
fs.readFile('src/main.js', "UTF-8", function(err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data, options);

    // Write the obfuscated code into a new file
    fs.writeFile('dist/main.js', obfuscationResult.getObfuscatedCode() , function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

