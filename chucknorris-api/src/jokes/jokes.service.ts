import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JokesService {
  async getRandomJoke() {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data.value;
  }
}
