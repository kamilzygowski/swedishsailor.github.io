import React from 'react';
import './Games.scss';
import {Button} from './GamesElements'; 

class Games extends React.Component {
    render() {
        return (
            <section className="games" id="/games">

                <h1 className="gamesheader"> GAMES </h1>
                <div className="gamesContainer">
                    <Button to="/salvedevito" className="game"><img className="gamesImg1, gamesImg" src="https://i.postimg.cc/hjvDLsvg/sd-Sorcerer.png" alt=""></img>
                        <div className="gamesDescription + first">
                            <br />
                            <h3 className="gamesDescriptionHeader"> Salve Devito </h3>
                            <img className="descriptionImg" src="https://i.postimg.cc/FH745khH/salvedevito3.png" alt=""></img>
                            <p className="gamesDescriptionText"> MMO RPG game, which tells us story about magic world of late middle ages, where you can find magical animals, demonic powers, mythical creatures and much, much more...
                                {/*Salve devito is a mmo rpg game. Choose your character's class, get your weapon and go ahead, explore, fish, 
                            solve puzzles, every single thing you see is a key to something.. Don't even think about it too long just go and ask Sphinx about everyhting!*/}</p>
                            <p className="gamesDescriptionText2"> Click the image for more info</p>
                        </div>
                    </Button>
                    <Button to="/dimensioneye" className="game"><img className="gamesImg2, gamesImg" src="https://i.postimg.cc/XNKHKWMj/dimension-eye-logo.png" alt=""></img>
                        <div className="gamesDescription + second">
                            <br />
                            <h3 className="gamesDescriptionHeader"> Dimension Eye </h3>
                            <img className="descriptionImg" src="https://i.postimg.cc/gjvCs3yg/DE.png" alt=""></img>
                            <p className="gamesDescriptionText"> 2D platformer game, interesting story mixed with unusual mechanics. Game story is about a society where your strength is determined by your occular power!
                                {/*Dimension eye is a platformer game telling story about society of "eye power", where the strongest eye is the dimension eye, which controls physical matter, what about rest of the eyes? Find and check them out :)*/}</p>
                            <p className="gamesDescriptionText2"> Click the image for quick demo :)</p>
                        </div>
                    </Button>
                    <Button to="/milionlasers/" className="game"><img className="gamesImg3, gamesImg" src="https://i.postimg.cc/nVv1J8v9/ml21.png" alt=""></img>
                        <div className="gamesDescription + third">
                            <br />
                            <h3 className="gamesDescriptionHeader"> Milion Lasers </h3>
                            <img className="descriptionImg" src="https://i.postimg.cc/2y2wC6Cz/ML.png" alt=""></img>
                            <p className="gamesDescriptionText"> Milion lasers is a short game, made in one week for Brackey's Game Jam 2021.1, it's a really hard, co-op action game focused on avoiding obstacles in front of you and deal with enemies around you.
                                {/*The main objective of this game is to control the distance bar (on the right-bottom of the screen) and try to avoid all the obstacles on your way.*/} </p>
                            <p className="gamesDescriptionText2"> Click the image to play :)</p>
                        </div>
                    </Button>
                    <Button to="/sd-heroes" className="game"><img className="gamesImg4, gamesImg" src="https://i.postimg.cc/8PPHhrB4/Skull-avatar.png" alt=""></img>
                    <div className="gamesDescription">
                        <div className="gamesDescriptioninner">
                            <br />
                            <h3 className="gamesDescriptionHeader"> Salve Devito - Heroes </h3>
                            <img className="descriptionImg" src="https://i.postimg.cc/PqSjVGN5/window.png" alt=""></img>
                            <p className="gamesDescriptionText"> Salve devito - heroes is a project of browser, interactive clicker game. Game is in pre-pre-alpha. More informations soon :)</p>
                            <p className="gamesDescriptionText2"> Click the image for more info</p>
                        </div>
                        </div>
                    </Button>           
                </div>
                <div className="underContainer"></div>
                <p className="clickTheGames"> Click the games for more info!</p>
            </section>
        )
    }

} export default Games;
