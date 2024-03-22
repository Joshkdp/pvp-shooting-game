import { FireCamp } from "./fireCamp";
import { fpsyArea } from "./fpsyArea";
import { powerupController, PowerUpSpawner } from "./powerUpSpawner";

//#region COORDINATES
//L = Left, C = Center, R = Right, D = Down, U = Up
/*
const fireModelPosition_LD = new Vector3(50, 2, 70)
const fireModelPosition_LU = new Vector3(111, 2, 70)
const fireTriggerOfsetPosition_L = new Vector3(0, 0, 2)
const fireTriggerScale_L = new Vector3(16, 6, 11)

const fireModelPosition_CD = new Vector3(35, 2, 47)
const fireModelPosition_CU = new Vector3(125, 2, 47)
const fireTriggerOfsetPosition_C = new Vector3(0, 0, 1.5)
const fireTriggerScale_C = new Vector3(14, 6, 14)
*/

const fpsyAreaPosition_LD = new Vector3(26.5, 2, 69.5)
const fpsyAreaPosition_LU = new Vector3(133.5, 2, 69.5)
const fpsyAreaScale_L = new Vector3(21, 2, 21)

const fpsyAreaPosition_CD = new Vector3(52, 2, 58)
const fpsyAreaPosition_CU = new Vector3(107, 2, 58)
const fpsyAreaScale_C = new Vector3(21, 2, 12)

const fpsyAreaPosition_RD = new Vector3(27.5, 2, 26.5)
const fpsyAreaPosition_RU = new Vector3(132.5, 2, 26.5)
const fpsyAreaScale_R = new Vector3(23, 2, 21)


const powerUpSpawnerPosition = new Vector3(80, 0, 38)
//#endregion

export function MapSetUp()
{
    const fpsyArea_LD = new fpsyArea(fpsyAreaPosition_LD, fpsyAreaScale_L)
    const fpsyArea_LU = new fpsyArea(fpsyAreaPosition_LU, fpsyAreaScale_L)
    const fpsyArea_CD = new fpsyArea(fpsyAreaPosition_CD, fpsyAreaScale_C)
    const fpsyArea_CU = new fpsyArea(fpsyAreaPosition_CU, fpsyAreaScale_C)
    const fpsyArea_RD = new fpsyArea(fpsyAreaPosition_RD, fpsyAreaScale_R)
    const fpsyArea_RU = new fpsyArea(fpsyAreaPosition_RU, fpsyAreaScale_R)

    //lobby
    //const fpsyArea_lobbby1 = new fpsyArea(new Vector3(46,2,8), new Vector3(62, 2, 12))
    const fpsyArea_lobbby2 = new fpsyArea(new Vector3(44,2,8), new Vector3(40, 2, 12))
    const fpsyArea_lobbby3 = new fpsyArea(new Vector3(123,2,8), new Vector3(47, 2, 12))
    const fpsyArea_lobbby4 = new fpsyArea(new Vector3(152,2,19), new Vector3(10, 2, 29))
    const fpsyArea_lobbby5 = new fpsyArea(new Vector3(152,2,76), new Vector3(12, 2, 30))
    const fpsyArea_lobbby6 = new fpsyArea(new Vector3(123,2,88), new Vector3(44, 2, 13))
    const fpsyArea_lobbby7 = new fpsyArea(new Vector3(30,2,87), new Vector3(55, 2, 10))
    const fpsyArea_lobbby8 = new fpsyArea(new Vector3(9,2,72), new Vector3(11, 2, 20))
    const fpsyArea_lobbby9 = new fpsyArea(new Vector3(8,2,22), new Vector3(14, 2, 24))


    const powerUpSpawner_C = powerupController.createPowerUp(powerUpSpawnerPosition)
}