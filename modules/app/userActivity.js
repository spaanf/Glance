/*
 * Copyright (C) 2018 Ryan Mason - All Rights Reserved
 *
 * Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
 *
 * https://github.com/Rytiggy/Glance/blob/master/LICENSE
 * ------------------------------------------------
 *
 * You are free to modify the code but please leave the copyright in the header.
 *
 * ------------------------------------------------
 */



import { today } from 'user-activity';
import { HeartRateSensor } from "heart-rate";

let hrm = new HeartRateSensor();
hrm.start();

export default class userActivity { 
  get() {
    const userActivity = {
      steps: today.adjusted.steps,
      heartRate: hrm.heartRate,
      elevationGain: today.adjusted.elevationGain,
    }
    return userActivity;
  }
};
