import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c,b as t,d as e,e as n,a as r}from"./app-06635a3b.js";const i={},u=r('<h1 id="契约-contract" tabindex="-1"><a class="header-anchor" href="#契约-contract" aria-hidden="true">#</a> 契约（Contract）</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#contracts-vs-facades">Contract 对比 Facade</a></li></ul></li><li><a href="#when-to-use-contracts">何时使用 Contract</a></li><li><a href="#how-to-use-contracts">如何使用 Contract</a></li><li><a href="#contract-reference">Contract 参考</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 的「契约（Contract）」是一组接口，它们定义由框架提供的核心服务。例如，<code>illuste\\Contracts\\Queue\\Queue</code> Contract 定义了队列所需的方法，而 <code>illuste\\Contracts\\Mail\\Mailer</code> Contract 定义了发送邮件所需的方法。</p>',5),h={href:"https://symfony.com/doc/6.0/mailer.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/illuminate/contracts",target:"_blank",rel:"noopener noreferrer"},p=r('<p><a name="contracts-vs-facades"></a></p><h3 id="contract-对比-facade" tabindex="-1"><a class="header-anchor" href="#contract-对比-facade" aria-hidden="true">#</a> Contract 对比 Facade</h3><p>Laravel 的 <a href="./facades">Facade</a> 和辅助函数提供了一种利用 Laravel 服务的简单方法，无需类型提示并可以从服务容器中解析 Contract。在大多数情况下，每个 Facade 都有一个等效的 Contract。</p><p>和 Facade（不需要在构造函数中引入）不同，Contract 允许你为类定义显式依赖关系。一些开发者更喜欢以这种方式显式定义其依赖项，所以更喜欢使用 Contract，而其他开发者则享受 Facade 带来的便利。<strong>通常，大多数应用都可以在开发过程中使用 Facade。</strong></p><p><a name="when-to-use-contracts"></a></p><h2 id="何时使用-contract" tabindex="-1"><a class="header-anchor" href="#何时使用-contract" aria-hidden="true">#</a> 何时使用 Contract</h2><p>使用 Contract 或 Facades 取决于个人喜好和开发团队的喜好。Contract 和 Facade 均可用于创建功能强大且经过良好测试的 Laravel 应用。Contract 和 Facade 并不是一道单选题，你可以在同一个应用内同时使用 Contract 和 Facade。只要聚焦在类的职责应该单一上，你会发现 Contract 和 Facade 的实际差异其实很小。</p><p>通常情况下，大部分使用 Facade 的应用都不会在开发中遇到问题。但如果你在建立一个可以由多个 PHP 框架使用的扩展包，你可能会希望使用 <code>illuminate/contracts</code> 扩展包来定义该包和 Laravel 集成，而不需要引入完整的 Laravel 实现（不需要在 <code>composer.json</code> 中具体显式引入 Laravel 框架来实现）。</p><p><a name="how-to-use-contracts"></a></p><h2 id="如何使用-contract" tabindex="-1"><a class="header-anchor" href="#如何使用-contract" aria-hidden="true">#</a> 如何使用 Contract</h2><p>那么，如何实现契约呢？它其实很简单。</p>',11),_={href:"https://learnku.com./container",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"例如，看看下面的这个事件监听器：",-1),m=t("pre",null,[t("code",null,`<?php

namespace App\\Listeners;

use App\\Events\\OrderWasPlaced;
use App\\Models\\User;
use Illuminate\\Contracts\\Redis\\Factory;

class CacheOrderInformation
{
    /**
     * 创建一个新的事件监听器实例
     */
    public function __construct(
        protected Factory $redis,
    ) {}

    /**
     * 处理该事件。
     */
    public function handle(OrderWasPlaced $event): void
    {
        // ...
    }
}
`)],-1),g=t("p",null,[e("当解析事件监听器时，服务容器将读取构造函数上的类型提示，并注入适当的值。 要了解更多有关在服务容器中注册内容的信息，请查看 "),t("a",{href:"./container"},"其文档"),e("。")],-1),f=t("p",null,[t("a",{name:"contract-reference"})],-1),C=t("h2",{id:"contract-参考",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#contract-参考","aria-hidden":"true"},"#"),e(" Contract 参考")],-1),v=t("p",null,"下表提供了所有 Laravel Contract 及对应的 Facade 的快速参考：",-1),k=t("thead",null,[t("tr",null,[t("th",null,"Contract"),t("th",null,"对应的 Facade")])],-1),x={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/Access/Authorizable.php",target:"_blank",rel:"noopener noreferrer"},I=t("td",null," ",-1),y={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/Access/Gate.php",target:"_blank",rel:"noopener noreferrer"},F=t("td",null,[t("code",null,"Gate")],-1),A={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/Authenticatable.php",target:"_blank",rel:"noopener noreferrer"},R=t("td",null," ",-1),Q={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/CanResetPassword.php",target:"_blank",rel:"noopener noreferrer"},S=t("td",null," ",-1),B={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/Factory.php",target:"_blank",rel:"noopener noreferrer"},P=t("td",null,[t("code",null,"Auth")],-1),V={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/Guard.php",target:"_blank",rel:"noopener noreferrer"},w=t("td",null,[t("code",null,"Auth::guard()")],-1),M={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/PasswordBroker.php",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,[t("code",null,"Password::broker()")],-1),E={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/PasswordBrokerFactory.php",target:"_blank",rel:"noopener noreferrer"},H=t("td",null,[t("code",null,"Password")],-1),D={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/StatefulGuard.php",target:"_blank",rel:"noopener noreferrer"},N=t("td",null," ",-1),G={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/SupportsBasicAuth.php",target:"_blank",rel:"noopener noreferrer"},T=t("td",null," ",-1),U={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Auth/UserProvider.php",target:"_blank",rel:"noopener noreferrer"},J=t("td",null," ",-1),K={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Bus/Dispatcher.php",target:"_blank",rel:"noopener noreferrer"},W=t("td",null,[t("code",null,"Bus")],-1),O={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Bus/QueueingDispatcher.php",target:"_blank",rel:"noopener noreferrer"},q=t("td",null,[t("code",null,"Bus::dispatchToQueue()")],-1),z={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Broadcasting/Factory.php",target:"_blank",rel:"noopener noreferrer"},$=t("td",null,[t("code",null,"Broadcast")],-1),j={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Broadcasting/Broadcaster.php",target:"_blank",rel:"noopener noreferrer"},X=t("td",null,[t("code",null,"Broadcast::connection()")],-1),Y={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Broadcasting/ShouldBroadcast.php",target:"_blank",rel:"noopener noreferrer"},Z=t("td",null," ",-1),tt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Broadcasting/ShouldBroadcastNow.php",target:"_blank",rel:"noopener noreferrer"},et=t("td",null," ",-1),lt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cache/Factory.php",target:"_blank",rel:"noopener noreferrer"},nt=t("td",null,[t("code",null,"Cache")],-1),rt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cache/Lock.php",target:"_blank",rel:"noopener noreferrer"},ot=t("td",null," ",-1),at={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cache/LockProvider.php",target:"_blank",rel:"noopener noreferrer"},st=t("td",null," ",-1),ct={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cache/Repository.php",target:"_blank",rel:"noopener noreferrer"},it=t("td",null,[t("code",null,"Cache::driver()")],-1),ut={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cache/Store.php",target:"_blank",rel:"noopener noreferrer"},ht=t("td",null," ",-1),dt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Config/Repository.php",target:"_blank",rel:"noopener noreferrer"},pt=t("td",null,[t("code",null,"Config")],-1),_t={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Console/Application.php",target:"_blank",rel:"noopener noreferrer"},bt=t("td",null," ",-1),mt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Console/Kernel.php",target:"_blank",rel:"noopener noreferrer"},gt=t("td",null,[t("code",null,"Artisan")],-1),ft={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Container/Container.php",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",null,[t("code",null,"App")],-1),vt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cookie/Factory.php",target:"_blank",rel:"noopener noreferrer"},kt=t("td",null,[t("code",null,"Cookie")],-1),xt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Cookie/QueueingFactory.php",target:"_blank",rel:"noopener noreferrer"},It=t("td",null,[t("code",null,"Cookie::queue()")],-1),yt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Database/ModelIdentifier.php",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",null," ",-1),At={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Debug/ExceptionHandler.php",target:"_blank",rel:"noopener noreferrer"},Rt=t("td",null," ",-1),Qt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Encryption/Encrypter.php",target:"_blank",rel:"noopener noreferrer"},St=t("td",null,[t("code",null,"Crypt")],-1),Bt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Events/Dispatcher.php",target:"_blank",rel:"noopener noreferrer"},Pt=t("td",null,[t("code",null,"Event")],-1),Vt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Filesystem/Cloud.php",target:"_blank",rel:"noopener noreferrer"},wt=t("td",null,[t("code",null,"Storage::cloud()")],-1),Mt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Filesystem/Factory.php",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",null,[t("code",null,"Storage")],-1),Et={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Filesystem/Filesystem.php",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",null,[t("code",null,"Storage::disk()")],-1),Dt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Foundation/Application.php",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",null,[t("code",null,"App")],-1),Gt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Hashing/Hasher.php",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",null,[t("code",null,"Hash")],-1),Ut={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Http/Kernel.php",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",null," ",-1),Kt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Mail/MailQueue.php",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",null,[t("code",null,"Mail::queue()")],-1),Ot={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Mail/Mailable.php",target:"_blank",rel:"noopener noreferrer"},qt=t("td",null," ",-1),zt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Mail/Mailer.php",target:"_blank",rel:"noopener noreferrer"},$t=t("td",null,[t("code",null,"Mail")],-1),jt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Notifications/Dispatcher.php",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",null,[t("code",null,"Notification")],-1),Yt={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Notifications/Factory.php",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",null,[t("code",null,"Notification")],-1),te={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Pagination/LengthAwarePaginator.php",target:"_blank",rel:"noopener noreferrer"},ee=t("td",null," ",-1),le={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Pagination/Paginator.php",target:"_blank",rel:"noopener noreferrer"},ne=t("td",null," ",-1),re={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Pipeline/Hub.php",target:"_blank",rel:"noopener noreferrer"},oe=t("td",null," ",-1),ae={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Pipeline/Pipeline.php",target:"_blank",rel:"noopener noreferrer"},se=t("td",null," ",-1),ce={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/EntityResolver.php",target:"_blank",rel:"noopener noreferrer"},ie=t("td",null," ",-1),ue={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/Factory.php",target:"_blank",rel:"noopener noreferrer"},he=t("td",null,[t("code",null,"Queue")],-1),de={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/Job.php",target:"_blank",rel:"noopener noreferrer"},pe=t("td",null," ",-1),_e={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/Monitor.php",target:"_blank",rel:"noopener noreferrer"},be=t("td",null,[t("code",null,"Queue")],-1),me={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/Queue.php",target:"_blank",rel:"noopener noreferrer"},ge=t("td",null,[t("code",null,"Queue::connection()")],-1),fe={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/QueueableCollection.php",target:"_blank",rel:"noopener noreferrer"},Ce=t("td",null," ",-1),ve={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/QueueableEntity.php",target:"_blank",rel:"noopener noreferrer"},ke=t("td",null," ",-1),xe={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Queue/ShouldQueue.php",target:"_blank",rel:"noopener noreferrer"},Ie=t("td",null," ",-1),ye={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Redis/Factory.php",target:"_blank",rel:"noopener noreferrer"},Fe=t("td",null,[t("code",null,"Redis")],-1),Ae={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Routing/BindingRegistrar.php",target:"_blank",rel:"noopener noreferrer"},Re=t("td",null,[t("code",null,"Route")],-1),Qe={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Routing/Registrar.php",target:"_blank",rel:"noopener noreferrer"},Se=t("td",null,[t("code",null,"Route")],-1),Be={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Routing/ResponseFactory.php",target:"_blank",rel:"noopener noreferrer"},Pe=t("td",null,[t("code",null,"Response")],-1),Ve={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Routing/UrlGenerator.php",target:"_blank",rel:"noopener noreferrer"},we=t("td",null,[t("code",null,"URL")],-1),Me={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Routing/UrlRoutable.php",target:"_blank",rel:"noopener noreferrer"},Le=t("td",null," ",-1),Ee={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Session/Session.php",target:"_blank",rel:"noopener noreferrer"},He=t("td",null,[t("code",null,"Session::driver()")],-1),De={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/Arrayable.php",target:"_blank",rel:"noopener noreferrer"},Ne=t("td",null," ",-1),Ge={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/Htmlable.php",target:"_blank",rel:"noopener noreferrer"},Te=t("td",null," ",-1),Ue={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/Jsonable.php",target:"_blank",rel:"noopener noreferrer"},Je=t("td",null," ",-1),Ke={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/MessageBag.php",target:"_blank",rel:"noopener noreferrer"},We=t("td",null," ",-1),Oe={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/MessageProvider.php",target:"_blank",rel:"noopener noreferrer"},qe=t("td",null," ",-1),ze={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/Renderable.php",target:"_blank",rel:"noopener noreferrer"},$e=t("td",null," ",-1),je={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Support/Responsable.php",target:"_blank",rel:"noopener noreferrer"},Xe=t("td",null," ",-1),Ye={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Translation/Loader.php",target:"_blank",rel:"noopener noreferrer"},Ze=t("td",null," ",-1),tl={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Translation/Translator.php",target:"_blank",rel:"noopener noreferrer"},el=t("td",null,[t("code",null,"Lang")],-1),ll={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Validation/Factory.php",target:"_blank",rel:"noopener noreferrer"},nl=t("td",null,[t("code",null,"Validator")],-1),rl={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Validation/ImplicitRule.php",target:"_blank",rel:"noopener noreferrer"},ol=t("td",null," ",-1),al={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Validation/Rule.php",target:"_blank",rel:"noopener noreferrer"},sl=t("td",null," ",-1),cl={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Validation/ValidatesWhenResolved.php",target:"_blank",rel:"noopener noreferrer"},il=t("td",null," ",-1),ul={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/Validation/Validator.php",target:"_blank",rel:"noopener noreferrer"},hl=t("td",null,[t("code",null,"Validator::make()")],-1),dl={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/View/Engine.php",target:"_blank",rel:"noopener noreferrer"},pl=t("td",null," ",-1),_l={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/View/Factory.php",target:"_blank",rel:"noopener noreferrer"},bl=t("td",null,[t("code",null,"View")],-1),ml={href:"https://github.com/illuminate/contracts/blob/laravel/10.x/View/View.php",target:"_blank",rel:"noopener noreferrer"},gl=t("td",null,[t("code",null,"View::make()")],-1);function fl(Cl,vl){const l=a("ExternalLinkIcon");return s(),c("div",null,[u,t("p",null,[e("每个契约都有由框架提供的相应实现。例如，Laravel 提供了一个支持各种驱动的队列实现，还有一个由 "),t("a",h,[e("SwiftMailer"),n(l)]),e(" 提供支持的邮件程序实现等等。")]),t("p",null,[e("所有的 Laravel Contract 都存在于它们各自的 "),t("a",d,[e("GitHub 仓库"),n(l)]),e("。这为所有可用的契约提供了一个快速的参考点，以及一个可以被包开发人员使用的独立的包。")]),p,t("p",null,[e("Laravel 中的许多类都是通过 "),t("a",_,[e("服务容器"),n(l)]),e(" 解析的，包括控制器、事件侦听器、中间件、队列任务，甚至路由闭包。因此，要实现契约，你只需要在被解析的类的构造函数中「类型提示」接口。")]),b,m,g,f,C,v,t("table",null,[k,t("tbody",null,[t("tr",null,[t("td",null,[t("a",x,[e("Illuminate\\Contracts\\Auth\\Access\\Authorizable"),n(l)])]),I]),t("tr",null,[t("td",null,[t("a",y,[e("Illuminate\\Contracts\\Auth\\Access\\Gate"),n(l)])]),F]),t("tr",null,[t("td",null,[t("a",A,[e("Illuminate\\Contracts\\Auth\\Authenticatable"),n(l)])]),R]),t("tr",null,[t("td",null,[t("a",Q,[e("Illuminate\\Contracts\\Auth\\CanResetPassword"),n(l)])]),S]),t("tr",null,[t("td",null,[t("a",B,[e("Illuminate\\Contracts\\Auth\\Factory"),n(l)])]),P]),t("tr",null,[t("td",null,[t("a",V,[e("Illuminate\\Contracts\\Auth\\Guard"),n(l)])]),w]),t("tr",null,[t("td",null,[t("a",M,[e("Illuminate\\Contracts\\Auth\\PasswordBroker"),n(l)])]),L]),t("tr",null,[t("td",null,[t("a",E,[e("Illuminate\\Contracts\\Auth\\PasswordBrokerFactory"),n(l)])]),H]),t("tr",null,[t("td",null,[t("a",D,[e("Illuminate\\Contracts\\Auth\\StatefulGuard"),n(l)])]),N]),t("tr",null,[t("td",null,[t("a",G,[e("Illuminate\\Contracts\\Auth\\SupportsBasicAuth"),n(l)])]),T]),t("tr",null,[t("td",null,[t("a",U,[e("Illuminate\\Contracts\\Auth\\UserProvider"),n(l)])]),J]),t("tr",null,[t("td",null,[t("a",K,[e("Illuminate\\Contracts\\Bus\\Dispatcher"),n(l)])]),W]),t("tr",null,[t("td",null,[t("a",O,[e("Illuminate\\Contracts\\Bus\\QueueingDispatcher"),n(l)])]),q]),t("tr",null,[t("td",null,[t("a",z,[e("Illuminate\\Contracts\\Broadcasting\\Factory"),n(l)])]),$]),t("tr",null,[t("td",null,[t("a",j,[e("Illuminate\\Contracts\\Broadcasting\\Broadcaster"),n(l)])]),X]),t("tr",null,[t("td",null,[t("a",Y,[e("Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast"),n(l)])]),Z]),t("tr",null,[t("td",null,[t("a",tt,[e("Illuminate\\Contracts\\Broadcasting\\ShouldBroadcastNow"),n(l)])]),et]),t("tr",null,[t("td",null,[t("a",lt,[e("Illuminate\\Contracts\\Cache\\Factory"),n(l)])]),nt]),t("tr",null,[t("td",null,[t("a",rt,[e("Illuminate\\Contracts\\Cache\\Lock"),n(l)])]),ot]),t("tr",null,[t("td",null,[t("a",at,[e("Illuminate\\Contracts\\Cache\\LockProvider"),n(l)])]),st]),t("tr",null,[t("td",null,[t("a",ct,[e("Illuminate\\Contracts\\Cache\\Repository"),n(l)])]),it]),t("tr",null,[t("td",null,[t("a",ut,[e("Illuminate\\Contracts\\Cache\\Store"),n(l)])]),ht]),t("tr",null,[t("td",null,[t("a",dt,[e("Illuminate\\Contracts\\Config\\Repository"),n(l)])]),pt]),t("tr",null,[t("td",null,[t("a",_t,[e("Illuminate\\Contracts\\Console\\Application"),n(l)])]),bt]),t("tr",null,[t("td",null,[t("a",mt,[e("Illuminate\\Contracts\\Console\\Kernel"),n(l)])]),gt]),t("tr",null,[t("td",null,[t("a",ft,[e("Illuminate\\Contracts\\Container\\Container"),n(l)])]),Ct]),t("tr",null,[t("td",null,[t("a",vt,[e("Illuminate\\Contracts\\Cookie\\Factory"),n(l)])]),kt]),t("tr",null,[t("td",null,[t("a",xt,[e("Illuminate\\Contracts\\Cookie\\QueueingFactory"),n(l)])]),It]),t("tr",null,[t("td",null,[t("a",yt,[e("Illuminate\\Contracts\\Database\\ModelIdentifier"),n(l)])]),Ft]),t("tr",null,[t("td",null,[t("a",At,[e("Illuminate\\Contracts\\Debug\\ExceptionHandler"),n(l)])]),Rt]),t("tr",null,[t("td",null,[t("a",Qt,[e("Illuminate\\Contracts\\Encryption\\Encrypter"),n(l)])]),St]),t("tr",null,[t("td",null,[t("a",Bt,[e("Illuminate\\Contracts\\Events\\Dispatcher"),n(l)])]),Pt]),t("tr",null,[t("td",null,[t("a",Vt,[e("Illuminate\\Contracts\\Filesystem\\Cloud"),n(l)])]),wt]),t("tr",null,[t("td",null,[t("a",Mt,[e("Illuminate\\Contracts\\Filesystem\\Factory"),n(l)])]),Lt]),t("tr",null,[t("td",null,[t("a",Et,[e("Illuminate\\Contracts\\Filesystem\\Filesystem"),n(l)])]),Ht]),t("tr",null,[t("td",null,[t("a",Dt,[e("Illuminate\\Contracts\\Foundation\\Application"),n(l)])]),Nt]),t("tr",null,[t("td",null,[t("a",Gt,[e("Illuminate\\Contracts\\Hashing\\Hasher"),n(l)])]),Tt]),t("tr",null,[t("td",null,[t("a",Ut,[e("Illuminate\\Contracts\\Http\\Kernel"),n(l)])]),Jt]),t("tr",null,[t("td",null,[t("a",Kt,[e("Illuminate\\Contracts\\Mail\\MailQueue"),n(l)])]),Wt]),t("tr",null,[t("td",null,[t("a",Ot,[e("Illuminate\\Contracts\\Mail\\Mailable"),n(l)])]),qt]),t("tr",null,[t("td",null,[t("a",zt,[e("Illuminate\\Contracts\\Mail\\Mailer"),n(l)])]),$t]),t("tr",null,[t("td",null,[t("a",jt,[e("Illuminate\\Contracts\\Notifications\\Dispatcher"),n(l)])]),Xt]),t("tr",null,[t("td",null,[t("a",Yt,[e("Illuminate\\Contracts\\Notifications\\Factory"),n(l)])]),Zt]),t("tr",null,[t("td",null,[t("a",te,[e("Illuminate\\Contracts\\Pagination\\LengthAwarePaginator"),n(l)])]),ee]),t("tr",null,[t("td",null,[t("a",le,[e("Illuminate\\Contracts\\Pagination\\Paginator"),n(l)])]),ne]),t("tr",null,[t("td",null,[t("a",re,[e("Illuminate\\Contracts\\Pipeline\\Hub"),n(l)])]),oe]),t("tr",null,[t("td",null,[t("a",ae,[e("Illuminate\\Contracts\\Pipeline\\Pipeline"),n(l)])]),se]),t("tr",null,[t("td",null,[t("a",ce,[e("Illuminate\\Contracts\\Queue\\EntityResolver"),n(l)])]),ie]),t("tr",null,[t("td",null,[t("a",ue,[e("Illuminate\\Contracts\\Queue\\Factory"),n(l)])]),he]),t("tr",null,[t("td",null,[t("a",de,[e("Illuminate\\Contracts\\Queue\\Job"),n(l)])]),pe]),t("tr",null,[t("td",null,[t("a",_e,[e("Illuminate\\Contracts\\Queue\\Monitor"),n(l)])]),be]),t("tr",null,[t("td",null,[t("a",me,[e("Illuminate\\Contracts\\Queue\\Queue"),n(l)])]),ge]),t("tr",null,[t("td",null,[t("a",fe,[e("Illuminate\\Contracts\\Queue\\QueueableCollection"),n(l)])]),Ce]),t("tr",null,[t("td",null,[t("a",ve,[e("Illuminate\\Contracts\\Queue\\QueueableEntity"),n(l)])]),ke]),t("tr",null,[t("td",null,[t("a",xe,[e("Illuminate\\Contracts\\Queue\\ShouldQueue"),n(l)])]),Ie]),t("tr",null,[t("td",null,[t("a",ye,[e("Illuminate\\Contracts\\Redis\\Factory"),n(l)])]),Fe]),t("tr",null,[t("td",null,[t("a",Ae,[e("Illuminate\\Contracts\\Routing\\BindingRegistrar"),n(l)])]),Re]),t("tr",null,[t("td",null,[t("a",Qe,[e("Illuminate\\Contracts\\Routing\\Registrar"),n(l)])]),Se]),t("tr",null,[t("td",null,[t("a",Be,[e("Illuminate\\Contracts\\Routing\\ResponseFactory"),n(l)])]),Pe]),t("tr",null,[t("td",null,[t("a",Ve,[e("Illuminate\\Contracts\\Routing\\UrlGenerator"),n(l)])]),we]),t("tr",null,[t("td",null,[t("a",Me,[e("Illuminate\\Contracts\\Routing\\UrlRoutable"),n(l)])]),Le]),t("tr",null,[t("td",null,[t("a",Ee,[e("Illuminate\\Contracts\\Session\\Session"),n(l)])]),He]),t("tr",null,[t("td",null,[t("a",De,[e("Illuminate\\Contracts\\Support\\Arrayable"),n(l)])]),Ne]),t("tr",null,[t("td",null,[t("a",Ge,[e("Illuminate\\Contracts\\Support\\Htmlable"),n(l)])]),Te]),t("tr",null,[t("td",null,[t("a",Ue,[e("Illuminate\\Contracts\\Support\\Jsonable"),n(l)])]),Je]),t("tr",null,[t("td",null,[t("a",Ke,[e("Illuminate\\Contracts\\Support\\MessageBag"),n(l)])]),We]),t("tr",null,[t("td",null,[t("a",Oe,[e("Illuminate\\Contracts\\Support\\MessageProvider"),n(l)])]),qe]),t("tr",null,[t("td",null,[t("a",ze,[e("Illuminate\\Contracts\\Support\\Renderable"),n(l)])]),$e]),t("tr",null,[t("td",null,[t("a",je,[e("Illuminate\\Contracts\\Support\\Responsable"),n(l)])]),Xe]),t("tr",null,[t("td",null,[t("a",Ye,[e("Illuminate\\Contracts\\Translation\\Loader"),n(l)])]),Ze]),t("tr",null,[t("td",null,[t("a",tl,[e("Illuminate\\Contracts\\Translation\\Translator"),n(l)])]),el]),t("tr",null,[t("td",null,[t("a",ll,[e("Illuminate\\Contracts\\Validation\\Factory"),n(l)])]),nl]),t("tr",null,[t("td",null,[t("a",rl,[e("Illuminate\\Contracts\\Validation\\ImplicitRule"),n(l)])]),ol]),t("tr",null,[t("td",null,[t("a",al,[e("Illuminate\\Contracts\\Validation\\Rule"),n(l)])]),sl]),t("tr",null,[t("td",null,[t("a",cl,[e("Illuminate\\Contracts\\Validation\\ValidatesWhenResolved"),n(l)])]),il]),t("tr",null,[t("td",null,[t("a",ul,[e("Illuminate\\Contracts\\Validation\\Validator"),n(l)])]),hl]),t("tr",null,[t("td",null,[t("a",dl,[e("Illuminate\\Contracts\\View\\Engine"),n(l)])]),pl]),t("tr",null,[t("td",null,[t("a",_l,[e("Illuminate\\Contracts\\View\\Factory"),n(l)])]),bl]),t("tr",null,[t("td",null,[t("a",ml,[e("Illuminate\\Contracts\\View\\View"),n(l)])]),gl])])])])}const Il=o(i,[["render",fl],["__file","contracts.html.vue"]]);export{Il as default};
