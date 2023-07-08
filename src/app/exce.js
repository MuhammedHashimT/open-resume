var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
var fs = require('fs');

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'afb8fc09-f0f2-491a-b716-b90bcb17dbc4';



var apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

var inputFile = Buffer.from(fs.readFileSync("../../sample.pdf").buffer); // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentPdfToDocx(inputFile, callback);