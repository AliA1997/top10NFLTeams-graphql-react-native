import { createDrawerNavigator } from 'react-navigation';
//import components for your routes
import Home from './Home';
import ListOfBestPlayers from './ListOfBestPlayers';
import ListOfBestTeams from './ListOfBestTeams';

const DrawerNavigator = createDrawerNavigator({
    Home: Home,
    BestPlayers: ListOfBestPlayers,
    BestTeams: ListOfBestTeams
}, {
    initialRouteName: 'Home'
})


export default DrawerNavigator;