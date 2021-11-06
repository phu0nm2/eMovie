import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/img/notfound-bg.jpg";
import "./style.scss";

const NotFound = () => {
    return (
        <div
            className="notFound"
            style={{ backgroundImage: `url(${background})` }}
        >
            <Card variant="outlined" className="notFound__card">
                <CardContent>
                    <Typography className="notFound__card--num">404</Typography>
                    <Typography className="notFound__card--text">
                        The page you are looking for not available!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        className="notFound__card--button"
                        variant="contained"
                    >
                        <Link to="/" className="btn--link">Go to Home page</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default NotFound;
