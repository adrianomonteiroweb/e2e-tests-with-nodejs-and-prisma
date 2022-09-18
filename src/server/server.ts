import { app } from './app';

const server_port = process.env.SERVER_PORT;

app.listen(server_port, () => console.log(`http://localhost:${server_port}`));
