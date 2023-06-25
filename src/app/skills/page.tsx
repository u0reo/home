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
import { AppBar, Typo } from '~/views';
import { otherSkills } from './data';

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
          {otherSkills.map((row) => (
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
