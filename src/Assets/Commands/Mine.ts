import {
  BaseCommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionFlagsBits } from 'discord-api-types/v10';
import ICommand from '../Interfaces/ICommand.js';

const command: ICommand = {
  Builder: new SlashCommandBuilder()
    .setName('채취')
    .setDescription('자원을 채취합니다.')
    .setDefaultMemberPermissions(
      PermissionFlagsBits.Administrator
    )
    .addSubcommand(command =>
      command
        .setName('케이다린')
        .setDescription('케이다린을 채취합니다.')
        .addIntegerOption(option =>
          option
            .setName('개수')
            .setDescription('채취할 케이다린의 개수를 설정해주세요.')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('사유')
            .setDescription('자원을 받는 보상을 설정해주세요.')
            .addChoices(
              { name: '자원 이벤트 (자원) 미션 성공', value: '자원 이벤트 (자원) 미션 성공' },
              { name: '기타 미션 성공', value: '기타 미션 성공' },
            )
            .setRequired(true)
        )
    )
    .addSubcommand(command =>
      command
        .setName('타르')
        .setDescription('타르를 채취합니다.')
        .addIntegerOption(option =>
          option
            .setName('개수')
            .setDescription('채취할 타르의 개수를 설정해주세요.')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('사유')
            .setDescription('자원을 받는 보상을 설정해주세요.')
            .addChoices(
              { name: '자원 이벤트 (자원) 미션 성공', value: '자원 이벤트 (자원) 미션 성공' },
              { name: '기타 미션 성공', value: '기타 미션 성공' },
            )
            .setRequired(true)
        )
    ) as SlashCommandBuilder,
  SlashExecute: async (interaction: BaseCommandInteraction) => {
    const options = interaction.options as CommandInteractionOptionResolver;

    const number = options.getInteger('개수');
    const reason = options.getString('사유');

    const reply =
`
${options.getSubcommand()} 채취
< 개수: ${number} >

사유: ${reason}
`;

    interaction.reply(reply);
  },
};

export default command;