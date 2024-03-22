import * as utils from '@dcl/ecs-scene-utils'
import { CONFIG } from 'src/config'
import { displayMakebulletInstructions } from 'src/modules/ui'
import { REGISTRY } from 'src/registry'


export class fpsyArea extends Entity
{
    constructor(triggerPosition: Vector3, triggerScale: Vector3)
    {
        super()
        engine.addEntity(this)

        if(CONFIG.DEBUGGING_TRIGGER_fpsAREA_DUMMY_OBJ_ENABLED){
            const debugEnt = new Entity()
            debugEnt.setParent(this)
            //debugEnt.addComponent(new GLTFShape("models/Test/fpsPileDig.glb")).withCollisions = true
             
            const visibleScale = triggerScale.clone()
            //visibleScale.
            
            const visiblePos = triggerPosition.clone()
            visiblePos.y = -.5
            //debugEnt.addComponent(new Transform({scale: visibleScale}))
    
            debugEnt.addComponent(new BoxShape()).withCollisions=false
            debugEnt.addComponent(new Transform({position: visiblePos, scale: visibleScale}))//Just for previs (map will hae the fps in those positions)
        }
        let triggerShape = new utils.TriggerBoxShape(triggerScale, triggerPosition)
        this.addComponent(new utils.TriggerComponent(triggerShape, {
            onCameraEnter: () =>{
                REGISTRY.player.setInfpsPickupZone( true )
            }, 
            onCameraExit: () => {
                REGISTRY.player.setInfpsPickupZone( false )
            },
            enableDebug: CONFIG.DEBUGGING_TRIGGER_fpsAREA_ENABLED
        }
        ))
    }
}