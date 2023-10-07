import { JokesService } from './jokes.service';
export declare class JokesController {
    private readonly jokesService;
    constructor(jokesService: JokesService);
    getRandomJoke(): Promise<any>;
}
