/**
 * @name server
 *
 * @description The entry point for the app
 */

import app from "./app";

// // start listening to server on specified port
  ((port = 3000 || 3000) => {
    app.server.listen(port, () => console.log(`> Listening on port ${port}`));
  })();
