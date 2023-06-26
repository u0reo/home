'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card, Grid, Skeleton, Typography } from '@mui/material';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AppBar, Apps, ArticleCard, IconChip, TitleWithLink, Typo, useSWRArticle, ZennCardContent } from '~/views';
import { pagesPath } from '~/lib';
import { otherSkills } from './skills/data';
import { MdDateRange } from 'react-icons/md';

export default function Home() {
  const { data: articles, error, isLoading } = useSWRArticle();

  return (
    <AppBar title="ようこそ、ureo.jpへ">
      <TitleWithLink title={
        isLoading ? 'Zenn記事 (読み込み中…)' :
          `Zenn記事 (${
            (articles?.articles ?? [])
              .filter(a => a.article_type === 'tech').length
          }件)`
      } linkTitle="Zennのプロフィールページへ" link="https://zenn.dev/ureo" />
      <Grid container spacing={2}>
        {
          isLoading ?
            new Array(6).fill(0).map((_, i) => (
              <Grid item key={i} xs={12} sm={6} lg={4}>
                <Card>
                  <ZennCardContent>
                    <Skeleton variant="rounded" sx={{ flexGrow: '1' }} />
                    <Skeleton variant="text" width={70} sx={{ fontSize: '0.875rem', alignSelf: 'end' }} />
                  </ZennCardContent>
                </Card>
              </Grid>
            )) :
            (articles?.articles ?? []).filter(a => a.article_type === 'tech').slice(0, 6).map(a =>
              <ArticleCard
                key={a.id}
                title={`${a.emoji} ${a.title}`}
                url={`https://zenn.dev/ureo/articles/${a.slug}`}
                date={new Date(a.published_at)}
                letters_count={a.body_letters_count} />
            )
        }
      </Grid>
      <TitleWithLink title="自作アプリ" linkTitle="一覧へ" link={pagesPath.apps.$url().pathname} />
      <Apps />
      <TitleWithLink title="経験言語/フレームワーク等" linkTitle="一覧へ" link={pagesPath.skills.$url().pathname} />
      <Typography variant="body1">
        フレームワーク等: {
          otherSkills.slice(0, 10).map(s => <IconChip
            key={s.name}
            size="small"
            variant="outlined"
            label={s.name}
            icon={s.icon} />)
        }
        {(otherSkills.length > 10) ? ' など' : ''}
      </Typography>
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
