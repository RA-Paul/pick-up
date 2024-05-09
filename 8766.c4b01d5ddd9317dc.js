"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8766],{1121:(D,y,m)=>{m.d(y,{p:()=>f});class f{constructor(g=0,c="",t="",v="",r="",n="",a="",u=0,h=0,O=0,C=0,e="",s="",d="",i="",o="",l=!1){this.star=!1,this.orderId=g,this.time=c,this.date=t,this.orderNumber=v,this.name=r,this.phone=n,this.item=a,this.quantity=u,this.totalPrice=h,this.deposit=O,this.balance=C,this.invoice=e,this.orderDepart=s,this.pickupDepart=d,this.note=i,this.status=o,this.star=l}}},8766:(D,y,m)=>{m.r(y),m.d(y,{SummaryPageModule:()=>C});var f=m(177),I=m(4341),g=m(4488),c=m(70),t=m(4438);class v{constructor(s="",d=0,i=0,o=0){this.item=s,this.quantity=d,this.pickedUpQuantity=i,this.unPickedUpQuantity=o}}var r=m(8674);let n=(()=>{var e;class s{constructor(i){this.orderService=i}getItems(){let i=this.orderService.getOrders(),o=[];return i.forEach(l=>{let p=new v;p.item=l.item,p.quantity=l.quantity,p.pickedUpQuantity="Completed"===l.status?l.quantity:0,p.unPickedUpQuantity="Completed"===l.status?0:l.quantity;for(let P=0;P<o.length;P++)if(o[P].item===p.item)return o[P].quantity+=p.quantity,o[P].pickedUpQuantity+=p.pickedUpQuantity,void(o[P].unPickedUpQuantity+=p.unPickedUpQuantity);o.push(p)}),o=o.sort((l,p)=>l.item<p.item?-1:l.item>p.item?1:0),o}}return(e=s).\u0275fac=function(i){return new(i||e)(t.KVO(r.Q))},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),s})();function a(e,s){if(1&e&&(t.qex(0),t.j41(1,"div",11)(2,"div"),t.EFF(3),t.k0s(),t.j41(4,"div",7)(5,"div"),t.EFF(6),t.j41(7,"span"),t.EFF(8,"(\u672a\u53d6)"),t.k0s()(),t.j41(9,"div"),t.EFF(10),t.j41(11,"span"),t.EFF(12,"(\u5df2\u53d6)"),t.k0s()()()(),t.bVm()),2&e){const d=s.$implicit;t.R7$(3),t.JRh(d.item),t.R7$(3),t.JRh(d.unPickedUpQuantity),t.R7$(4),t.JRh(d.pickedUpQuantity)}}const h=[{path:"",component:(()=>{var e;class s{constructor(i,o){this.router=i,this.itemService=o,this.itemList=[]}ngOnInit(){this.getItems()}toHomePage(){this.router.navigate(["/home"])}getItems(){let i=[];i=this.itemService.getItems(),this.itemList=i.length>0?i:[],console.log(this.itemList)}}return(e=s).\u0275fac=function(i){return new(i||e)(t.rXU(c.Ix),t.rXU(n))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-summary"]],decls:28,vars:2,consts:[[2,"display","flex","align-items","center","gap","5px"],["src","assets/img/logo.png","alt","logo","width","35"],[2,"font-weight","bolder"],["slot","end"],[3,"click"],[3,"fullscreen"],[1,"summary-card","w-90",2,"margin","auto"],[1,"summary-card-quantity"],[1,"w-90",2,"border","1px solid rgb(160, 160, 160)","margin","auto","margin-top","2em"],["id","summary-container"],[4,"ngFor","ngForOf"],[1,"summary-card","w-30"]],template:function(i,o){1&i&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title")(3,"div",0),t.nrm(4,"img",1),t.j41(5,"p",2),t.EFF(6,"\u53d6\u8ca8\u5e73\u53f0"),t.k0s()()(),t.j41(7,"ion-buttons",3)(8,"ion-button",4),t.bIt("click",function(){return o.toHomePage()}),t.EFF(9,"\u53d6\u8ca8\u6e05\u55ae"),t.k0s(),t.j41(10,"ion-button"),t.EFF(11,"\u53d6\u8ca8\u9032\u5ea6"),t.k0s()()()(),t.j41(12,"ion-content",5)(13,"div",6)(14,"div"),t.EFF(15,"\u7e3d\u6578"),t.k0s(),t.j41(16,"div",7)(17,"div"),t.EFF(18,"0"),t.j41(19,"span"),t.EFF(20,"(\u672a\u53d6)"),t.k0s()(),t.j41(21,"div"),t.EFF(22,"0"),t.j41(23,"span"),t.EFF(24,"(\u5df2\u53d6)"),t.k0s()()()(),t.nrm(25,"div",8),t.j41(26,"div",9),t.DNE(27,a,13,3,"ng-container",10),t.k0s()()),2&i&&(t.R7$(12),t.Y8G("fullscreen",!0),t.R7$(15),t.Y8G("ngForOf",o.itemList))},dependencies:[f.Sq,g.Jm,g.QW,g.W9,g.eU,g.BC,g.ai],styles:["ion-content[_ngcontent-%COMP%]{--background: rgb(224, 224, 224);--padding-top: 2em}.summary-card[_ngcontent-%COMP%]{font-size:1.5em;border-top-left-radius:.2em;border-bottom-left-radius:.2em;border-left:.5em solid rgb(190,170,60);line-height:1.4em;background-color:#fff;box-shadow:1px 2px 5px #a0a0a0;padding:.1em}.summary-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){padding-left:2em}.summary-card[_ngcontent-%COMP%]   .summary-card-quantity[_ngcontent-%COMP%]{display:flex}.summary-card[_ngcontent-%COMP%]   .summary-card-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1em;color:#8c8c8c;font-size:.6em}.summary-card[_ngcontent-%COMP%]   .summary-card-quantity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;text-align:center}.summary-card[_ngcontent-%COMP%]   .summary-card-quantity[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){border-right:1px solid rgb(80,80,80)}#summary-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-wrap:wrap;gap:10px;padding:2em 5%}.w-90[_ngcontent-%COMP%]{width:90%}.w-30[_ngcontent-%COMP%]{min-width:300px}ion-button[_ngcontent-%COMP%]{--color: rgb(190, 170, 60)}@media screen and (max-width: 768px){.w-30[_ngcontent-%COMP%]{min-width:100%}}"]}),s})()}];let O=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[c.iI.forChild(h),c.iI]}),s})(),C=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[f.MD,I.YN,g.bv,O]}),s})()},8674:(D,y,m)=>{m.d(y,{Q:()=>g});var f=m(1121),I=m(4438);let g=(()=>{var c;class t{constructor(){this.orderList=[{orderId:1,time:"10:00",date:"2024-05-01",orderNumber:"0001",name:"RA Paul",phone:"0912345678",item:"Item 1",quantity:1,totalPrice:100,deposit:100,balance:0,invoice:"INV-0001",orderDepart:"Depart 2",pickupDepart:"Depart 2",note:"Note 1",status:"Pending",star:!0},{orderId:2,time:"11:00",date:"2024-05-01",orderNumber:"0002",name:"Jane Doe",phone:"0987645321",item:"Item 2",quantity:2,totalPrice:200,deposit:100,balance:100,invoice:"INV-0002",orderDepart:"Depart 1",pickupDepart:"Depart 2",note:"Note 2",status:"Completed",star:!1},{orderId:3,time:"09:30",date:"2024-05-01",orderNumber:"0003",name:"John Smith",phone:"0912312312",item:"Item 3",quantity:1,totalPrice:150,deposit:0,balance:150,invoice:"INV-0003",orderDepart:"Depart 3",pickupDepart:"Depart 2",note:"Note 3",status:"Pending",star:!0},{orderId:4,time:"12:00",date:"2024-05-01",orderNumber:"0004",name:"Emily Johnson",phone:"0912345123",item:"Item 4",quantity:3,totalPrice:300,deposit:150,balance:150,invoice:"INV-0004",orderDepart:"Depart 2",pickupDepart:"Depart 2",note:"Note 4",status:"Pending",star:!1},{orderId:5,time:"14:30",date:"2024-05-01",orderNumber:"0005",name:"Michael Brown",phone:"0912378956",item:"Item 3",quantity:2,totalPrice:250,deposit:100,balance:150,invoice:"INV-0005",orderDepart:"Depart 1",pickupDepart:"Depart 2",note:"Note 5",status:"Completed",star:!0}]}getOrders(r="",n=!0){let a=this.orderList;return a=this.searchOrders(a,r,n),a=a.sort((u,h)=>u.date<h.date?-1:u.date<h.date?1:u.time<h.time?-1:u.time<h.time?1:0),a=a.sort((u,h)=>u.star&&!h.star?-1:!u.star&&h.star?1:0),a}searchOrders(r,n,a){return n&&(r=r.filter(u=>!!(u.name.toLowerCase().includes(n.toLowerCase())||u.phone.toLowerCase().includes(n.toLowerCase())||u.orderNumber.toLowerCase().includes(n.toLowerCase())))),a||(r=r.filter(u=>"Pending"===u.status)),r}getOrderById(r){let n=new f.p;return n=this.orderList.find(a=>a.orderId===r),n}addOrder(r){if(""==r.orderNumber)return alert("\u8acb\u512a\u5148\u8f38\u5165\u624b\u5beb\u55ae\u865f!"),!1;let n=0;return this.orderList.forEach(a=>{a.orderId>n&&(n=a.orderId)}),r.orderId=n+1,this.orderList.push(r),!0}saveOrder(r){let n=-1;n=this.getOrderIndexById(r.orderId),-1!=n&&(this.orderList[n]=r)}getOrderIndexById(r){let n=-1;for(let a=0;a<this.orderList.length;a++)if(this.orderList[a].orderId===r){n=a;break}return n}}return(c=t).\u0275fac=function(r){return new(r||c)},c.\u0275prov=I.jDH({token:c,factory:c.\u0275fac,providedIn:"root"}),t})()}}]);