# os-proxy-socks

WIP: Manage system-wide SOCKS proxy settings.

## Platform

- osx

## Usage

Get current setting:

```js
import { get } from 'os-proxy-socks'

get().then(options => {
  console.log(options.enable) // true
  console.log(options.server) // 127.0.0.1
  console.log(options.port) // 1080
})
```

Set SOCKS setting:

```js
import { set } from 'os-proxy-socks'

const options = {
  server: '127.0.0.1',
  port: 1080,
  auth: {
    name: 'name',
    password: 'password',
  }
}

set(options).then(() => {
  // ...
}).catch(err => console.error(err))
```

## API

### get()


## Test

```
npm run test
```
