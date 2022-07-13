import {
  BaseCommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import ICommand from '../Interfaces/ICommand.js';

const command: ICommand = {
  Builder: new SlashCommandBuilder()
    .setName('호위')
    .setDescription('호위 병력/건물 을 배치합니다.')
    .addSubcommand(command =>
      command
        .setName('병력')
        .setDescription('호위 병력을 배치합니다.')
        .addStringOption(option =>
          option
            .setName('이름')
            .setDescription('배치할 병력의 이름을 작성해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('공격력')
            .setDescription('배치할 병력의 공격력을 설정해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('방어력')
            .setDescription('배치할 병력의 방어력을 설정해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('수')
            .setDescription('배치할 병력의 수를 설정해주세요.')
            .setRequired(true)
        )
    )
    .addSubcommand(command =>
      command
        .setName('건물')
        .setDescription('호위 건물을 배치합니다.')
        .addStringOption(option =>
          option
            .setName('이름')
            .setDescription('배치할 건물의 이름을 작성해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('공격력')
            .setDescription('배치할 병력의 공격력을 설정해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('방어력')
            .setDescription('배치할 병력의 방어력을 설정해주세요.')
            .setRequired(true)
        )
        .addIntegerOption(option =>
          option
            .setName('수')
            .setDescription('배치할 병력의 수를 설정해주세요.')
            .setRequired(true)
        )
    ) as SlashCommandBuilder,
  SlashExecute: async (interaction: BaseCommandInteraction) => {
    const options = interaction.options as CommandInteractionOptionResolver;

    const name = options.getString('이름');
    const attack = options.getInteger('공격력');
    const defence = options.getInteger('방어력');
    const number = options.getInteger('수');
    const num = !number ? 1 : number;

    const reply =
`
호위 ${options.getSubcommand()}
'${name}' ${num !== 1 ? `X ${num}` : ''}
공격력: ${attack! * num} ${num !== 1 ? `(${attack} X ${num})` : ''}
방어력: ${defence! * num} ${num !== 1 ? `(${defence} X ${num})` : ''}
`;

    interaction.reply(reply);
  },
};

export default command;