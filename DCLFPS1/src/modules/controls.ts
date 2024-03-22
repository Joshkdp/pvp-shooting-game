//import { physicsBall } from "./physicsBall"
import { BallManager } from "./ball"
import { triggerEmote, PredefinedEmote,  } from "@decentraland/RestrictedActions"
//import { player } from "./player"
import { DisplayCursorMessage, DisplayServerMessage } from "./ui"
import { teamColor } from "./teamColors"
import { REGISTRY } from "src/registry"
import { CONFIG } from "src/config"
import { SOUND_POOL_MGR } from "src/resources/sounds"
import { Sound } from './sound'
//let player = Camera.instance


let offsetVecOriginal = new Vector3(0.5, -0.2, 0)
let offsetVec = new Vector3(0.5, 0.0, 0)
let throwDirOriginal = new Vector3(0, 0, 1)
let throwDir = new Vector3(0, 0, 1)
const input = Input.instance

export function initControls(){
    const player = REGISTRY.player

    // SHOOT
    input.subscribe("BUTTON_DOWN", ActionButton.POINTER, true, e => {
        log("input.subscribe.BUTTON_DOWN.ActionButton.POINTER")
        if(player.canThrowAmmo){
            
                if(player.ammo > 0){
                    
                    //increas throw force

                    player.increasForceMode = true
                }
            
        }
            
            //ball.moveVector.copyFrom(throwDir.rotate(player.rotation))  
        // physicsBall.playerThrow(player.position.add(offsetVec.rotate(player.rotation)),throwDir.rotate(player.rotation), 200)
            //triggerEmote({ predefined: PredefinedEmote.RAISE_HAND })

    })
    const shotRicochetSound = new Sound(new AudioClip('sounds/shot.mp3'))


    input.subscribe("BUTTON_UP", ActionButton.POINTER, true, e => {
        log("input.subscribe.BUTTON_UP.ActionButton.POINTER")
        if(player.canThrowAmmo){
            if(!player.inCooldown){   
                if(player.ammo > 0){
                    player.useAmmo()
                    
                    offsetVec.copyFrom(offsetVecOriginal) 
                    throwDir.copyFrom(throwDirOriginal)
                    player.increasForceMode = true
                    shotRicochetSound.getComponent(AudioSource).playOnce()
                    if(player.cameraMode == CameraMode.ThirdPerson){
                        player.ballManager.spawnBall(player.color, true,'normal').throwBallPlayer(player.cam.position.add(offsetVec.rotate(player.cam.rotation)),throwDir.rotate(player.cam.rotation),player.throwForce)
                                            
                    }
                    else{
                        player.ballManager.spawnBall(player.color, true,'normal').throwBallPlayer(player.cam.position,throwDir.rotate(player.cam.rotation),player.throwForce * 5)
            
                    }
                 //player.clipThrow.play(true)
                    //TODO:
                    if(CONFIG.bullet_TRIGGER_EMOTES_ENABLED) triggerEmote({ predefined: 'bulletthrow' as any })
                }else{
                    DisplayCursorMessage("OUT OF AMMO", "Press 'E' to reload", 2)
                    SOUND_POOL_MGR.outOfAmmo.playOnce()
                }
            
            }
        }
        player.increasForceMode = false
        
        
        
            
            //ball.moveVector.copyFrom(throwDir.rotate(player.rotation))  
        // physicsBall.playerThrow(player.position.add(offsetVec.rotate(player.rotation)),throwDir.rotate(player.rotation), 200)
            //triggerEmote({ predefined: PredefinedEmote.RAISE_HAND })
    })

    // HOLD DOWN TO COLLECT fps FOR AMMO
    input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, true, e => {
        log("input.subscribe.BUTTON_DOWN.ActionButton.SECONDARY")
        if(player.canCollectAmmo){
            player.collectAmmo()   
        }
        else{
            DisplayCursorMessage('NO CRAFTING YET!', "Wait for the next game", 0.5)
        }
                
        
    })

    // COLLECT fps FOR AMMO
    input.subscribe("BUTTON_UP", ActionButton.SECONDARY, true, e => {
        log("input.subscribe.BUTTON_UP.ActionButton.SECONDARY")
        if(!CONFIG.bullet_AUTO_COLLECT_ENABLED) player.stopCollectAmmo()    
        
    })
    // SLOW DOWN FOR WALKING
    input.subscribe("BUTTON_DOWN", ActionButton.WALK, true, e => {       
            player.setWalking(true)      
    })
    input.subscribe("BUTTON_UP", ActionButton.WALK, true, e => {       
            player.setWalking(false)      
    })
    input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (event) => {
        player.setAmmo(10)
      })
}

