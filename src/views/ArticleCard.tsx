import React from 'react';
import useSWR from 'swr';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  styled,
  Typography,
} from '@mui/material';

export const ZennCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '8rem',
});

const TwoLineTypo = styled(Typography)({
  flexGrow: '1',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '2',
});

type ZennArticlesRes = {
  articles: {
    id: number;
    post_type: 'Article';
    title: string;
    slug: string;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: 'tech' | 'idea';
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: string;
    path: string;
    user: {
      id: number;
      username: string;
      name: string;
      avatar_small_url: string
    };
    publication: null
  }[];
  next_page: unknown;
};

const fetcher = async (url: string) => await (await fetch(url)).json();

export const useSWRArticle = () => useSWR<ZennArticlesRes>('/api/zenn-articles', fetcher);

export interface ArticleCardProps {
  title: string;
  url: string;
  date: Date;
  letters_count: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, url, date }) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <CardActionArea onClick={() => window.open(url)}>
        <Card variant="outlined">
          <ZennCardContent>
            <TwoLineTypo variant="h6">{title}</TwoLineTypo>
            <Typography variant="body2" color="text.secondary" align="right">
              {`${date.getFullYear()}/${date.getMonth() + 1}/${date.getMinutes()}`}
            </Typography>
          </ZennCardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
