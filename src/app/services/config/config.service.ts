import { Injectable } from '@angular/core';
import {Constants} from '../../constants';

@Injectable()
export class Config {

  public serverBasePath: string;

  constructor() {

    this.serverBasePath = Constants.BASE_URL;
  }

}
