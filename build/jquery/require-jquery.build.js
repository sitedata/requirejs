{
    baseUrl: ".",
    out: "dist/require-jquery.js",
    optimize: "none",

    include: ["jquery-1.4.2"],
    includeRequire: true,
    skipModuleInsertion: true,
    pragmas: {
        jquery: true,
        requireExcludePlugin: true
    }
}
