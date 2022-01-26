import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

const Headlines = ({article}) => {
  return (
    <Card className='headline-card'>
      <CardMedia
    component='img'
    image={article.urlToImage}
    alt='headline'
    className='healine-img'
    />
      <CardContent className='headline-content'>
        <Typography variant='h4'  className='headline-title'>{article.title}</Typography>
        <Typography variant='body1'  className='headline-description'>{article.description}</Typography>
      </CardContent>
      <CardActions className='headline-action'>
        <Button size='small' variant='contained' color='primary' className='headline-btn'>
          <a href={article.url} target='_blank' rel="noreferrer">Read More</a>
        </Button>
      </CardActions>
    </Card>
)
};

export default Headlines;