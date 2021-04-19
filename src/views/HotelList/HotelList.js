import React, { Fragment, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';

const HotelList = () => {
    const [hotelList, setHotelList] = useState([])

    const getHotelList = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setHotelList(res.data)
    }

    useEffect(() => {
        console.log("hotel-list",hotelList)
    },[hotelList])

    useEffect(() => {
        getHotelList()
    },[])

    return(
        <Box>
            <Typography>ToDos</Typography>
            <List>
                {hotelList.length > 0 ?
                    hotelList.map((item,index) => (
                        <Fragment>
                        <ListItem key={item.id} button>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                        <Divider />
                        </Fragment>
                    ))
                    : <CircularProgress />
                }
                
            </List>
        </Box>
    )
}

export default HotelList