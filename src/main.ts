import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  } catch (e) {
    console.log(
      "This line should be reached, but isn't because Nest catches all exceptions and calls `process.abort`"
    );
    console.error(e);

    // Realistic example: Sentry.captureException(e)
    // See https://docs.sentry.io/platforms/javascript/

    process.exit(1);
  }
}
bootstrap();
