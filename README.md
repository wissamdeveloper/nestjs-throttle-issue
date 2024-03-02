## To reproduce the issue:

1. Clone the repository
2. Run `npm i`
3. Run `npm run start:dev`
4. Make an HTTP request to http://localhost:8000/api/users

## Expected behavior

Since the `@SkipThrottle()` decorator is being used for the users resource at the controller level, the request should not be throttled. However it is still being throttled by the same settings that are configured in the top level app module.

### Example:

This example below runs a curl request to the api/users endpoint and shows that on the fourth try, it receives the throttle error

```
$ for i in {1..4}; do curl localhost:8000/api/users;echo ""; done
This action returns all users
This action returns all users
This action returns all users
{"statusCode":429,"message":"ThrottlerException: Too Many Requests"}
```

### Other Notes

- OS: Mac Sonoma 14.1
- Using Fastify
