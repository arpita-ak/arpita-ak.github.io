window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Start: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87f0eMkS9BKuIyjhu2mNCdw", "Start");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.loadmyScene = function() {
        cc.director.loadScene("game");
        cc.loader.load("db://assets/Scene/a.fire", function(sceneAsset) {
          cc.director.runScene(sceneAsset);
        });
      };
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  fire: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef2daxmwHxASaKIUnF1rSqg", "fire");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.speed = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      };
      NewClass.prototype.onCollisionEnter = function(other, self) {
        this.node.destroy();
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.node.y += dt * this.speed * .8;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "speed", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d814diVTVIG5GFayptbfNM", "game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.roundPrefab = null;
        _this.background = null;
        _this.player = null;
        _this.congratsprefab = null;
        _this.congratsAudio = null;
        _this.progress = null;
        _this.shots = 0;
        _this.progress_frac = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.spawnNewRound();
        this.shots = 0;
        this.progress.fillRange = 0;
        this.node.on("touchstart", function(event) {
          var a = event.touch.getLocationX();
          a <= 480 && (this.leftrotate = true);
          a > 480 && (this.rightrotate = true);
        }, this);
        this.node.on("touchend", function(event) {
          this.leftrotate = false;
          this.rightrotate = false;
        }, this);
      };
      NewClass.prototype.spawnNewRound = function() {
        var n = Math.ceil(5 * Math.random() + 4);
        this.num_rounds = n;
        for (var i = 0; i < n; i++) {
          var newRound = cc.instantiate(this.roundPrefab);
          this.node.addChild(newRound);
          newRound.setPosition(this.getNewRoundPosition());
          newRound.getComponent("round").game = this;
        }
      };
      NewClass.prototype.gainScore = function() {
        this.shots += 1;
        this.progress_frac = this.shots / this.num_rounds;
        this.progress.fillRange = this.progress_frac;
        this.shots == this.num_rounds && this.congrats();
      };
      NewClass.prototype.congrats = function() {
        var newlabel = cc.instantiate(this.congratsprefab);
        this.node.addChild(newlabel);
        this.node.getChildByName("player").destroy();
        this.node.getChildByName("button").destroy();
        cc.audioEngine.playEffect(this.congratsAudio, false);
        this.shots = 0;
      };
      NewClass.prototype.getNewRoundPosition = function() {
        var randX = 0;
        var randY = Math.random() * (this.node.height / 2 - 20);
        var maxX = this.background.width / 2;
        randX = 2 * (Math.random() - .5) * (maxX - 20);
        return cc.v2(randX, randY);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        true == this.leftrotate ? this.player.angle += 10 * dt : true == this.rightrotate && (this.player.angle -= 10 * dt);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "roundPrefab", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "background", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "player", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "congratsprefab", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "congratsAudio", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "progress", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c346YL09pAnpCQR9s+RxaO", "player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.shotspawn = null;
        _this.fireprefab = null;
        _this.button = null;
        _this.firespawn = null;
        _this.laserAudio = null;
        _this.rotateSpeed = 0;
        _this.accLeft = false;
        _this.accRight = false;
        return _this;
      }
      NewClass.prototype.onKeyDown = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
         case cc.macro.KEY.left:
          this.accLeft = true;
          break;

         case cc.macro.KEY.d:
         case cc.macro.KEY.right:
          this.accRight = true;
          break;

         case cc.macro.KEY.enter:
          this.bulletfire();
        }
      };
      NewClass.prototype.onKeyUp = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
         case cc.macro.KEY.left:
          this.accLeft = false;
          break;

         case cc.macro.KEY.d:
         case cc.macro.KEY.right:
          this.accRight = false;
        }
      };
      NewClass.prototype.bulletfire = function() {
        var newfire = cc.instantiate(this.fireprefab);
        this.firespawn.addChild(newfire);
        newfire.setPosition(0, 0);
        newfire.angle = 0;
        cc.audioEngine.playEffect(this.laserAudio, false);
      };
      NewClass.prototype.onLoad = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      NewClass.prototype.onDestroy = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.accLeft ? this.node.angle += this.rotateSpeed * dt : this.accRight && (this.node.angle -= this.rotateSpeed * dt);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "shotspawn", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "fireprefab", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "button", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "firespawn", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "laserAudio", void 0);
      __decorate([ property ], NewClass.prototype, "rotateSpeed", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  round: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09512Pzua1BXJpI1aDzdKEe", "round");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.pickRadius = 0;
        _this.GameOverAudio = null;
        _this.GameOverprefab = null;
        _this.game = null;
        _this.Borderbelow = -270;
        _this.flag = false;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.flag = false;
      };
      NewClass.prototype.onCollisionEnter = function(other) {
        this.node.destroy();
        this.game.gainScore();
      };
      NewClass.prototype.GameOver = function() {
        if (this.node.parent.getChildByName("player")) {
          this.node.parent.getChildByName("player").destroy();
          this.node.parent.getChildByName("button").destroy();
          var gameoverlabel = cc.instantiate(this.GameOverprefab);
          this.node.parent.addChild(gameoverlabel);
        }
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        if (this.node.y < this.Borderbelow && false == this.flag) {
          this.flag = true;
          this.GameOver();
        } else false == this.flag && (this.node.y -= 10 * dt);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "pickRadius", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "GameOverAudio", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "GameOverprefab", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Start", "fire", "game", "player", "round" ]);
//# sourceMappingURL=index.js.map
