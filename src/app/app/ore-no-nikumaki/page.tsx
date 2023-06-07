'use client';

import React from 'react';
import { Box } from '@mui/material';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="俺の肉巻き(リアルタイム注文管理&番号待ちシステム)">
    <Box display="flex" flexWrap="wrap" columnGap="0.5rem">
      <Image height="450" width="800" src="/img/ore-no-nikumaki-system.png" alt="俺の肉巻きのシステム画面" />
      <Image height="600" width="600" src="/img/ore-no-nikumaki.png" alt="俺の肉巻きの番号待ちの様子" sx={{ maxWidth: '200px' }} />
      <Image height="600" width="600" src="/img/ore-no-nikumaki-receipt.png" alt="俺の肉巻きで生成されるレシート" sx={{ maxWidth: '200px' }} />
    </Box>
    <Typo variant="h5">ソースコード</Typo>
    <object type="image/svg+xml" data="https://gh-card.dev/repos/u0reo/ore-no-nikumaki.svg?link_target=_blank"></object>
    <Typo variant="h5" mt={2}>製作&運用期間</Typo>
    <Typo variant="body1">2018年6月ごろ ～ 9月</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      Firebase/JavaScript (+ WPF/C#)<br />
      文化祭で運営にも利用者にも使ってもらう想定をしていたため、当日大きく負荷がかかってダウンしないようなプラットフォームを検討した。
      複数人が同時に使う都合上、データを高速に同期したかったため、インフラ等の整備なしでリアルタイムにデータをやり取りできるFirebase Realtime Databaseを採用した。
      また、WebサイトのホスティングもFirebaseのものを採用した。
      ドライバの都合上、レシートの印刷部分にのみ仲介としてWPF(Windowsアプリ)を用いた。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      注文されてから作る都合上必ずお客さんを待たせてしまうため、多くの飲食チェーン店で見かける番号待ちシステムを再現に意欲があった上、運営側のデータ共有に活用できると考えたため。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
      運営側では受付とは離れたご飯等を運ぶところと注文数を同時に確認し、注文ごとの進捗も管理。
      利用者側向けにはサイネージ用の画面も用意しつつ、スマホ画面では待ち状況やレビュー機能も搭載。
      また、当時最新だったWebプッシュ通知にも対応し、対応端末で許可されると注文完成時に通知を送る機能も実装。
    </Typo>
    <Typo variant="body1">
      受験期ということもあり十分なテストができておらずバグ等が不安ではあったが、
      当日はFirebaseの無料枠を超えて止められてしまった以外は正常に動いた。
    </Typo>
  </AppBar>);
}
