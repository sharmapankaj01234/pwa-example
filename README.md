1\. create Next-app using npx

```
npx create-next-app pwa-example

✔ Would you like to use TypeScript with this project? … No / Yes
✔ Would you like to use ESLint with this project? … No / Yes
✔ Would you like to use Tailwind CSS with this project? … No / Yes
✔ Would you like to use `src/` directory with this project? … No / Yes
✔ Use App Router (recommended)? … No / Yes
✔ Would you like to customize the default import alias? … No / Yes

```

2.  Move to folder

```
cd pwa-example
```

3.  Run the application and navigate to localhost:3000

```
npm run dev
```

4\. Install [next-pwa](https://www.npmjs.com/package/next-pwa) dependency

```
npm i next-pwa
```

6.  open the project in visual studio code
7.  Use any online website to create manifest file or create manifest.json manually in public folder

```
{
    "theme_color": "#f69435",
    "background_color": "#f69435",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "name": "pwa-example",
    "short_name": "simple-pwa",
    "description": "Simple pwa application",
    "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

9.  create _document.js file in public folder

```
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

10. Add following line to your next.config.js file

```
module.exports = {
    reactStrictMode: true,
};
const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
  })
```

11. Add following line to src/app/layout.js file

```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#90cdf4" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

12. Run following command to create build pwa artificates in public folder.

```
npm run build
```

13. Run following command to start your application

```
npm run start
```

14. Visit to http://localhost:3000/

you can see the install button in your search bar menu. Click on that install the app.

![Screenshot from 2023-06-18 17-35-43](https://github.com/sharmapankaj01234/pwa-example/assets/10794547/6d2940ee-3dbd-42b4-ac09-c921bc5933ae)
