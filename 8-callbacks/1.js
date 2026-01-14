function executeAfterTenSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 10000);
}

executeAfterTenSeconds(function () {
  console.log("Callback executed after 10 seconds");
});
