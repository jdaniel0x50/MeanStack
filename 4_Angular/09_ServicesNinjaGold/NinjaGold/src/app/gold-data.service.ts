import { Injectable } from '@angular/core';
import { Building } from './building';
import { Message } from './message';

@Injectable()
export class GoldDataService {
  buildings: Array<any> = [];
  messages: Array<Message> = [];
  messagesGainClass: Array<Boolean> = [];
  goldTotal: number = 0;

  constructor() {
    this.buildings.push(new Building("Farm", 2, 5));
    this.buildings.push(new Building("Cave", 5, 10));
    this.buildings.push(new Building("Casino", -100, 100));
    this.buildings.push(new Building("House", 7, 15));
  }

  findBuilding(name: string) {
    switch (name) {
      case "Farm":
        return 0;
      case "Cave":
        return 1;
      case "Casino":
        return 2;
      case "House":
        return 3;
      default:
        return -1;
    }
  }
  generateMessage(_bldg: string, _gold: number) {
    let isEarnLost: string;
    if (_gold < 0) {
      isEarnLost = " lost ";
      this.messagesGainClass.push(false);
    } else {
      isEarnLost = " earned ";
      this.messagesGainClass.push(true);
    }
    let msg: string = "You've" + isEarnLost + _gold + " at the " + _bldg;
    let msgObj: Message = new Message(msg);
    this.messages.push(msgObj);
  }
  generateGold(idx: number) {
    let randGold: number = 0;
    let selBldg: Building = this.buildings[idx];
    let goldRange = selBldg.maxGold - selBldg.minGold + 1;
    randGold = Math.floor(Math.random() * goldRange) + selBldg.minGold;
    this.goldTotal += randGold;
    this.generateMessage(selBldg.name, randGold);
    return randGold;
  }

}
