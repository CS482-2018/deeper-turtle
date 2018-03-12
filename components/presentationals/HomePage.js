import React from 'react';

import Typography from 'material-ui/Typography';

class HomePage extends React.Component {
  render()
  {
    return (
      <div>
        <Typography variant="headline" > Welcome to our the Kalamazoo Loaves and Fishes Scheduler </Typography> <br/>
        <Typography variant="subheading" >
          If you are a client trying to register, either choose the Scheduler from the sidebar or 
          click on the "How to scheudle yourself" link.
        </Typography><br/>
        <Typography variant="subheading" >
          If you are a KLF staff member or volunteer, please log in.
        </Typography> <br/>
        <Typography variant="headline" >
          Note: For this prototype, the login in for KLF Staff is: 
        </Typography>
        <Typography variant="title" style={{marginLeft: "20px"}} >
          Username: admin, Password: password
        </Typography>
      </div>

    )
  }
}

export default HomePage;
