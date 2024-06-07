import { Card, Box, Stack, Grid, Typography, Container, } from '@mui/material'
import React from 'react'
import userIcon from '../../assets/icons/circle-user.png'

export default function Dashboard() {
  const colors = [
    'linear-gradient(310deg, #ea0606 0%, #ff667c 100%)',
    'linear-gradient(310deg, #f53939 0%, #fbcf33 100%)',
    'linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)',
    'linear-gradient(310deg, #7928CA 0%, #FF0080 100%)',
    'linear-gradient(310deg, #627594 0%, #A8B8D8 100%)',
    'linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)',
    'linear-gradient(310deg, #369f9f 0%, #9bffff 100%)',
    'linear-gradient(310deg, #6927d3 0%, #eec5ff 100%)',
    'linear-gradient(310deg, #1b4e9b 0%, #98e7ff 100%)',
    'linear-gradient(310deg, #c18d16 0%, #daff45 100%)',
    'linear-gradient(310deg, #ea0606 0%, #ff667c 100%)',
    'linear-gradient(310deg, #f53939 0%, #fbcf33 100%)',
    'linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)',
    'linear-gradient(310deg, #7928CA 0%, #FF0080 100%)',
    'linear-gradient(310deg, #627594 0%, #A8B8D8 100%)',
    'linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)',
    'linear-gradient(310deg, #369f9f 0%, #9bffff 100%)',
    'linear-gradient(310deg, #6927d3 0%, #eec5ff 100%)',
    'linear-gradient(310deg, #1b4e9b 0%, #98e7ff 100%)',
    'linear-gradient(310deg, #c18d16 0%, #daff45 100%)',

   

  ]


  const test = [
    {
      title: 'Total Users',
      count: 75.353,
      color: colors[0]
    },
    {
      title: 'Total Class',
      count: 75.353,
      color: colors[1]
    },
    {
      title: 'Subjects',
      count: 75.353,
      color: colors[2]
    },
    {
      title: 'Materials',
      count: 75.353,
      color: colors[3]
    },
    {
      title: 'Medium',
      count: 75.353,
      color:  colors[4]
    },
    {
      title: 'Categories',
      count: 75.353,
      color: colors[5]
    },
    {
      title: 'Languages',
      count: 75.353,
      color: colors[6]
    },
    {
      title: 'Total News',
      count: 75.353,
      color: colors[7]
    },
    {
      title: 'Total Sliders',
      count: 75.353,
      color: colors[8]
    },
    {
      title: 'Total Reviews',
      count: 75.353,
      color: colors[9]
    },
    {
      title: 'Pending Supports',
      count: 75.353,
      color:  colors[10]
    },
    {
      title: 'Reports',
      count: 75.353,
      color: colors[11]
    },
    {
      title: 'Notification',
      count: 75.353,
      color: colors[12]
    },

    {
      title: 'Versions',
      count: 75.353,
      color: colors[13]
    },
    {
      title: 'Revenue',
      count: 75.353,
      color: colors[14]
    },
    {
      title: 'Revenue',
      count: 75.353,
      color: colors[15]
    },
    {
      title: 'Revenue',
      count: 75.353,
      color:  colors[16]
    },
    {
      title: 'Revenue',
      count: 75.353,
      color: colors[17]
    },
    {
      title: 'Revenue',
      count: 75.353,
      color: colors[18]
    },

  ]

  
  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" sx={{ mt: 2, mb: 5, ml: 2 }}>
        Hi, Welcome back 👋
      </Typography>

     <Box sx={{display:'flex',justifyContent:'center'}} >
     <Grid container spacing={3} maxWidth={'lg'}  >
        {test.map((item, i) => {
       return     <DashboardItem key={i} item={item} />
        })}

      </Grid>
     </Box>

    </Container>
  )
}



function DashboardItem({ item }) {
  return (
    <Grid item  xs={12} sm={6} md={4} lg={3} >
      <Card
        component={Stack}
        spacing={3}
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2.6,
          px: 2,
          borderRadius: 2,
          boxShadow: '0 20px 27px 0 rgba(0, 0, 0, 0.05)'
        }}

      >

        <Stack spacing={0.5}>
          <Typography variant="subtitle1" sx={{ color: 'text.disabled' }}>
            {item.title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'fontWeightSemiBold' }}>{item.count}</Typography>


        </Stack>

        <Box sx={{
          width: '72px',
          height: '72px',
          borderRadius: 0.8,
          p: 1.8,
          backgroundImage: item.color,
          boxShadow:(shadow)=> shadow.shadows[6],
        }}
        >
          <Box component={'img'} src={userIcon} style={{ width: '100%' }} />
        </Box>

      </Card>

    </Grid>
  )
}