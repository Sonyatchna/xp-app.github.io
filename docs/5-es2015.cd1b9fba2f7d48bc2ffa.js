(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"o/Pl":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core=__webpack_require__("8Y7J");class NewsByIdModule{}var router_ngfactory=__webpack_require__("pMnS");class NewsByIdComponent{constructor(newsStorageService,route){this.newsStorageService=newsStorageService,this.route=route}ngOnInit(){this.routeSub=this.route.params.subscribe(params=>{this.getNewsById(Number(params.id))})}ngOnDestroy(){this.routeSub.unsubscribe()}getNewsById(id){this.news=this.newsStorageService.getNewsInfoById(id)}}var news_storage_service=__webpack_require__("z9sh"),router=__webpack_require__("iInd"),RenderType_NewsByIdComponent=core.ob({encapsulation:0,styles:[[".first-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;height:80px;background:#587599}.first-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:#fff}.news-item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;box-sizing:border-box;-webkit-box-pack:justify;justify-content:space-between;width:65%;height:340px;margin:20px auto;padding-top:15px;border:1px solid #8eaacc}.news-item[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;box-sizing:border-box;height:210px;width:210px;margin:0 15px}.news-item[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%]   .news-image[_ngcontent-%COMP%]{height:210px;width:210px;border:1px solid #8eaacc;-o-object-fit:cover;object-fit:cover}.news-item[_ngcontent-%COMP%]   .info-div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between;height:310px;width:100%;margin:0 15px}.news-item[_ngcontent-%COMP%]   .info-div[_ngcontent-%COMP%]   .info-div-heading[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:5px;width:100%;font-size:x-large;font-weight:700;color:#587599}.news-item[_ngcontent-%COMP%]   .info-div[_ngcontent-%COMP%]   .info-div-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:5px;width:100%;font-size:16px;color:#587599}.news-item[_ngcontent-%COMP%]   .info-div[_ngcontent-%COMP%]   .info-div-author[_ngcontent-%COMP%], .news-item[_ngcontent-%COMP%]   .info-div[_ngcontent-%COMP%]   .info-div-date[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin:5px;font-size:16px;color:#587599}"]],data:{}});function View_NewsByIdComponent_0(_l){return core.Ib(0,[(_l()(),core.qb(0,0,null,null,2,"div",[["class","first-header"]],null,null,null,null,null)),(_l()(),core.qb(1,0,null,null,1,"span",[],null,null,null,null,null)),(_l()(),core.Gb(-1,null,["My news"])),(_l()(),core.qb(3,0,null,null,15,"div",[["class","news-item"]],null,null,null,null,null)),(_l()(),core.qb(4,0,null,null,1,"div",[["class","image-div"]],null,null,null,null,null)),(_l()(),core.qb(5,0,null,null,0,"img",[["class","news-image"]],[[8,"src",4]],null,null,null,null)),(_l()(),core.qb(6,0,null,null,12,"div",[["class","info-div"]],null,null,null,null,null)),(_l()(),core.qb(7,0,null,null,2,"div",[["class","info-div-heading"]],null,null,null,null,null)),(_l()(),core.qb(8,0,null,null,1,"span",[],null,null,null,null,null)),(_l()(),core.Gb(9,null,[" "," "])),(_l()(),core.qb(10,0,null,null,2,"div",[["class","info-div-content"]],null,null,null,null,null)),(_l()(),core.qb(11,0,null,null,1,"span",[],null,null,null,null,null)),(_l()(),core.Gb(12,null,[" "," "])),(_l()(),core.qb(13,0,null,null,2,"div",[["class","info-div-date"]],null,null,null,null,null)),(_l()(),core.qb(14,0,null,null,1,"span",[],null,null,null,null,null)),(_l()(),core.Gb(15,null,[" Date: "," "])),(_l()(),core.qb(16,0,null,null,2,"div",[["class","info-div-author"]],null,null,null,null,null)),(_l()(),core.qb(17,0,null,null,1,"span",[],null,null,null,null,null)),(_l()(),core.Gb(18,null,[" Author: "," "]))],null,(function(_ck,_v){var _co=_v.component;_ck(_v,5,0,core.sb(1,"",null==_co.news?null:_co.news.imageUrl,"")),_ck(_v,9,0,null==_co.news?null:_co.news.heading),_ck(_v,12,0,null==_co.news?null:_co.news.content),_ck(_v,15,0,null==_co.news?null:_co.news.date),_ck(_v,18,0,null==_co.news?null:_co.news.author)}))}function View_NewsByIdComponent_Host_0(_l){return core.Ib(0,[(_l()(),core.qb(0,0,null,null,1,"app-news-by-id",[],null,null,null,View_NewsByIdComponent_0,RenderType_NewsByIdComponent)),core.pb(1,245760,null,0,NewsByIdComponent,[news_storage_service.a,router.a],null,null)],(function(_ck,_v){_ck(_v,1,0)}),null)}var NewsByIdComponentNgFactory=core.mb("app-news-by-id",NewsByIdComponent,View_NewsByIdComponent_Host_0,{},{},[]),common=__webpack_require__("SVse");class NewsByIdRoutingModule{}__webpack_require__.d(__webpack_exports__,"NewsByIdModuleNgFactory",(function(){return NewsByIdModuleNgFactory}));var NewsByIdModuleNgFactory=core.nb(NewsByIdModule,[],(function(_l){return core.xb([core.yb(512,core.j,core.ab,[[8,[router_ngfactory.a,NewsByIdComponentNgFactory]],[3,core.j],core.w]),core.yb(4608,common.m,common.l,[core.t,[2,common.y]]),core.yb(1073742336,common.c,common.c,[]),core.yb(1073742336,router.m,router.m,[[2,router.r],[2,router.k]]),core.yb(1073742336,NewsByIdRoutingModule,NewsByIdRoutingModule,[]),core.yb(1073742336,NewsByIdModule,NewsByIdModule,[]),core.yb(1024,router.i,(function(){return[[{path:"",component:NewsByIdComponent}]]}),[])])}))}}]);