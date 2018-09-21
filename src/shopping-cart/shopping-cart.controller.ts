import { Controller, Post } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor() {

  }

  @Post()
  async items() {
    return 'This is a fake data';
  }
}