import express from 'express'
import usersRoute from './Router/router.js'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);
app.post('/users', usersRoute);

app.get('/', (req, res)=>{
    res.send("Homepage");
});

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})