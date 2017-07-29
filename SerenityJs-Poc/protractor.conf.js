
const crew = require('serenity-js/lib/stage_crew');
require('ts-node/register');


exports.config = {
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    baseUrl: 'https://www.carnival.com',

    allScriptsTimeout: 60000,

    specs: ['features/navigation/*.feature'],
    cucumberOpts: {
        require: ['features/**/*.ts'], // loads step definitions
        format: 'pretty',               // enable console output
        compiler: 'ts:ts-node/register'   // interpret step definitions as TypeScript. http://serenity-js.org/overview/installation.html#typescript-execution-environment-and-repl-for-nodejs

    },

    serenity: {
        dialect: 'cucumber',
        stageCueTimeout: 30 * 1000,   // up to 30 seconds by default

        crew: [
            //crew.serenityBDDReporter(),
            // crew.photographer(),
            crew.consoleReporter(), //to see what tasks are being performed, but were not interested in producing the report
        ],
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                // 'incognito',
                // 'disable-extensions',
            ]
        }
    }
}