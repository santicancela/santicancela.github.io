(this["webpackJsonpphaser-test"]=this["webpackJsonpphaser-test"]||[]).push([[0],{1478:function(e,t,a){},1479:function(e,t,a){"use strict";a.r(t);var s=a(72),i=a.n(s),n=a(553),r=a.n(n),o=a(61),d=a.n(o);a(1476);var l,c,h,u,p,m,y=0,g=!1;function f(e,t){this.physics.pause(),e.setTint(16711680),e.anims.play("turn"),g=!0}function w(e,t){if(t.disableBody(!0,!0),y+=10,p.setText(y+" dolares salvados del peronismo"),0===u.countActive(!0)){u.children.iterate((function(e){e.enableBody(!0,e.x,0,!0,!0)}));var a=e.x<400?d.a.Math.Between(400,800):d.a.Math.Between(0,400),s=m.create(a,16,"bomb");s.scaleX=.3,s.scaleY=.3,s.setBounce(1),s.setCollideWorldBounds(!0),s.setVelocity(d.a.Math.Between(-200,200),20),s.allowGravity=!1}}var v={type:d.a.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("sky","assets/sky.png"),this.load.image("ground","assets/platform.png"),this.load.image("star","assets/star.png"),this.load.image("bomb","assets/bomb.png"),this.load.image("dollar","assets/dollar.png"),this.load.spritesheet("dude","assets/dude.png",{frameWidth:32,frameHeight:48})},create:function(){this.add.image(400,300,"sky"),p=this.add.text(16,16,"0",{fontSize:"32px",fill:"#000"}),m=this.physics.add.group(),(l=this.physics.add.staticGroup()).create(400,568,"ground").setScale(2).refreshBody(),l.create(600,400,"ground"),l.create(50,250,"ground"),l.create(750,220,"ground"),(h=this.physics.add.sprite(100,450,"dude")).setBounce(.2),h.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"dude",frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),frameRate:10,repeat:-1}),c=this.input.keyboard.createCursorKeys(),(u=this.physics.add.group({key:"dollar",repeat:11,setXY:{x:12,y:0,stepX:70}})).children.iterate((function(e){e.setBounceY(d.a.Math.FloatBetween(.4,.8)),e.scaleX=.1,e.scaleY=.1})),this.physics.add.collider(h,l),this.physics.add.collider(u,l),this.physics.add.overlap(h,u,w,null,this),this.physics.add.collider(h,m,f,null,this)},update:function(){g||(c.left.isDown?(h.setVelocityX(-160),h.anims.play("left",!0)):c.right.isDown?(h.setVelocityX(160),h.anims.play("right",!0)):(h.setVelocityX(0),h.anims.play("turn")),c.up.isDown&&h.body.touching.down&&h.setVelocityY(-330))}}};a(1478);new d.a.Game(v);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"title"},"Tontona and the riders of the stolen dollar"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},554:function(e,t,a){e.exports=a(1479)}},[[554,1,2]]]);
//# sourceMappingURL=main.4f2f2115.chunk.js.map