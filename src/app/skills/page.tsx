'use client';

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { MdDone } from 'react-icons/md';
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
import { AppBar, Typo } from '~/views';

interface OtherSkill {
  name: string;
  icon: JSX.Element;
  years: number;
  memo?: string;
  recently?: boolean;
}

const rows: OtherSkill[] = [
  { name: 'MySQL (MariaDB)', icon: <SiMysql />, years: 6, memo: 'ORM未使用' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, years: 2, recently: true },
  { name: 'AWS', icon: <SiAwsfargate />, years: 1.5, recently: true },
  { name: 'Azure', icon: <SiAzureartifacts />, years: 1 },
  { name: 'Firebase', icon: <SiFirebase />, years: 2.5, recently: true },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi />, years: 8.5, memo: 'Pi2は4年半、4は3年半、ZeroWHは1年', recently: true },
  { name: 'Apache', icon: <SiApache />, years: 3 },
  { name: 'Docker', icon: <SiDocker />, years: 0.5, recently: true },
  { name: 'Git', icon: <SiGit />, years: 3.5, recently: true },
  { name: 'GitHub Actions', icon: <SiGithubactions />, years: 1, recently: true },
  { name: 'MUI (React)', icon: <SiMui />, years: 2.5, recently: true },
  { name: 'Bootstrap', icon: <SiBootstrap />, years: 3, memo: '3系と4系のみ' },
];

export default function Page() {
  return (<AppBar title="プログラミング経験">
    <Typo variant="h5">タイムライン</Typo>
    <iframe width="100%" height="400" src="https://time.graphics/embed?v=1&id=736152" frameBorder="0" allowFullScreen></iframe>
    <Typo variant="h5" mt={2}>フレームワークや周辺ツール</Typo>
    <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
      <Table sx={{ minWidth: 800 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell align="right">経験年数</TableCell>
            <TableCell>備考</TableCell>
            <TableCell>最近使用</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{
                display: 'flex',
                alignItems: 'center',
                svg: {
                  height: '2rem',
                  width: '2rem',
                  marginRight: '0.5rem',
                },
              }}>{row.icon} {row.name}</TableCell>
              <TableCell align="right">{row.years} 年</TableCell>
              <TableCell>{row.memo ?? ''}</TableCell>
              <TableCell>{row.recently ? <MdDone /> : ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </AppBar>);
}
