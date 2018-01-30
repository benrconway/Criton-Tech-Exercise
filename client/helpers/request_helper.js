//Main helper used in previous iterations of code like this. I don't think it
// will survive as geocoding is slightly easier with a script tag and a
// geocoding object at a higher level helping maintain and manage state changes.
var requestHelper = {}

requestHelper.getRequest = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.addEventListener('load', function () {
    var jsonString = xhr.responseText
    var data = JSON.parse(jsonString)
    callback(data)
  })
  xhr.send()
}

module.exports = requestHelper;
