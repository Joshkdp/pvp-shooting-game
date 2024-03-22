
import { bulletLeaderboard } from "src/modules/leaderboard"
import {  bulletArena } from "src/bullet-fight/bulletScene"
import { Lobby } from "./lobbyScene"
//import { ISceneManager } from "./sceneManager"
//import { SubScene } from "./subScene"

//workaround to break cyclic deps
export interface ISceneManager {//extends ISceneManager{
  //lobbyScene:LobbyScene
  bulletArena:bulletArena
  lobby:Lobby
  leaderboard:bulletLeaderboard

  goArena(force?:boolean):void
  goLobby(force?:boolean):void

}

//export let SCENE_MGR:IRaceSceneManager // = new RaceSceneManager();