import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SoloProjects.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginLeft: 20,
    },
});

function SoloProjects() {
    const classes = useStyles();
    return (
        <div className="soloProjects">
            <div className="soloProject__card">

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Netflix Clone
                            </Typography>
                            <div class="grid-container">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">Axios</div>
                                <div class="item8">Material-UI</div>
                            </div>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/rgnSayan/react-netflix/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-netflix-ff234.web.app" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
        </div >
    )
}

export default SoloProjects
