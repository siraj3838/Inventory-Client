import Headline from "./Headline";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    hero: {
        height: 500,
        backgroundAttachment: 'fixed',
        backgroundImage: 'url(https://i.ibb.co/8mXQhRf/Screenshot-2023-11-25-194700.png)',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#151515',
            opacity: 0.5,
            color: 'blue-500'
        },
    },
    overlay: {
        backgroundColor: '#151515',
        opacity: 0.6,
    },
    infoContainer: {
        paddingTop: theme.spacing(5),
        color: '#f1f1f1',
    },
    infoBlock: {
        backgroundColor: '',
        backgroundOpacity: 0.5,
        padding: theme.spacing(5),
        borderRadius: theme.spacing(1),
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div className="hidden lg:block">
            <Headline headline={'Contact Us'}></Headline>
            <div className={classes.hero}>
                <div className={classes.overlay}></div>
                <Container style={{ paddingTop: '130px' }} className={classes.infoContainer}>
                    <Grid container spacing={6} maxWidth="xl">
                        {/* first */}
                        <Grid data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" item md={6} lg={4}>
                            <Paper className={classes.infoBlock}>
                                <Typography variant="h6" gutterBottom>
                                    HEAD OFFICE
                                </Typography>
                                <Typography>Fresh Villa</Typography>
                                <Typography>House # 15, Road # 34, Gulshan-1</Typography>
                                <Typography>Dhaka-1212, Bangladesh</Typography>
                                <Typography>Phone: +880-174135203</Typography>
                                <Typography>Fax: +880 2222289361</Typography>
                                <Typography>Email: ayasaBegum134@gmail.com</Typography>
                            </Paper>
                        </Grid>

                        {/* second */}
                        <Grid data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" item md={6} lg={4}>
                            <Paper className={classes.infoBlock}>
                                <Typography variant="h6" gutterBottom>
                                    FMCG OFFICE
                                </Typography>
                                <Typography>Star Villa</Typography>
                                <Typography>House # 23, Road # 24, Gulshan-2</Typography>
                                <Typography>Dhaka-1212, Bangladesh</Typography>
                                <Typography>Phone: +880-1794665853</Typography>
                                <Typography>Fax: +880 2222289361</Typography>
                                <Typography>Email: siraj457689@gmail.com</Typography>
                            </Paper>
                        </Grid>

                        {/* third */}
                        <Grid data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" item md={6} lg={4}>
                            <Paper className={classes.infoBlock}>
                                <Typography variant="h6" gutterBottom>
                                    CHATTOGRAM OFFICE
                                </Typography>
                                <Typography>Raising Villa</Typography>
                                <Typography>World Trade Center (6th Floor)</Typography>
                                <Typography>102-103, Agrabad C/A, Chattogram</Typography>
                                <Typography>Phone: +880-1707864053</Typography>
                                <Typography>Fax: +8802333313749</Typography>
                                <Typography>Email: mohammadsakil43@gmail.com</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Contact;