import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AiOutlineDoubleRight } from 'react-icons/ai';


export interface TitleWithLinkProps {
  title: string;
  linkTitle?: string;
  link?: string;
}

export const TitleWithLink: React.FC<TitleWithLinkProps> = ({ title, linkTitle, link }) => {
  const router = useRouter();

  return (
    <Grid container marginBottom="12px" sx={{
      '* + &': {
        marginTop: '1rem',
      },
    }}>
      <Grid item sm={6} xs={12}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      {
        linkTitle && link ?
          <Grid item sm={6} xs={12} sx={{ textAlign: 'right' }}>
            <Button
              endIcon={<AiOutlineDoubleRight />}
              onClick={() => link.includes('http') ? window.open(link) : router.push(link)}
              sx={{ marginTop: '0.5rem', textTransform: 'unset' }}>
              {linkTitle}
            </Button>
          </Grid> : null
      }
    </Grid>
  );
};
