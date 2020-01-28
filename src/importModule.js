function importModule(specifier, onFulfilled, onRejected) {
  var importer;

  specifier(function(path) {
    importer = new Function("return import('" + path + "');");
  });

  if (importer) {
    try {
      importer().then(onFulfilled, onRejected);
    } catch (err) {
      onRejected("Dynamic import failed: " + err.message);
    }
  } else {
    onRejected("Importer undefined. Did you specify a module?");
  }
}
