/* exported buildScene */


function buildScene() {
  
  let scene = {};

  scene.background = "green";
  scene.panels = [];
  scene.texts = [];
  
  for(var t = 0; t < 100; t++){
    let fire_x = (-Math.random()*1000)+ 500; 
    console.log(fire_x);
    scene.texts.push({
      text: "🔥",
      size: 35,
      z: 5,
      y: -Math.random()*200,
      x: fire_x,
      color: "orange"  
    });
  }
  
  for(var f = 0; f < 200; f++){
    scene.texts.push({
      text: "🔥",
      size: 35,
      z: 100,
      y: -Math.random()*100,
      x: -Math.random()*1000,
      color: "orange"  
    });
  }
  
  for(var g = 0; g < 90; g++){
    let tree_x = (-Math.random()*1000) + 500;
    scene.texts.push({
      text: "🌲",
      size: 50,
      z: 10,
      y: -Math.random()*90,
      x: tree_x,
      color: "green"  
    });
  }
  
  for(var k = 0; k < 8; k++){
    let koala_x = (-Math.random()*1000)+500;
    scene.texts.push({
      text: "🐨",
      size: 100,
      z: 100,
      y: -Math.random()*90,
      x: koala_x
    });
  }
  
  scene.panels.push({ x: 1, y: 5, w: 160, l: 150, h: 60, color: "blue", z: -55 });
  scene.panels.push({ x: -40, y: 0.5, w: 70, l: 100, h: 10, color: "red", z: -80 });
  scene.panels.push({ x: -40, y: 0.5, w: 10, h: 40, color: "red", z: -120 });
  
  
  scene.texts.push({ text: "Fires", size: "60", color: "orange", z: -60, x: 140, y: 40 });
  scene.texts.push({ text: "Australia", size: "40", color: "orange",  z: -160, x: -50, y: 45});
  
  scene.texts.push({ text: "#AusFires", size: "50", color: "orange", z: -60, x: -320, y: 50 });
  
  scene.texts.push({text:"⚝", size: "20", z: -130, x:-35, y: 20})
  scene.texts.push({text:"⚝", size: "5", z: -130, x:35, y: 10})
  scene.texts.push({text:"⚝", size: "10", z: -130, x:40, y: 1})
  scene.texts.push({text:"⚝", size: "10", z: -130, x:20, y: 0.4})
  scene.texts.push({text:"⚝", size: "10", z: -130, x:30, y: 22})
  scene.texts.push({text:"⚝", size: "10", z: -130, x:10, y: 10})

  return scene;
}


/*function buildScene() {

  return{
    
    background: "#bef",
    panels: [
      { x: 0, y: 0, w: 50, h: 50, color: "white", z: -50 },
      { x: 0, y: 0, w: 50, h: 50, color: "white", z: +50 }
    ],
    
    texts: [
      { text: "welcome", color: "red" },
      { text: "happy", color: "white" },
      { text: "messages", color: "blue", z: +40, y: 10 }
    ]
    
    
  };
  
  
}*/
