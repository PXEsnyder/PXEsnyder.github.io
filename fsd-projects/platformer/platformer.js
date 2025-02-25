$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 150, 20, "black");
    createPlatform(250, 100, 10, 3, "black");
    createPlatform(0, 500, 100, 5, "black");
    createPlatform(390, 500, 20, 1, "black");
    createPlatform(550, 650, 3, 1, "black");
    createPlatform(820, 696, 80, 1, "black");
    createPlatform(1150, 696, 80, 1, "black");




    // TODO 3 - Create Collectables
    createCollectable("cold", 233, 50);
    createCollectable("icedancer", 600, 0, 0.012, 0);
    createCollectable("eversince", 1150, 650);


    
    // TODO 4 - Create Cannons
    createCannon("right", 200, 50);
    createCannon("left", 650, 0);
    createCannon("bottom", 220, 500);
    createCannon("bottom", 1050, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
