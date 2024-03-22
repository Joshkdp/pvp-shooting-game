
//import { MovesWithWorld } from "src/og-decentrally/components/moveWithWorld"
import { Hidden } from "../components/commonComponents"
//import { scene } from "./scene"

const HIDDEN_ENTITY = new Hidden()

export abstract class AbstractSpawner {
  name:string
  MAX_POOL_SIZE:number
  entityPool: Entity[]

  constructor(name:string,maxPoolSize:number){
    this.name = name
    this.MAX_POOL_SIZE= maxPoolSize //scene.scale * 24
    this.entityPool = []
  }

  removeEntity(entity:IEntity){
    entity.addComponentOrReplace(HIDDEN_ENTITY)
  }

  //TODO maybe use generics so can have a common spawnEntity method
  //spawnEntity(x:number, y:number, z:number, rot:number):Entity {
  //  return null
  //}   

  releasePool(){
    //SHOULD WE REMOVE ALL BEFORE EMPTYING POOL?
    this.entityPool = []
  }

  removeAll(){
    for (let i = 0; i < this.entityPool.length; i++) {
      if (this.entityPool[i].alive) {
        this.removeEntity(this.entityPool[i])
      }
    }
  }

  createNewPoolEntity(cnt?:number){
    return new Entity(this.name+"pool-ent"+cnt)
  }

  getEntityFromPool(): Entity | null {     
    
      // Check if an existing entity can be used
      for (let i = 0; i < this.entityPool.length; i++) {
        if (!this.entityPool[i].alive) {
          return this.entityPool[i]
        }
        else if(this.entityPool[i].hasComponent(Hidden)){
          this.entityPool[i].removeComponent(Hidden)
          return this.entityPool[i]
        }
      } 
      // If none of the existing are available, create a new one, unless the maximum pool size is reached
      if (this.entityPool.length < this.MAX_POOL_SIZE) {
        const instance = this.createNewPoolEntity(this.entityPool.length)
        this.entityPool.push(instance)
        return instance
      }

      log("AbstractSpawner.getEntityFromPool() WARNING",this.name," pool exhausted all ",this.MAX_POOL_SIZE,"vs",this.entityPool.length,"objects")
      return null
    
     
  }


}
