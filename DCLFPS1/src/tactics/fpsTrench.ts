import { REGISTRY } from "src/registry"
import { GAME_STATE } from "src/state"
import { isNull } from "src/utils/utilities"
import * as serverStateSpec from "src/bullet-fight/connection/state/server-state-spec";
import { resetLoginState } from "src/login/login-flow";
import { SOUND_POOL_MGR } from "src/resources/sounds";


@Component("fpsTrenchInfo")
export class fpsTrenchInfo{
    id: string

    constructor(_id: string){
        this.id = _id
    }
}

// const trenchModel = new GLTFShape("models/iceCube.glb")
// export class fpsTrench extends Entity{

//     id: string
//     modelPos: Vector3
//     health = 10


//     constructor(_modelPosition: Vector3, _id: string){
//         super()
//         engine.addEntity(this)

//         this.id =_id 
//         this.modelPos = _modelPosition

//         this.addComponent(new fpsTrenchInfo(this.id))
 
//         this.addComponent(trenchModel)//.withCollisions = true 
//         //this.addComponent(new BoxShape()).withCollisions = true
//         this.addComponent(new Transform({position: _modelPosition, scale: new Vector3(1,1,1)})) //, scale: new Vector3(0.5, 0.5, 0.5)


//     }

//     hit(damage:serverStateSpec.AlterHealthDataState){
//         log("block hit",this.id,"damage",damage,"this.health",this.health)
//         this.health -= damage.amount

//         SOUND_POOL_MGR.destructibleHitSound.playOnce(this)

//         damage.playerIdTo = this.id
//         //if fired by me
//         if(!isNull(GAME_STATE.gameRoom) && damage.playerIdFrom === REGISTRY.player.sessionId){
//             //send it to others
//             GAME_STATE.gameRoom.send("levelData.trackFeature.adjustHealth",damage)
//         }
       
//         this.checkHealth()
//     }

//     checkHealth()
//     {
//         if(this.health <= 0){
//             //here so that hide does not have a sound side affect
//             SOUND_POOL_MGR.destructibleBreakSound.playOnce(this)
//             this.hide()
//         }
//         else{
//             this.reset()
//         }
//     }

//     hide(){
//         this.getComponent(Transform).position.y = -20

        

//     }
//     reset(){
//         this.getComponent(Transform).position.y = this.modelPos.y
//     }

// }

// class fpstrenchController{
 
//     fpsTrenchesMap:Record<string,fpsTrench> = {}

//     constructor(){
//         const fpsTrenchModelPosition_D = new Vector3(74, .65, 32-7)
//         const fpsTrenchModelPosition_U = new Vector3(86, .65, 32-7)

//         let counter = 0
//         for(let x=0;x<8;x++){
            
//             const fpsTrench_D = new fpsTrench(fpsTrenchModelPosition_D.clone(), "trench."+counter)
//             this.fpsTrenchesMap[fpsTrench_D.id] = fpsTrench_D
//             fpsTrenchModelPosition_D.z += 2

//             counter++
            
//             //top
//             //const fpsTrench_D = new fpsTrench(fpsTrenchModelPosition_D.clone(), "trench."+counter)
//             //this.fpsTrenchesMap[fpsTrench_D.id] = fpsTrench_D
//             //  fpsTrenchModelPosition_D.z += 2

//         }
//         for(let x=0;x<8;x++){
            
//             const fpsTrench_U = new fpsTrench(fpsTrenchModelPosition_U.clone(), "trench."+counter)
//             this.fpsTrenchesMap[fpsTrench_U.id] = fpsTrench_U
//             fpsTrenchModelPosition_U.z += 2
//             counter++
//         }
        
//     }

//     getTrenchById(id:string){
//         return this.fpsTrenchesMap[id]
//     }

//     UpdateHealth(id: string, damage:serverStateSpec.AlterHealthDataState){

//         let fpsTrench = this.fpsTrenchesMap[id]

//         fpsTrench.hit(damage)
//     }   

//     hideAllTrenches(){
//         for(const p in this.fpsTrenchesMap){
//             this.fpsTrenchesMap[p].hide()
//         }
//     }

//     resetAllTrenches(){
//         for(const p in this.fpsTrenchesMap){
//             this.fpsTrenchesMap[p].reset()
//         }
//     }
// }

// export let fpsTrenchController = new fpstrenchController()