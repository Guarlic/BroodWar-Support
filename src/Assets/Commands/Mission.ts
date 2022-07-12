import {
  BaseCommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { PermissionFlagsBits  } from 'discord-api-types/v10';
import ICommand from '../Interfaces/ICommand.js';

const command: ICommand = {
  Builder: new SlashCommandBuilder()
    .setName('미션')
    .setDescription('미션 시이작!')
    .setDefaultMemberPermissions(
      PermissionFlagsBits.Administrator
    )
    .addStringOption(option =>
      option
        .setName('종족')
        .setDescription('미션을 부여할 종족을 선택해주세요.')
        .addChoices(
          { name: '칸타우르', value: '칸타우르', },
          { name: '타투스', value: '타투스', },
          { name: '사피엔스', value: '사피엔스', },
        )
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('브리핑')
        .setDescription('미션 브리핑을 작성해주세요.')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('미션')
        .setDescription('미션 내용을 작성해주세요.')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('분류')
        .setDescription('미션 분류를 선택해주세요.')
        .addChoices(
          { name: '스토리 진행 (메인)', value: '스토리 진행 (메인)', },
          { name: '자원 이벤트 (자원)', value: '자원 이벤트 (자원)', },
          { name: '전쟁 이벤트 (전쟁)', value: '전쟁 이벤트 (전쟁)', },
          { name: '보너스 미션 (보너스)', value: '보너스 미션 (보너스)' },
        )
        .setRequired(true)
    ) as SlashCommandBuilder,
  SlashExecute: async (interaction: BaseCommandInteraction) => {
    const options = (
      interaction.options as CommandInteractionOptionResolver
    );

    const brood = options.getString('종족');
    const breefing = options.getString('브리핑');
    const mission = options.getString('미션');
    const event = options.getString('분류');

    const reply =
`
${brood} 종족의 미션입니다!

[브리핑]
${breefing}

[미션]
${mission}

[분류]
${event}
`;

    interaction.reply(reply);
  },
};

export default command;