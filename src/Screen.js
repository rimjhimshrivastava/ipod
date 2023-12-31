import './Screen.css';
import Header from './Header';
import ScreenMenu from './ScreenMenu';
import MusicMenu from './MusicMenu';
import MusicPlayer from './MusicPlayer';
import Default from './Default';

//screen of the ipod
function Screen(props){
    //display a screen when the screen value is matched
    return(
        <div className="screen">
            < Header />
            {props.screen === 1 && < ScreenMenu />}
            {props.screen === 2 && < MusicMenu />}
            {props.screen === 3 && < MusicPlayer song={props.song} />}
            {props.screen === 4 && < Default screenname={props.screenname} />}
            
        </div>
    )
}

export default Screen;