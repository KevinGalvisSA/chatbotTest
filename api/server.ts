import { createApp } from "./config/express";
import "reflect-metadata"
import { AppDataSource } from "./config/DataSource";

const app = createApp();
const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    //success in conection


    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error(error);
  });


