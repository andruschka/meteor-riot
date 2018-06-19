Package.describe({
  name: 'andruschka:riot-tag',
  version: '3.5.1',
  summary: 'Compile Riot .tag files to Javascript.',
  git: 'https://github.com/andruschka/meteor-riot.git',
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'riot-compiler',
  sources: [ 'plugin.js' ],
  npmDependencies: {
    'riot-compiler': '3.5.1'
  }
})

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.1')
  api.use('isobuild:compiler-plugin@1.0.0')
  api.addFiles('autorun-mixin.js', 'client')
})
