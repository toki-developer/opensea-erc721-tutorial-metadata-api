import { GetCreatureResponse } from './types/creature';
import { Injectable } from '@nestjs/common';
import { creatureDB } from './database';
import { HOST } from './constant';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NFT metadata!!';
  }

  getCreature(id: string): GetCreatureResponse {
    const creature = creatureDB[id];
    if (!creature) {
      return {
        name: 'no data',
        image: `${HOST}/images/noimage.jpg`,
      };
    }
    const image = [1, 2, 3, 4].includes(Number(id))
      ? `${HOST}/images/creature/${id}`
      : `${HOST}/images/noimage.jpg`;
    return { name: creature.name, image };
  }
}
