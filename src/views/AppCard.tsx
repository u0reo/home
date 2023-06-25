import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
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
  SiDocker,
  SiElectron,
  SiFirebase,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiShell,
  SiVisualstudio,
  SiWindows11,
  SiXamarin,
} from 'react-icons/si';
import { IconChip } from './IconChip';

const CardImage = styled(Image)({
  objectFit: 'cover', // 'contain',
  objectPosition: '0 0',
  position: 'relative',
  height: '192px !important',
  width: '192px !important',
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
  Shell: <SiShell />,
  Docker: <SiDocker />,
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
  link?: string;
}

export const AppCard: React.FC<AppCardProps> = (props) => {
  const { path, title, imageUrl, imageType, devStacks, dateRange, devType, description, link } = props;
  const router = useRouter();

  return (
    <Grid item xs={12} lg={6}>
      <Card>
        <CardActionArea sx={{ display: 'flex', alignItems: 'flex-start' }} onClick={() => {
          const realLink = link || `/app/${path}`;
          realLink.includes('http') ? window.open(realLink) : router.push(realLink);
        }}>
          <CardImage
            src={imageUrl || `/img/${path}.${imageType ?? 'png'}`}
            alt={title}
            width={150}
            height={150}
          />
          <CardContent>
            <Typography variant="h5" component="div">{title}</Typography>
            <Stack direction="row" flexWrap="wrap" rowGap="0.2rem" columnGap="0.5rem" marginBottom="1rem">
              {
                devStacks.map(ds =>
                  <IconChip size="small" variant="outlined" key={ds} label={ds} icon={DevStacks[ds]} />)
              }
              <IconChip size="small" variant="outlined" label={dateRange} icon={<MdDateRange />} />
              <IconChip size="small" variant="outlined" label={devType} icon={<MdPerson />} />
              {/* <IconChip size="small" variant="outlined" label="開発完了" icon={<MdDone />} /> */}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {description.replaceAll('\n', '<br />')}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};