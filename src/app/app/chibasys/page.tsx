'use client';

import React from 'react';
import { AppBar, Image, Typo } from '~/views';

export default function Page() {
  return (<AppBar title="chibasys">
    <Image height="600" width="600" src="/img/chibasys.png" alt="chibasys" />
    <Typo variant="h5">ソースコード</Typo>
    <object type="image/svg+xml" data="https://gh-card.dev/repos/u0reo/chibasys.svg?link_target=_blank"></object>
    <Typo variant="h5" mt={2}>製作&運用期間</Typo>
    <Typo variant="body1">2019年7月 ～ 2020年4月</Typo>
    <Typo variant="h5">プラットフォーム/言語</Typo>
    <Typo variant="body1">
      なし/PHP + jQuery&Bootstrap4/JavaScript<br />
      定期的にデータをとりに行く必要があったため、サーバー側はオンプレミスで経験の多く普段からたてていたサーバーでPHPを採用。
      クライアント側はカスタマイズしたBootstrap4でデザインしつつ、jQueryでSPAを実現。
    </Typo>
    <Typo variant="h5">開発経緯</Typo>
    <Typo variant="body1">
      大学のシラバス検索や履修登録サイトが当時はPC版のみであり、スマホからはとても見づらかったため。
    </Typo>
    <Typo variant="h5">特徴</Typo>
    <Typo variant="body1">
      大学のアカウントのままでログインでき、履修登録や成績の閲覧が可能。
      Googleアカウントと連携することで履修と同時にカレンダーへ授業をイベントとして追加可能。
    </Typo>
    <Typo variant="body1">
      技術面ではSPAになっているため、高速な画面遷移を行えるほか、ページ遷移がURLに反映されるため、特に意識せずシラバスの共有などが可能。
      毎日スクレイピングしてシラバス情報をため込むことにより、検索性の向上や大学側への余計なクエリを削減している。
    </Typo>
  </AppBar>);
}
