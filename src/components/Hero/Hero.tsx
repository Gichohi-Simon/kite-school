import React from 'react'
import useStyles from './style'

export default function Hero() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <h3>Hero Component</h3>
        </div>
    )
}
