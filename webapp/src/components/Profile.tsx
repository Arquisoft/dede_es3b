import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Profiler } from "react";
import { Product } from '../shared/shareddtypes';

type Profile = {
    loggedA: boolean;
    loggedU: boolean;
}

// const { id, category, name, description, price } = props;

const Profile: React.FC<Profile> = ({ loggedA, loggedU }) => {
    return <Card sx={{ maxWidth: 600 }}>
    </Card>
};


export default Profile;