'use client';

import React from 'react';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="Auto Minecraft Server">
    <Image height="450" width="800" src="/img/ams.png" alt="Auto Minecraft Server" />
    <Typo variant="h5">ソースコード</Typo>
    <object type="image/svg+xml" data="https://gh-card.dev/repos/AutoMinecraftServer/AutoMinecraftServer.svg?link_target=_blank"></object>
    <Typo variant="body2">※ 現在は組織所有になっているが、大本を作成</Typo>
    <Typo variant="h5" mt={2}>製作&運用期間</Typo>
    <Typo variant="body1">2015年 ～ 2016年末</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      .NET WPF/C# → Electron + Bootstrap3/JavaScript<br />
      初めは以前製作したPC向けのプログラムに採用していて個人的に慣れ親しんでいたWPFを使用した。
      だが、今後は幅広いプラットフォームに展開するためにもWindowsに依存するWPFではなく、
      OSに依存しないWebベースで製作できるElectronに移行。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      元々のMinecraftサーバープログラムに必要なファイルに直書きしていく必要のある設定や
      遠く離れた人とサーバーを共有するのに必要なポート開放などをソフトウェアの力でカバーし
      誰にでも簡単にサーバー設営が行えるようにしたかったため。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
      タブブラウザのように複数サーバーをまとめて管理運用できる機能やUPnP技術を利用した自動ポート開放が可能。
    </Typo>
  </AppBar>);
}
