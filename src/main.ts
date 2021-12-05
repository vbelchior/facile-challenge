import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const config = new DocumentBuilder()
    .setTitle("Facile Challenge")
    .setDescription("Encriptografar uma string")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
