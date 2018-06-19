const riot = Npm.require('riot-compiler')

function compileFile(file) {
  let source = null
  let output = null

  try {
    source = file.getContentsAsString()
    output = riot.compile(source)
  }
  catch (e) {
    file.error({
      message: 'Riot compiler error: ' + e.message,
      column: e.column,
      line: e.line
    })
  }
  file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' })
}

// create a compiler class
function RiotCompiler() {}
RiotCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(compileFile)
}

Plugin.registerCompiler({ extensions: [ 'tag' ] }, () => new RiotCompiler())
