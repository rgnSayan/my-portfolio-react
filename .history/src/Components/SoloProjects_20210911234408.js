import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SoloProjects.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        // maxHeight:200,
        marginLeft: 20,
        marginTop: 15,
    },
    button: {
        textDecoration: 'none',
    }
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
                            <div class="grid-container1">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">Axios</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/react-netflix/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-netflix-ff234.web.app" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Facebook Clone
                            </Typography>
                            <div class="grid-container2">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">CSS</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/React-Facebook" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-facebook-de113.web.app/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://jazzpackage.pk/wp-content/uploads/2021/08/WhatsApp-Update.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Whatsapp Clone
                            </Typography>
                            <div class="grid-container3">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">CSS</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/whatsapp-clone" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-whatsapp-e5dad.web.app/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>

            <div className="soloProject__card">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="http://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Slack Clone
                            </Typography>
                            <div class="grid-container1">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">Auth</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/slack-clone" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-slack-7128e.web.app/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Facebook Clone
                            </Typography>
                            <div class="grid-container2">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">CSS</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/React-Facebook" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-facebook-de113.web.app/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="120"
                            image="https://ak.picdn.net/shutterstock/videos/1038907721/thumb/10.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Whatsapp Clone
                            </Typography>
                            <div class="grid-container3">
                                <div class="item1">ReactJS</div>
                                <div class="item5">Firebase</div>
                                <div class="item6">CSS</div>
                                <div class="item8">Material-UI</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/whatsapp-clone" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-whatsapp-e5dad.web.app/" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Live Demo
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>
        </div >
    )
}

export default SoloProjects
