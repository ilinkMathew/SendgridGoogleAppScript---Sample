var SENDGRID_KEY ='Your API KEY';

  var headers = {
    "Authorization" : "Bearer "+SENDGRID_KEY,
    "Content-Type": "application/json"
  }

  var body =
  {
  "personalizations": [
    {
      "to": [
        {
          "email": "email id of the sender"
        }
      ],
      "subject": "Hello, World!"
    }
  ],
  "from": {
    "email": "From email id"
  },
  "content": [
    {
      "type": "text",
      "value": "Hello, World!"
    }
  ]
}

  var options = {

    'method':'post',
    'headers':headers,
    'payload':JSON.stringify(body)


  }


 var response = UrlFetchApp.fetch("https://api.sendgrid.com/v3/mail/send",options);


 Logger.log(response); 
