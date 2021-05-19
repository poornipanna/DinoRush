var bgImg, dinoImg, dinoJumpImg, dinoIdleImg, dinoDeadImg;
var obstacleImg;
var platformImg;
var groundImg;
var dino, ground, groundInv;
var obstacle;
var platform, platformInv;
var obstacleGroup; 
var platformGroup, platformInvGroup;
var reward, rewardGroup;
var rewardImg;
var enemy, enemyStaticImg, enemyDynamicImg, enemyGroup;
var life1, life2, life3, lifeImg;
var gameOver, gameOverImg;
var play, playImg;
var ins, insImg;
var insText, insTextImg;
var back, backImg;
var fire, fireImg, fireGroup;
var replay, replayImg;
var dinoRight, dinoLeft;
var title, titleImg;

var buttonClickSound, fireReleaseSound, jumpSound, rewardSound, startSound, stoneFellSound;

var score = 0;
var life = 3;

var gameState = "menu";

function preload(){

    bgImg = loadImage("images/bg/background.png");
    dinoImg = loadAnimation("images/dino/run/run1.png", "images/dino/run/run2.png", "images/dino/run/run3.png", "images/dino/run/run4.png", "images/dino/run/run5.png", "images/dino/run/run6.png", "images/dino/run/run7.png", "images/dino/run/run8.png");
    dinoJumpImg = loadAnimation("images/dino/jump/jump2.png", "images/dino/jump/jump3.png","images/dino/jump/jump4.png","images/dino/jump/jump5.png","images/dino/jump/jump6.png","images/dino/jump/jump7.png","images/dino/jump/jump8.png","images/dino/jump/jump9.png","images/dino/jump/jump10.png","images/dino/jump/jump11.png","images/dino/jump/jump12.png")
    groundImg = loadImage("images/bg/ground.png");
    enemyDynamicImg = loadAnimation("images/bg//stone.png", "images/bg/stone1.png", "images/bg/stone2.png", "images/bg/stone3.png", "images/bg/stone4.png", "images/bg/stone5.png", "images/bg/stone.png", "images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png")     
    enemyStaticImg = loadAnimation("images/bg/stone.png");
    rewardImg = loadImage("images/bg/Skeleton.png");
    dinoIdleImg = loadAnimation("images/dino/idle/idle1.png");
    obstacleImg = loadAnimation("images/bg/obstacle.png");
    platformImg = loadImage("images/bg/platform.png");
    dinoDeadImg = loadAnimation("images/dino/dead/dino1.png","images/dino/dead/dino2.png","images/dino/dead/dino3.png","images/dino/dead/dino4.png","images/dino/dead/dino5.png","images/dino/dead/dino6.png","images/dino/dead/dino7.png","images/dino/dead/dino8.png");
    lifeImg = loadImage("images/bg/life.png");
    gameOverImg = loadImage("images/gameOver.png");
    playImg = loadImage("images/play.png");
    insImg = loadImage("images/instructions.png");
    insTextImg = loadImage("images/insText.png");
    backImg = loadImage("images/back.png");
    fireImg = loadImage("images/bg/fire.png");
    replayImg = loadImage("images/replay.png");
    titleImg = loadImage("images/start.png");

    buttonClickSound = loadSound("sound/buttonClick.wav");
    fireReleaseSound = loadSound("sound/fireRelease.wav");
    jumpSound = loadSound("sound/jump.wav");
    rewardSound = loadSound("sound/reward.wav");
    startSound = loadSound("sound/start.wav");
    stoneFellSound = loadSound("sound/stoneFell.wav");
    dinoEnemySound = loadSound("sound/dinoEnemy.wav");
    dinoObstacleSound = loadSound("sound/dinoObstacle.wav");
    endSound = loadSound("sound/end.wav");
    fireEnemySound = loadSound("sound/fireEnemy.wav");
    fireHitSound = loadSound("sound/fireHit.wav");
    fireReleaseSound = loadSound("sound/fireRelease.wav");
    fireRewardSound = loadSound("sound/fireReward.wav");

}

function setup(){
    createCanvas(1200,600);

    title = createSprite(600,300,20,20);
    title.addImage(titleImg);
    title.scale = 1;

    dino = createSprite(100,520,20,20);
    dino.addAnimation("dino", dinoImg);
    dino.debug = false;
    dino.setCollider("rectangle",-100,0,420,420);
    dino.addAnimation("dinoJump", dinoJumpImg);
    dino.addAnimation("dinoIdle", dinoIdleImg);
    dino.addAnimation("dinoDead", dinoDeadImg);
    dino.scale = 0.2;

    play = createSprite(595,295,50,50);
    play.addImage(playImg);
    play.scale = 1.8;
    play.visible = false;

    gameOver = createSprite(650,300,50,50);
    gameOver.addImage(gameOverImg);

    life1 = createSprite(50,50,50,50);
    life1.addImage(lifeImg);
    life1.scale = 0.3;

    life2 = createSprite(100,50,50,50);
    life2.addImage(lifeImg);
    life2.scale = 0.3;

    life3 = createSprite(150,50,50,50);
    life3.addImage(lifeImg);
    life3.scale = 0.3;

    score = 0;

    ground = createSprite(600,590,1200,20);
    ground.addImage(groundImg);
    ground.scale = 1;

    groundInv = createSprite(600,550,1200,20);
    groundInv.visible = false;

    obstacleGroup = new Group();
    platformGroup = new Group();
    platformInvGroup = new Group();
    rewardGroup = new Group();
    enemyGroup = new Group();
    fireGroup = new Group();

    ins = createSprite(1150,50,50,50);
    ins.addImage(insImg);

    insText = createSprite(600,300,50,50);
    insText.addImage(insTextImg);
    insText.scale = 0.7;

    back = createSprite(50,50,50,50);
    back.addImage(backImg);  
    
    replay = createSprite(1150,50,50,50);
    replay.addImage(replayImg);

}

function draw(){

    background(bgImg);
    edges = createEdgeSprites();

    if(gameState === "menu"){
        gameOver.visible = false;
        dino.visible = false;
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
        ground.visible = false;
        play.visible = true;
        insText.visible = false;
        ins.visible = true;
        back.visible = false;
        replay.visible = false;
        title.visible = true;
        
        
        if(mousePressedOver(play)){
            gameState = "play";
            startSound.play();
        }

        if(mousePressedOver(ins)){
            gameState = "ins";
            buttonClickSound.play();
        }

    } else if(gameState === "ins"){

        insText.visible = true;
        ins.visible = false;
        play.visible = false;
        back.visible = true;
        replay.visible = false;
        title.visible = false;

        if(mousePressedOver(back)){
            gameState = "menu";
            buttonClickSound.play();
        }

    }else if(gameState === "play"){
        
        spawnObstacles();
        spawnEnemy();
        spawnFire();
        boostScore();
        play.visible = false;
        ground.visible = true;
        dino.visible = true;
        insText.visible = false;
        ins.visible = false;
        back.visible = false;
        replay.visible = false;
        title.visible = false;
        
        
        gameOver.visible = false;

        if(rewardGroup.collide(dino)){
            reward.destroy();
            score += 10;
            rewardSound.play();
        }

        dino.collide(groundInv);
        dino.collide(edges[0]);
        dino.collide(edges[1]);
        dino.collide(edges[2]);
        dino.collide(edges[3]);
        dino.changeAnimation("dino", dinoImg);
        dino.collide(platformInvGroup);
        enemyGroup.bounceOff(platformGroup);
        enemyGroup.bounceOff(obstacleGroup);
        enemyGroup.collide(rewardGroup);

        enemyGroup.collide(ground);

        if(fireGroup.collide(obstacleGroup)){
            fireGroup.destroyEach();
            fireHitSound.play();
        }

        if(fireGroup.collide(rewardGroup)){
            fireGroup.destroyEach();
            rewardGroup.destroyEach();
            life = life - 1;
            fireRewardSound.play();
        }

        if(fireGroup.collide(platformGroup)){
            fireGroup.destroyEach();
            fireHitSound.play();
        }

        if(fireGroup.collide(enemyGroup)){
            fireGroup.destroyEach();
            enemyGroup.destroyEach();
            score += 5;
            fireEnemySound.play();
        }
        
        ground.velocityX = -5;
        if(ground.x < 0){
        ground.x = ground.width/2;
        }

        if(dino.y >= 600){
            dino.velocityY = 10;
        }
    
        if(keyDown("up")){
            dino.velocityY = -10;
            dino.changeAnimation("dinoJump", dinoJumpImg);
            jumpSound.play();
        }
    
        if(keyDown("right")){
            dino.x = dino.x + 10;
        }
    
        if(keyDown("left")){
            dino.x = dino.x - 10;
        }
    
        if(platformGroup.isTouching(dino)){
            dino.changeAnimation("dinoIdle", dinoIdleImg);
        }
    
        dino.velocityY = dino.velocityY + 1;
    
        spawnPlatforms();
    
        for(var i = 0; i < enemyGroup.length; i++){
            if(enemyGroup.get(i).y > 500){
                console.log("123");
                enemyGroup.get(i).changeAnimation("enemyD", enemyDynamicImg);
            }
        }
    
        textSize(20);
        fill("white");
        text("Score: " + score, 1050, 50);
        //text("Y" + mouseY, 50,50);
        //text("This is a rough design, will be updated continously", 200, 50);

        console.log("play");

        groundInv.visible = false;

        if(obstacleGroup.collide(dino)){
            life = life - 1;
            obstacleGroup.destroyEach();
            dinoObstacleSound.play();
        }

        if(enemyGroup.collide(dino)){
            life = life - 1;
            enemyGroup.destroyEach();
            dinoEnemySound.play();
        }

        if(life === 3){
            life1.visible = true;
            life2.visible = true;
            life3.visible = true;
        }

        if(life === 2){
            life1.visible = true;
            life2.visible = true;
            life3.visible = false;
        }

        if(life === 1){
            life1.visible = true;
            life2.visible = false;
            life3.visible = false;
        }

        if(life === 0){
            life1.visible = false;
            life2.visible = false;
            life3.visible = false;
            gameState = "end";
            endSound.play();
        }

        for(var i = 0; i < enemyGroup.length; i++){
            enemyGroup.get(i).velocityY = 5;
        }

        
    } else if(gameState === "end"){
        console.log("end");
        groundInv.velocityX = 0;
        ground.velocityX = 0;
        dino.changeAnimation("dinoDead", dinoDeadImg);
        dino.animation.looping = false;
        obstacleGroup.destroyEach();
        enemyGroup.destroyEach();
        rewardGroup.destroyEach();
        platformGroup.destroyEach();
        title.visible = false;
        score = 0;
        dino.collide(groundInv);
        dino.velocityX = 0;
        gameOver.visible = true;
        fireGroup.destroyEach();
        replay.visible = true;
        dino.velocityY = 10;

        
        
        if(mousePressedOver(replay)){
            gameState = "play";
            dino.x = 50;
            score = 0;
            life = 3;
            startSound.play();
        }
    }

    drawSprites();

}

function spawnObstacles(){

    if(frameCount % 150 === 0){
        obstacle = createSprite(1200,495,20,20);
        obstacle.addAnimation("obstacles", obstacleImg);
        obstacle.scale = 1;

        obstacle.velocityX = -5;

        obstacleGroup.add(obstacle);
    }

}

function spawnPlatforms(){

    if(frameCount % 250 === 0){
        platform = createSprite(1100, random(300,400), 20,20);
        platformInv = createSprite(platform.x, platform.y, 180,20);
        platformInv.velocityX = -2;
        platformInv.visible = false;
        platform.addImage(platformImg);
        platform.scale = 0.5;

        if(frameCount % 250 === 0){
            reward = createSprite(platform.x, platform.y - 40,20,20);
            reward.addImage(rewardImg);
            reward.scale = 0.7;
            reward.velocityX = -2;

            rewardGroup.add(reward);
        }

        platform.velocityX = -2;

        platformGroup.add(platform);
        platformInvGroup.add(platformInv);
    }

}

function spawnEnemy(){

    if(frameCount % 100 === 0){

        enemy = createSprite(random(0,1200),0,20,20);
        enemy.addAnimation("enemyS", enemyStaticImg);
        enemy.addAnimation("enemyD", enemyDynamicImg);
        enemy.velocityY = 5;
        enemy.scale = 0.25;
        enemy.debug = false;
        enemy.setCollider("rectangle", 0,0,200,200);
        enemy.lifetime = 300;
        
        enemyGroup.add(enemy);

    }

}

function spawnFire(){

    if(keyWentDown("space")){
        fire = createSprite(dino.x, dino.y, 20, 20);
        fire.addAnimation("fire", fireImg);
        fire.scale = 0.3;
        fire.visible = false;
        fire.lifetime = 150;
        fire.velocityX = 10;
        fire.visible = true;

        fireGroup.add(fire);
    }

}

function boostScore(){

    if(Math.round(score % 50) === 0){
        ground.velocityX = ground.velocityX * 1.01;
        for(var i = 0; i < platformGroup.length; i++){
            platformGroup.get(i).velocityX = platformGroup.get(i).velocityX * 1.01;
        }
        for(var i = 0; i < platformInvGroup.length; i++){
            platformInvGroup.get(i).velocityX = platformInvGroup.get(i).velocityX * 1.01;
        }
        for(var i = 0; i < enemyGroup.length; i++){
            enemyGroup.get(i).velocityY = enemyGroup.get(i).velocityY * 1.01;
        }
        for(var i = 0; i < rewardGroup.length; i++){
            rewardGroup.get(i).velocityX = rewardGroup.get(i).velocityX * 1.01;
        }
        for(var i = 0; i < obstacleGroup.length; i++){
            obstacleGroup.get(i).velocityX = obstacleGroup.get(i).velocityX * 1.01;
        }
    }

}
