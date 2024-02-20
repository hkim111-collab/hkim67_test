import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';


const NEXT_JS_COOL_SITES = [
    {
      name: "Next.js Blog",
      url: "https://nextjs.org/blog"
    },
    {
      name: "Awesome React Components to take a look at",
      url: "https://github.com/brillout/awesome-react-components"
    },
    {
      name: "Building IOS and Android Apps with React",
      url: "https://reactnative.dev/"
    },
    {
      name: "React Conference Talks on Youtube",
      url: "https://www.youtube.com/results?search_query=react+conference+talks"
    }
  ]

export default function JSArticles() {
    return (
        <Box>
            <List>
            {NEXT_JS_COOL_SITES.map(item => {
                return (
                <ListItem key={item.text}>
                        
                        <ListItemText>
                        <Typography color="primary">
                            <a href={item.url}>
                                {item.name}
                            </a>
                        </Typography>
                        </ListItemText>
                </ListItem>
                )
            })}
            </List>
        </Box>
    )
  }