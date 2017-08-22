# vue-webpack-material-template
> Simple todo application that targets browsers and Apache Cordova.

# Screenshots
![Screenshot 01](/screenshots/01.png)
![Screenshot 02](/screenshots/02.png)

# Usage
``` bash
$ git clone git@github.com:cesarzagonel/vue-webpack-material-template
```

With yarn:
``` bash
$ npm install
$ npm dev
```

With npm:
``` bash
$ npm install
$ npm dev
```

# Building

With yarn:
``` bash
$ yarn build
```

With npm:
``` bash
$ npm build
```

# Offline
The service-worker.js file is generated using [sw-precache](https://github.com/GoogleChrome/sw-precache).

For running the application offline all you need to do is **build** the application, then serve it using **start** script.

With yarn:
``` bash
$ yarn start
```

With npm:
``` bash
$ npm start
```
Once loaded, you can put your browser or emulator on **offline** mode and the application will still working.

# License
This project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).