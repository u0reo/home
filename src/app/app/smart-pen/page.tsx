'use client';

import React from 'react';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="Smart Pen">
    <Image height="600" width="600" src="/img/smart-pen.png" alt="Smart Pen" />
    <Typo variant="h5">製作&運用期間</Typo>
    <Typo variant="body1">2016年6月 ～ 11月</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      C++ + Android/Java<br />
      初めはArduino互換デバイスを用いてプロトタイプを製作し、最終的にはAndroidアプリとBLE対応のkonashiにカスタムファームウェアを書き込み。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      勉強時間を自動的に記録することで、手間なく普段の勉強量を把握するため。
      未踏ジュニアのプロジェクトとして採択されたためあらかじめ決められた期間で製作した。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
    静電容量式タッチセンサをペンに取り付けることによってペンの状態を検出。
    また、指先サイズのIO搭載マイコンであるkonashiとLR44x2を電源にすることにより小型化にすることで小型デバイスであり、
    カスタムファームウェアによりできる限り消費電力を抑えた。
    </Typo>
  </AppBar>);
}
