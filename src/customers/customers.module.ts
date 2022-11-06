import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account-middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer-middleware';
import { CustomersService } from './services/customers/customers.service';
import { NextFunction, Request, Response } from 'express';
@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
// export class CustomersModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // we can apply middle on multiple route or all route of the contoller
//     // for all controller route, just pass controller as a parameter inside of forRoutes Func
//     consumer.apply(ValidateCustomerMiddleware).forRoutes({
//       path: 'customers/search/:id',
//       method: RequestMethod.GET
//     })
//   }
// }

// Invoke middleware on all contorller routes
// export class CustomersModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersService)
//   }
// }

// Invoke middleware excluding specific route of the contorller contorller routes
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware,
      ValidateCustomerAccountMiddleware, (req: Request, res: Response, next: NextFunction) => {
        console.log('Hello Worl, I am inside Last Middleware');
        next()
      })
      .exclude(
        {
          path: 'api/customers/create',
          method: RequestMethod.POST
        },
        {
          path: 'api/customers',
          method: RequestMethod.GET
        },
      ).forRoutes(CustomersController)
  }
}
