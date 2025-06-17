# SecretMessage

works by encoding the entered string into base64 format and then giving you a link which can then be used to view the encrypted message.

## workflow

takes the input --> turns it into base64 using btoa function --> hide the section which is not required --> takes the input and then feeds the url into it --> encrypted message is then decrypted using atob function --> displays the secret message.


