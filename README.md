# JWT-NodeJS


Fully JWT Authetication for Restful NodeJS API ready to be used.
First Read the server code to take an idea then try it with **PPOSTMAN** :

# Firstly 

##Post Request
http://localhost:3000/api/register/
*Body:  x-www-form-urlencodd*

| key           | value             | 
| ------------- |:-----------------:|
| email         | example@gmail.com |
| password      | test              |



if new user you shall Receive 

{
    "success": true,
    "message": "Successfully created new user."
}

Otherwise you shall Receive

{
    "success": false,
    "message": "That email address already exists."
}


# Secondly 

## Post Request 
http://localhost:3000/api/authenticate/

{
    "success": true,
    "token": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk5Yzg4Y2VhNDBhMzk0MmRkYmRhYThmIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0Iiwicm9sZSI6ImluaXQiLCJfX3YiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJyb2xlIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsicm9sZSI6IkNsaWVudCIsIl9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkZDB1UU8xTzhhRnBjdWxuRG1GWXlCZWVGcENlOG1RZDNVcndBQXBjc3dLTnVYYVZsOVRRUGkiLCJlbWFpbCI6ImFibXJpemtAZ21haWwuY29tIiwiX2lkIjoiNTk5Yzg4Y2VhNDBhMzk0MmRkYmRhYThmIn0sIiRpbml0Ijp0cnVlLCJpYXQiOjE1MDM0MzA5ODYsImV4cCI6MTUwMzQ0MTA2Nn0.8SaTtqVNx0NYuG0knnDNN-HRtc9qUsWLKC96eMfqS1U"
}



#Lastly

####GET Request
http://localhost:3000/api/dashboard/

#####Headers
| Key           | value     | 
| ------------- |:---------:|
| Authorization | copy toke |


Shall Receive
It worked! User id is: 599c85c5b7bae34247f85585. --->This is the user ID


If the token is wrong you shall Receive
Unauthorized

