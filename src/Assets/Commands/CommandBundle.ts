import ICommand from '../Interfaces/ICommand.js';
import Mission from './Mission.js';
import Guard from './Guard.js';
import Mine from './Mine.js';

const CommandBundle: ICommand[] = [
  Mission,
  Guard,
  Mine,
];

export default CommandBundle;
