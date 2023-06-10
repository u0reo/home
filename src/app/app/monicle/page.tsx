'use client';

import React from 'react';
import { Link } from '@mui/material';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="monicle">
    <Image height="600" width="600" src="/img/monicle.jpg" alt="monicleを実際に稼働させた様子" />
    <Typo variant="h6">実際に稼働させた様子</Typo>
    <Image height="450" width="800" src="/img/monicle-all-parts.jpg" alt="monicleの構成部品" />
    <Typo variant="h6">構成部品: 左上からBLEタグ(MAMORIO RE)、遠隔解除キー(iBS04i)、本体とGPSアンテナ</Typo>
    <Image height="450" width="800" src="/img/monicle-main-open.jpg" alt="monicle本体の内部" />
    <Typo variant="h6">本体の内部(ATOM Matrix + LTE-Mモジュール + GPSユニット + ブザー)</Typo>
    <Image height="600" width="600" src="/img/monicle-model.png" alt="monicle本体ケースのモデル" />
    <Typo variant="h6">本体ケースのモデル</Typo>

    <Typo variant="h5" mt={2}>製作&運用期間</Typo>
    <Typo variant="body1">2022年1月 ～ 2月</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      Atom Matrix(Arduino(C++))+Join+Ruhavik via Soracom LTE Cat.M<br />
      ESP32とLEDを搭載したAtom Matrixをコアとし、システム連携サービスのJoinと位置記録サービスのRuhavikを使用した。
      通信には自宅にいる時はWi-Fiを使いつつ、それ以外は別途契約したIoT向けのSoracom LTE Cat.Mを使用。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      高価なスポーツサイクルを買ったが、ただのチェーンだけでは不安なので万が一盗難されたときに場所が分かるようにLTE-MやGNSSを搭載した監視システムを作ってみた。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
      駐輪時にBLEタグを置きつつ、遠隔解除キーを押すことでロックができる。
      振動させたり、解除キーで解除せずに移動させたりするとブザーが鳴り、自転車の位置情報がLTE回線を通じて随時送られる。
      また、盗まれたという通知がスマホにも届く。今回はJoinというスマホやパソコンの連携できるサービスを利用した。
      また、ロック解除中も走行記録をとることもできる。今回はRuhavikという車の位置を記録できるサービスを使った。
      ※全然位置情報がとれなかったため、自転車の位置が動く様子は確認していない。
    </Typo>
    <Typo variant="h5">ソースコード</Typo>
    <Link href="https://gist.github.com/u0reo/1519d1d963cdff8c3c8c5fe32720817f" target="_blank">GitHub Gist</Link>
  </AppBar>);
}
