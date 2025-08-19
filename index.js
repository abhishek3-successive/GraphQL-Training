import { createApolloServer } from "./server/express.js";
import { connectDB } from "./src/config/db.js";
import { SERVER_CONFIG } from "./src/config/serverConfig.js";

const PORT = SERVER_CONFIG.PORT;
async function start() {
  await connectDB();
  const httpServer = await createApolloServer();
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    console.log(`🔄 Subscriptions ready at ws://localhost:${PORT}/graphql`);
  });
}

start();