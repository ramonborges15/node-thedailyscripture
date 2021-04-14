import { createConnection } from "typeorm";

createConnection();

// Create a db on docker
// docker run --name thedailyscripturedb -e POSTGRES_PASSWORD=root -e POSTGRES_DB=thedailyscripture -p 5432:5432 -d postgres