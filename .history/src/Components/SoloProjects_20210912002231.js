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
                            height="130"
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
                            height="130"
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
                            height="130"
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
                            height="130"
                            image="data:image/png;base64,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"
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
                            height="130"
                            image="https://ak.picdn.net/shutterstock/videos/1049289142/thumb/1.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Covid Detailed App
                            </Typography>
                            <div class="grid-container2">
                                <div class="item1">HTML</div>
                                <div class="item5">CSS</div>
                                <div class="item6">JavaScript</div>
                                <div class="item8">FLASK</div>
                            </div>
                        </CardContent>

                    </CardActionArea>
                    <div className="card__button">
                        <a href="https://github.com/rgnSayan/Covido" target="_blank" rel="noreferrer">
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
                            height="130"
                            image="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                Amazon Clone
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
                        <a href="https://github.com/rgnSayan/react-amazon" target="_blank" rel="noreferrer">
                            <Button size="small" color="primary" variant="contained">
                                Source Code
                            </Button>
                        </a>
                        <a href="https://react-c53bd.web.app//" target="_blank" rel="noreferrer">
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
