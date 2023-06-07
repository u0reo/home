'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { AppBar, AppCard } from '~/views';

export default function Page() {
  return (<AppBar title="作成したアプリ一覧">
    <Grid container spacing={2}>
      <AppCard
        path="ams"
        title="Auto Minecraft Server"
        devStacks={['Electron', 'Bootstrap3', 'JavaScript', 'Windows']}
        dateRange="2015~2016"
        devType="個人開発"
        description="マインクラフトのサーバー管理ソフトウェア" />
      <AppCard
        path="smart-pen"
        title="Smart Pen"
        devStacks={['C++', 'Java', 'Android']}
        dateRange="2016/6~11"
        devType="チーム開発"
        description="未踏ジュニアにて勉強時間を計測するペンとアプリを制作" />
      <AppCard
        path="change-seats"
        title="ChangeSeats"
        devStacks={['Xamarin', 'C#', 'Android']}
        dateRange="2016/7~2018/6"
        devType="個人開発"
        description="席替えを自動化&効率化するアプリ" />
      <AppCard
        path="ore-no-nikumaki"
        title="俺の肉巻き"
        devStacks={['Firebase', 'JavaScript', 'WPF', 'C#']}
        dateRange="2018/6~9"
        devType="個人開発"
        description="高校の文化祭の注文や順番待ちを管理するシステム" />
      <AppCard
        path="chibasys"
        title="chibasys"
        devStacks={['PHP(Original)', 'Bootstrap4', 'JQuery', 'JavaScript']}
        dateRange="2019/7~2020/4"
        devType="個人開発"
        description="大学のシラバス閲覧や履修登録が行えるシステム" />
    </Grid>
  </AppBar>);
}
