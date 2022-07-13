import ICommand from '../Interfaces/ICommand.js';
import Mission from './Mission.js';
import Guard from './Guard.js';

const CommandBundle: ICommand[] = [
  Mission,
  Guard,
];

export default CommandBundle;
