
import { Component, _decorator } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('LaunchScene')
export class LaunchScene extends Component {

    start () {
        console.log("LaunchScene start ...");

    }

    private handleClick(){
        console.log("LaunchScene handleClick ...");
    }


}


