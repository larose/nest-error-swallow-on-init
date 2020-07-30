# Minimal repository for https://github.com/nestjs/nest/issues/5162

## Repro steps

1. `npm install`
2. `npm start`

## Actual behavior

`npm start` outputs the error ("This error can't be caught") but doesn't output
"This line should be reached, but isn't because Nest catches all exceptions and
calls `process.abort`".

```
$ npm start

> project-name@0.0.1 start /home/mathieu/tmp/nest-error-swallow-on-init
> nest start

[Nest] 1913322   - 07/30/2020, 6:45:05 AM   [NestFactory] Starting Nest application...
[Nest] 1913322   - 07/30/2020, 6:45:05 AM   [ExceptionHandler] This error can't be caught +9ms
Error: This error can't be caught
    at new AppController (/home/mathieu/tmp/nest-error-swallow-on-init/dist/app.controller.js:18:15)
    at Injector.instantiateClass (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/injector.js:290:19)
    at callback (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/injector.js:77:41)
    at async Injector.resolveConstructorParams (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/injector.js:118:24)
    at async Injector.loadInstance (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/injector.js:81:9)
    at async Injector.loadController (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/injector.js:29:9)
    at async Promise.all (index 0)
    at async InstanceLoader.createInstancesOfControllers (/home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/instance-loader.js:52:9)
    at async /home/mathieu/tmp/nest-error-swallow-on-init/node_modules/@nestjs/core/injector/instance-loader.js:30:13
    at async Promise.all (index 1)
```

## Expected behavior

`npm start` outputs the error ("This error can't be caught") and "This line
should be reached, but isn't because Nest catches all exceptions and calls
`process.abort`".
