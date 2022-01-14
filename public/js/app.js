import { Person } from './person/_person.js';
import { Moon } from './moon/_moon.js';

import { Controll } from "./controll/_controll.js";
import { Reaper } from './reaper/_reaper.js';



const Game = {
    canvas: document.querySelector("canvas"),
    plan: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height =  window.innerHeight;
        this.context = this.canvas.getContext("2d");
    },
    scene: {
        moon: ""
    },
    person: {
        ghost: ""
    }, 
    enemy: {
        reaper: ""
    }
}



const Setup = function(){
    Game.plan();
    
    /**
     * @create Moon
     */
    Game.scene.moon = new Moon(Game.context);
    Game.scene.moon.Create();
    
    /**
     * @create Person
     */
    Game.person.ghost = new Person(Game.context);
    Game.person.ghost.draw()


    /**
     * @create Reaper
     */
    Game.enemy.reaper = [new Reaper(Game.context)]
    Game.enemy.reaper[0].draw()

}


window.onload = ()=>{
    Setup();
}

window.onresize = ()=>{
    Setup();
}


/**
 * Controllers Comands
 */

document.body.onkeydown = function(ev){
    /**
     * @code 39 - Seta Direita
     * @code 37 - Seta Esquerda
     * @code 38 - Seta Cima
     * @code 40 - Seta Baixo
     */

    this.Controll = new Controll(Game, ev);
    Game.person.ghost = this.Controll.move()

   
}

/** 
 * Menu Actions
 **/

const Menu = {
    loop: "" ,
    start: function(){
        this.loop = setInterval(()=>{
            /**
            * @create Start
            */
            Game.enemy.reaper = [new Reaper(Game.context)]
           console.log(Game.enemy.reaper[0].draw()) 
        },900)   
        
    }
}

Menu.start();