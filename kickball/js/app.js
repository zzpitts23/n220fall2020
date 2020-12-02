var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var camera, scene, ball, goal, timeoutId, particalSystem;

scene = createScene();
engine.runRenderLoop(function () {
  scene.render();
});

scene.registerAfterRender(function () {
  if (ball.intersectsMesh(goal, false)) {
    goal.position.x = Math.random() * 8 - 4;

    particalSystem.manualEmitCount = 21;
    particalSystem.start();

    particalSystem.minEmitBox = ball.position;
    particalSystem.minEmitBox = ball.position;

    resetBall();
  }
});

function createScene() {
  var scene = new BABYLON.Scene(engine);

  camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -15),
    scene
  );
  var light = new BABYLON.DirectionalLight(
    "lighty",
    new BABYLON.Vector3(0 - 2, 0.2),
    scene
  );

  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  ball = BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.2 },
    scene
  );

  ball.tag = "ball";

  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 20, width: 20, subdivisions: 4 },
    scene
  );
  ground.position.y = -3;
  ground.position.z = 9;
  ground.PhysicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );

  goal = new BABYLON.MeshBuilder.CreateBox(
    "goal",
    { height: 5, width: 5 },
    scene
  );
  goal.position.z = 7;
  goal.position.x = Math.random() * 8 - 4;

  particalSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
  particalSystem.emitter = new BABYLON.Vector3(0, 0, 0);
  particalSystem.minEmitPower = 1;
  particalSystem.maxEmitPower = 3;
  particalSystem.addVelocityGradient(0, 2);

  particalSystem.particleTexture = new BABYLON.Texture(
    "images/feather.png",
    scene
  );

  return scene;
}

function resetBall() {
  ball.position = new BABYLON.Vector3();

  ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
  ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

  clearTimeout(timeoutId);
}

window.addEventListener("click", function () {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var selectedObject = pickResult.pickedMesh;

  if (selectedObject) {
    if (selectedObject.tag == "ball") {
      var surfaceNormal = pickResult.getNormal(true);
      var forceDirection = surfaceNormal.scale(-1000);

      selectedObject.physicsImpostor.applyForce(
        forceDirection,
        selectedObject.getAbsolutePosition()
      );
      timeoutId = setTimeout(resetBall, 3000);
    }
  }
});
