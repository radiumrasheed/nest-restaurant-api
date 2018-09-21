import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user[`${process.env.APP_DOMAIN}/roles`] || '';

    return user.indexOf('admin') > -1;
  }
}