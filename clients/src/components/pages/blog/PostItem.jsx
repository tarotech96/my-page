import React from 'react'
import './Blog.css'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  makeStyles
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import logo from 'assets/images/logo.png'
import { formatDateWithPadding } from 'constants/utilities'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: '#fff'
  },
  content: {
    height: 100,
    overflow: 'hidden'
  }
}))

PostItem.propTypes = {
  sttItem: PropTypes.number,
  item: PropTypes.object
}

function PostItem({ sttItem, item }) {
  const history = useHistory()
  const classes = useStyles()

  return (
    <div className="blog-item">
      <Card className="card">
        <div className="card-above">
          <CardHeader
            avatar={<Avatar aria-label="recipe" className={classes.avatar} src={logo} alt={'logo'} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.title}
            subheader={formatDateWithPadding(item.createdAt, 'yyyy-MM-dd')}
          />
          <CardMedia
            className={classes.media}
            image={item.imgUrl || logo}
            onClick={() => history.push(`/blog/${sttItem}/${item.id}`)}
          />
          <CardContent className={classes.content}>
            <Typography variant="body1" color="textSecondary" component="p">
              Author: {item.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.body}
            </Typography>
          </CardContent>
        </div>
        <div className="card-below">
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </div>
  )
}

export default PostItem