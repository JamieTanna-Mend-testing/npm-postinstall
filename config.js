// where the token has `read_packages`
// env RENOVATE_X_GITHUB_HOST_RULES=true LOG_LEVEL=debug GITHUB_COM_TOKEN=ghp_... npx renovate@latest --token ghp_... JamieTanna-Mend-testing/npm-postinstall


/**
 * @typedef {import('renovate/dist/config/types').AllConfig} AllConfig
 */

/** @type {AllConfig} */
let config = {
	onboarding: false,
	requireConfig: 'ignored',

	branchConcurrentLimit: 1000,
	prConcurrentLimit: 1000,
	// make sure that **??**
	prHourlyLimit: 1000,

	hostRules: [
		{
			"matchHost": "npm.pkg.github.com",
			"hostType": "npm",
			"token": process.env.GITHUB_COM_TOKEN,
		}
	],
}

module.exports = config;
