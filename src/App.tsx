import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import './App.scss';

interface dataTS {
    title: string,
    description: string,
}

let data: dataTS[] = [
  {
      title: 'Spain',
      description: 'is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.',
  },
  {
      title: 'Egypt',
      description: 'officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula.',
  },
  {
      title: 'France',
      description: 'is a transcontinental country spanning Western Europe and several overseas regions and territories.',
  },
]

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 140,
    },
  });

const App = () => {
  const classes = useStyles();

  return (
      <div className = 'App'>
      <h1>itechart-react-course</h1>
          <div className = 'cards-container'>
          {
              data.map((el, i) =>
                  <Card className={classes.root} key = {i}>
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {el.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {el.description}
                          </Typography>
                      </CardContent>
                  </Card>)
          }
          </div>
      </div>
  )
}

export default App;
