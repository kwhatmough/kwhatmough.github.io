function Importer(moduleSpecifier) {
  this.moduleSpecifier = moduleSpecifier;
}

Importer.prototype.then = function(onFulfilled, onRejected) {
  try {
    import(this.moduleSpecifier).then(onFulfilled, onRejected);
  } catch (err) {
    onRejected("Dynamic import failed: " + err.message);
  }
};
