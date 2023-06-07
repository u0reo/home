'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AppBar, Typo } from '~/views';
import { pagesPath } from '~/lib';

export default function Home() {
  return (
    <AppBar title="ようこそ、ureo.jpへ">
      <Link href={pagesPath.apps.$url()}>
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>Apps</Button>
      </Link>
      <Link href={pagesPath.skills.$url()}>
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>Skills</Button>
      </Link>
      <Typo variant="h4" align="center" mt="2rem">リンク集</Typo>
      <Link href="https://github.com/u0reo">
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>GitHub</Button>
      </Link>
      <Link href="https://zenn.dev/ureo">
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>Zenn</Button>
      </Link>
      <Link href="https://twitter.com/u0reo">
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>Twitter</Button>
      </Link>
      <Link href="https://github.com/u0reo/home">
        <Button endIcon={<AiOutlineDoubleRight />} fullWidth sx={{ fontSize: '1.2rem' }}>Homepage&apos;s Source Code</Button>
      </Link>
    </AppBar>
  );
}
