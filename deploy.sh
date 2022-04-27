# twilio serverless:deploy
DEFINITION=$(cat assets/lookup-flow.json)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
curl -X POST https://studio.twilio.com/v2/Flows \
--data-urlencode "CommitMessage=First draft" \
--data-urlencode "FriendlyName=LOOKUP" \
--data-urlencode "Status=draft" \
--data-urlencode "Definition=$DEFINITION" \
-u $TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN