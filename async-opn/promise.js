const promise = new Promise(function (resolve, reject) {
    const string1 = "sunil";
    const string2 = "sunil";
    if (string1 === string2) {
      resolve();
    } else {
      reject();
    }
  });
 
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
    });