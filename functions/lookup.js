exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();


  const phoneNumber = event.to || '+15105550100';
  
    // Discover the phone number's carrier and type using the Lookup API with
    // the `type: 'carrier'` argument
    const result = await client.lookups
      .phoneNumbers(phoneNumber)
      .fetch({ type: 'carrier' });
  
    console.log('Carrier name: ', result.carrier.name);
    // 'Carrier name: AT&T'
    console.log('Carrier type: ', result.carrier.type);
    // 'Carrier type: mobile'
    return callback(null, {"Carrier" : result.carrier.type } );
};
