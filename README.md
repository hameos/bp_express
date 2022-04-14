## Express typescript boilerplate

### Instructions

1. Clone and install dependencies
   ```
      git clone https://github.com/hameos/bp_express.git
      cd bp_express
      npm i
   ```

2. To run the server
    ```
      npm run start
    ```
    Now start to make changes without restart the server, it supports typescript hot reloading

3. When finished doing changes, generate `server.js` bundle for development or production

    For development use
    ```
        npm run dev
    ```
    For production use
    ```
        npm run pro
    ```
    The bundle is generated in `dist` folder


### Endpoints available

GET http://localhost:3000/items

POST http://localhost:3000/items \
Example: body={ title: 'mytitle', content: 'mycontent' }

GET http://localhost:3000/items/:id

PUT http://localhost:3000/items/:id \
Example: body={ title: 'mytitle', content: 'mycontent' }

PATCH http://localhost:3000/items/:id \
Example: body={ content: 'mycontent' }

DELETE http://localhost:3000/items/:id

