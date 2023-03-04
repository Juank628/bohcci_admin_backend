import { app } from './app';
import { connectDB } from './db';

const main = async() => {
  await connectDB()
  app.listen(3000)
}

main()

