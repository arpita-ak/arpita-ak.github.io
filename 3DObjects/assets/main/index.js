System.register("chunks:///_virtual/main",["./Test.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Test.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,i,s,a,r,c,l,h,u,d,y,T;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){s=e.cclegacy,a=e._decorator,r=e.Camera,c=e.input,l=e.Input,h=e.PhysicsSystem,u=e.tween,d=e.Vec3,y=e.geometry,T=e.Component}],execute:function(){var p,f,_,v,E;s._RF.push({},"dbf18WevphIjr4rgmGPD1kF","Test",void 0);var m=a.ccclass,g=a.property;e("Example",(p=m("Example"),f=g(r),p((E=t((v=function(e){function t(){for(var t,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return t=e.call.apply(e,[this].concat(s))||this,n(t,"cameraCom",E,i(t)),t._selectedNode=null,t._ray=new y.Ray,t}o(t,e);var s=t.prototype;return s.onEnable=function(){c.on(l.EventType.TOUCH_START,this.onTouchStart,this),c.on(l.EventType.TOUCH_MOVE,this.onTouchMove,this),c.on(l.EventType.TOUCH_END,this.onTouchEnd,this),c.on(l.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onDisable=function(){c.off(l.EventType.TOUCH_START,this.onTouchStart,this),c.off(l.EventType.TOUCH_MOVE,this.onTouchMove,this),c.off(l.EventType.TOUCH_END,this.onTouchEnd,this),c.off(l.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},s.onTouchStart=function(e){var t=e.touch;if(this.cameraCom.screenPointToRay(t.getLocationX(),t.getLocationY(),this._ray),h.instance.raycast(this._ray)&&null==this._selectedNode)for(var o=h.instance.raycastResults,n=0;n<o.length;n++){var i=o[n];if("Plane"!=i.collider.node.name){console.log("raycast hit the target node !"),this._selectedNode=i.collider.node,u(this._selectedNode).by(.1,{scale:new d(1,1,1)}).start();break}}else console.log("raycast does not hit the target node !")},s.onTouchMove=function(e){var t=e.touch;if(this.cameraCom.screenPointToRay(t.getLocationX(),t.getLocationY(),this._ray),h.instance.raycast(this._ray)&&null!=this._selectedNode)for(var o=h.instance.raycastResults,n=0;n<o.length;n++){var i=o[n];if(i.collider.node.name==this._selectedNode.name){this._selectedNode.setWorldPosition(new d(i.hitPoint.x,6,i.hitPoint.z));break}}else console.log("raycast does not hit the target node !")},s.onTouchEnd=function(e){u(this._selectedNode).by(.1,{scale:new d(-1,-1,-1)}).start(),this._selectedNode=null},t}(T)).prototype,"cameraCom",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=v))||_));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});