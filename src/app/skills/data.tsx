import React from 'react';
import {
  SiApache,
  SiAwsfargate,
  SiAzureartifacts,
  SiBootstrap,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiRaspberrypi,
} from 'react-icons/si';

interface OtherSkill {
  name: string;
  icon: JSX.Element;
  years: number;
  memo?: string;
  recently?: boolean;
}

export const otherSkills: OtherSkill[] = [
  { name: 'MySQL (MariaDB)', icon: <SiMysql />, years: 6, memo: 'ORM未使用' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, years: 2.5, recently: true },
  { name: 'AWS', icon: <SiAwsfargate />, years: 2, recently: true },
  { name: 'Azure', icon: <SiAzureartifacts />, years: 1 },
  { name: 'Firebase', icon: <SiFirebase />, years: 3, recently: true },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi />, years: 9, memo: 'Pi2は4年半、4は3年半、ZeroWHは1年', recently: true },
  { name: 'Apache', icon: <SiApache />, years: 3 },
  { name: 'Docker', icon: <SiDocker />, years: 1, recently: true },
  { name: 'Git', icon: <SiGit />, years: 4, recently: true },
  { name: 'GitHub Actions', icon: <SiGithubactions />, years: 1.5, recently: true },
  { name: 'MUI (React)', icon: <SiMui />, years: 3, recently: true },
  { name: 'Bootstrap', icon: <SiBootstrap />, years: 3, memo: '3系と4系のみ' },
];
