'use client';

import React from 'react';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="ChangeSeats">
    <Image height="600" width="600" src="/img/change-seats.png" alt="ChangeSeats" />
    <Typo variant="h5">ダウンロード</Typo>
    <a href='https://play.google.com/store/apps/details?id=com.xperd.changeseats&hl=ja&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
      <img alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png' width="200"/>
    </a>
    <Typo variant="h5" mt={2}>製作&運用期間</Typo>
    <Typo variant="body1">2016年7月 ～ 2018年6月ごろ</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      UWP/C# → Xamarin/C#<br />
      初めは高校のクラスで使うことを想定していたため、プロジェクターに接続しやすいWindowsタブレットで動作するUWPアプリとして製作。
      だが、スマホならば利便性がよく、幅広いプラットフォームに展開することも考えたかったため、
      Windowsに依存するUWPではなく、スマホやタブレットで動作させられるXamarinに移行。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      今まではくじ引きで席替えを行っていたが、毎度くじを用意し黒板に番号を書いて、
      席替え後に新しい席替え表を作ることが同じ作業の繰り返しであり、ソフトウェアでまとめられると考えたため。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
      くじ引きがなく一瞬で決まってしまうためドキドキが一瞬になってしまうのを補うべく名前を表示するアニメーションを実装。
      また、過去に隣になった人と隣同士になりにくいような設定を実装。
    </Typo>
  </AppBar>);
}
