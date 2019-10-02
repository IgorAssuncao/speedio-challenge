import app from './app';

const host = '0.0.0.0';
const port = 3000;
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local';

app.start = (HOST, PORT) => {
  return app.listen(PORT, HOST, () =>
    console.log(`${env} Server - API Running on ${HOST}:${PORT}`)
  );
};

app.start(host, port);
