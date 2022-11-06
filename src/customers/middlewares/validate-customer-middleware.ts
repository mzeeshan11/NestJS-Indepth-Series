import { NestMiddleware, Injectable } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    // use function take three parameter req, res, next
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Hello Worl, I am inside validCustomerMiddleware');
        const { authorization } = req.headers;
        if (!authorization) return res.status(403).send({
            error: 'No Authentication toke provided!'
        })
        if (authorization === '123') {
            next()
        } else {
            return res.status(403).send({
                error: 'Invalid authentication token provided'
            })
        }
    }
}