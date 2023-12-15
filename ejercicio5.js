function cyberReindeer(road, time) {
    let camino = [];
    let arrayroad = [];
    let bandera = false;
    camino.push(road);
    for(let i = 1; i<time ; i++ ){
      if(i == 5){
        while(road.includes('|')){
          arrayroad = road.split('');
          arrayroad[road.indexOf('|')]='*'
          road = arrayroad.join('');
         }
      }
      if(road.charAt(road.indexOf('S')+1) == '.'){
        arrayroad = road.split('');
        arrayroad[road.indexOf('S')+1 ]='S'
        if(bandera){
          arrayroad[road.indexOf('S')]='*'
          bandera = false;
        }else{
          arrayroad[road.indexOf('S')]='.'
        }
        road = arrayroad.join('');
        camino.push(road);
      }else if(road.charAt(road.indexOf('S')+1) == '*'){
        
        arrayroad = road.split('');
        arrayroad[road.indexOf('S')+1 ]='S'
        if(bandera){
          arrayroad[road.indexOf('S')]='*'
        }else{
          arrayroad[road.indexOf('S')]='.'
        }
        road = arrayroad.join('');
        camino.push(road);
        bandera = true;
      }else{
        camino.push(road);
      }
    }
    return camino;
  }