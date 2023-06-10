import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { FaJava } from 'react-icons/fa';
import { MdCellTower, MdDateRange, MdDone, MdPerson } from 'react-icons/md';
import {
  SiAndroid,
  SiArduino,
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiElectron,
  SiFirebase,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiVisualstudio,
  SiWindows11,
  SiXamarin,
} from 'react-icons/si';

const CardImage = styled(Image)({
  objectFit: 'cover', // 'contain',
  objectPosition: '0 0',
  position: 'relative',
  height: 'auto !important',
  width: 'auto !important',
});

const IconChip = styled(Chip)({
  margin: '0 !important',
  'svg.MuiChip-icon': {
    marginLeft: '6px',
    height: '0.9em',
  },
});

const DevStacks = {
  Bootstrap3: <SiBootstrap />,
  Bootstrap4: <SiBootstrap />,
  Electron: <SiElectron />,
  Firebase: <SiFirebase />,
  Xamarin: <SiXamarin />,
  WPF: <SiVisualstudio />,
  'C++': <SiCplusplus />,
  'C#': <SiCsharp />,
  Java: <FaJava />,
  JavaScript: <SiJavascript />,
  JQuery: <SiJquery />,
  'PHP(Original)': <SiPhp />,
  Windows: <SiWindows11 />,
  Android: <SiAndroid />,
  Arduino: <SiArduino />,
  'LPWA(LTE-M)': <MdCellTower />,
} as const;

export type DevStackName = keyof typeof DevStacks;

export interface AppCardProps {
  path: string;
  title: string;
  imageUrl?: string;
  imageType?: 'png' | 'jpg';
  devStacks: DevStackName[];
  dateRange: string;
  devType: '個人開発' | 'チーム開発';
  description: string;
  downloadLink?: string;
  sourceCodeLink?: string;
}

export const AppCard: React.FC<AppCardProps> = (props) => {
  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ display: 'flex' }}>
        <CardImage
          src={props.imageUrl || `/img/${props.path}.${props.imageType ?? 'png'}`}
          alt={props.title}
          width={150}
          height={150}
        />
        <Box>
          <CardContent>
            <Typography variant="h5" component="div">{props.title}</Typography>
            <Stack direction="row" flexWrap="wrap" rowGap="0.2rem" columnGap="0.5rem" marginBottom="1rem">
              {
                props.devStacks.map(ds =>
                  <IconChip size="small" variant="outlined" key={ds} label={ds} icon={DevStacks[ds]} />)
              }
              <IconChip size="small" variant="outlined" label={props.dateRange} icon={<MdDateRange />} />
              <IconChip size="small" variant="outlined" label={props.devType} icon={<MdPerson />} />
              {/* <IconChip size="small" variant="outlined" label="開発完了" icon={<MdDone />} /> */}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {props.description.replaceAll('\n', '<br />')}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/app/${props.path}`}><Button size="small">詳細</Button></Link>
            {
              !props.downloadLink ? null :
                <Link href={props.downloadLink}><Button size="small">ダウンロード</Button></Link>
            }
            {
              !props.sourceCodeLink ? null :
                <Link href={props.sourceCodeLink}><Button size="small">ソースコード</Button></Link>
            }
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};