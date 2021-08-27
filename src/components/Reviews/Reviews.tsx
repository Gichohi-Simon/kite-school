import { Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import { reviews } from '../../constants/constants'

export default function Ratings() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Typography className={classes.mainHeading}>
                Some reviews from our students
            </Typography>

            <div className={classes.reviews}>
                <Grid container spacing={3}>
                    {reviews.map((review) => (
                        <Grid
                            item
                            key={review.name}
                            xs={12}
                            sm={4}
                            md={4}
                        >
                            <Typography className={classes.name}>
                                {review.name}
                            </Typography>

                            <Typography className={classes.review}>
                                {review.body}
                            </Typography>

                            <span className={classes.rating}>
                                {review.rating}
                            </span>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </div>
    )
}
