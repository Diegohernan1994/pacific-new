const ADU_SLUGS=['detached','attached','garage-conversion','jadu','second-story'];
const REMS=[
  {s:'kitchen',n:'Kitchen Remodeling',img:STK+'s14.jpg'},
  {s:'bathroom',n:'Bathroom Remodeling',img:STK+'s19.jpg'},
  {s:'additions',n:'Room Additions',img:STK+'s15.jpg'},
  {s:'garage',n:'Garage Remodeling',img:IMG+'types/garage-conversion.jpg'},
  {s:'outdoor',n:'Outdoor & Landscaping',img:STK+'s18.jpg'},
  {s:'whole-home',n:'Whole-home Remodel',img:STK+'s10.jpg'}
];
const SPA=false;
const U={home:'/',adus:'/adus/',adu:s=>'/adu/?type='+s,remodel:'/remodeling/',rem:s=>'/remodel/?s='+s,fin:'/financing/',about:'/about/',contact:'/contact/',projects:'/projects/'};
const qp=k=>new URLSearchParams(location.search).get(k);
function HomePage(){return <div><SiteHeader/><BuildHero/><Types/><Process/><Gallery/><Calculator/><OtherServices/><Reviews/><FAQ/><Contact/><SiteFooter/><AskUs/></div>;}
function SiteRouter(){
  const get=()=>location.pathname.split('/').filter(Boolean)[0]||'home';const [r,setR]=React.useState(get);
  React.useEffect(()=>{const f=()=>{setR(get());scrollTo(0,0);};addEventListener('popstate',f);return()=>removeEventListener('popstate',f)},[]);
  const M={home:HomePage,adus:window.AdusPage,adu:window.AduDetailPage,remodeling:window.RemodelPage,remodel:window.RemodelDetailPage,financing:window.FinancingPage,about:window.AboutPage,contact:window.ContactPage,projects:window.ProjectsPage};
  const C=M[r]||HomePage;return <C key={r}/>;
}

function SiteHeader({active}){
  const [m,setM]=React.useState(null);const [mob,setMob]=React.useState(false);
  const settings=window.PW_CMS?.settings||{};const phone=settings.phone||'(888) 398-4499';const phoneLink=settings.phoneLink||'tel:8883984499';
  const nav=[['ADUs',U.adus,'adus',[['All ADU types',U.adus],...TYPES.map((t,k)=>[t.n,U.adu(ADU_SLUGS[k])])]],['Remodeling',U.remodel,'remodel',[['All remodeling',U.remodel],...REMS.map(r=>[r.n,U.rem(r.s)])]],['Financing',U.fin,'fin'],['Projects',U.projects,'projects'],['About',U.about,'about'],['Contact',U.contact,'contact']];
  const lk=on=>({color:on?'#fff':'rgba(255,255,255,.78)',fontSize:14,fontWeight:on?500:400,display:'flex',alignItems:'center',gap:6,padding:'8px 0',borderBottom:'1px solid '+(on?RED:'transparent')});
  return <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,background:'var(--pw-black)',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
    <div style={{height:84,padding:`0 ${PAD}`,display:'flex',alignItems:'center',gap:32}}>
      <a href={U.home}><PW.Logo tone="light" basePath="./" height={46}/></a>
      <nav className="v4-nav" style={{display:'flex',gap:34,margin:'0 auto',alignItems:'center'}}>
        {nav.map(([l,h,id,sub])=><div key={l} style={{position:'relative'}} onMouseEnter={()=>setM(sub?id:null)} onMouseLeave={()=>setM(null)}>
          <a href={h} style={lk(active===id)}>{l}{sub&&<Icon name="chevron-down" size={14}/>}</a>
          {sub&&<div style={{position:'absolute',top:'100%',left:-22,paddingTop:18,opacity:m===id?1:0,pointerEvents:m===id?'auto':'none',transform:m===id?'none':'translateY(-6px)',transition:'opacity .25s,transform .25s'}}>
            <div style={{background:'var(--pw-black)',border:'1px solid rgba(255,255,255,.1)',padding:'10px 0',minWidth:250}}>
              {sub.map(([sl,sh],k)=><a key={sl} href={sh} style={{display:'block',padding:'11px 22px',color:k===0?'#ff8a8a':'#fff',fontSize:14,fontWeight:k===0?500:300,borderBottom:k===0?'1px solid rgba(255,255,255,.08)':'none'}} onMouseEnter={e=>e.currentTarget.style.color='#ff8a8a'} onMouseLeave={e=>e.currentTarget.style.color=k===0?'#ff8a8a':'#fff'}>{sl}</a>)}
            </div></div>}
        </div>)}
      </nav>
      <a className="v4-phone" href={phoneLink} style={{color:'#fff',display:'flex',alignItems:'center',gap:10,fontSize:14,fontWeight:500,whiteSpace:'nowrap',marginLeft:'auto'}}><Icon name="phone" size={16} color={RED}/>{phone}</a>
      <Btn href={U.contact} style={{padding:'15px 22px'}}>Free site visit</Btn>
      <button className="v5-burger" onClick={()=>setMob(!mob)} aria-label="Menu" style={{display:'none',background:'none',border:'1px solid rgba(255,255,255,.25)',width:48,height:48,placeItems:'center',cursor:'pointer'}}><Icon name={mob?'x':'menu'} size={20} color="#fff"/></button>
    </div>
    {mob&&<div style={{position:'fixed',inset:'84px 0 0 0',background:'var(--pw-black)',overflowY:'auto',padding:`24px ${PAD} 48px`}}>
      {nav.map(([l,h,id,sub])=><div key={l} style={{borderBottom:'1px solid rgba(255,255,255,.1)',padding:'18px 0'}}>
        <a href={h} style={{display:'block',color:'#fff',fontSize:20,fontWeight:600,textTransform:'uppercase'}}>{l}</a>
        {sub&&<div style={{display:'grid',gap:10,marginTop:14}}>{sub.slice(1).map(([sl,sh])=><a key={sl} href={sh} style={{color:'rgba(255,255,255,.7)',fontSize:16,fontWeight:300}}>{sl}</a>)}</div>}</div>)}
      <a href={phoneLink} style={{display:'flex',gap:12,alignItems:'center',color:'#fff',fontSize:20,marginTop:32}}><Icon name="phone" size={18} color={RED}/>{phone}</a>
    </div>}
  </header>;
}

function Crumbs({items}){return <div style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap',fontSize:12,letterSpacing:'.16em',textTransform:'uppercase',color:'rgba(255,255,255,.7)'}}>
  {[['Home',U.home],...items].map(([l,h],k,a)=><React.Fragment key={l}>{h&&k<a.length-1?<a href={h} style={{color:'rgba(255,255,255,.7)'}}>{l}</a>:<span style={{color:'#fff'}}>{l}</span>}{k<a.length-1&&<span style={{color:RED}}>/</span>}</React.Fragment>)}</div>;}

function PageHero({crumbs,kicker,title,lead,img,slot,ctas,h='86vh',children}){
  const cmsPage=window.PW_CMS?.pages?.[location.pathname];
  kicker=cmsPage?.eyebrow||kicker;title=cmsPage?.heading||title;lead=cmsPage?.intro||lead;img=cmsPage?.heroImageUrl||img;
  React.useEffect(()=>{
    if(!cmsPage)return;
    const pageTitle=cmsPage.metaTitle||title+' | Pacific West Home Builders';
    const pageDescription=cmsPage.metaDescription||lead;
    const pageUrl=window.location.origin+window.location.pathname;
    const setMeta=(attribute,key,value)=>{
      if(!value)return;
      let element=document.head.querySelector('meta['+attribute+'="'+key+'"]');
      if(!element){element=document.createElement('meta');element.setAttribute(attribute,key);document.head.appendChild(element);}
      element.setAttribute('content',value);
    };
    document.title=pageTitle;
    setMeta('name','description',pageDescription);
    if(cmsPage.noIndex)setMeta('name','robots','noindex, nofollow');
    else { const robots=document.head.querySelector('meta[name="robots"]'); if(robots)robots.remove(); }
    setMeta('property','og:title',pageTitle);
    setMeta('property','og:description',pageDescription);
    setMeta('property','og:url',pageUrl);
    let canonical=document.head.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href=pageUrl;
  },[cmsPage,title,lead]);
  return <section style={{position:'relative',minHeight:h,paddingTop:84,display:'flex',alignItems:'flex-end',color:'#fff',background:'var(--pw-black)',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:'84px 0 0 0',animation:'v5Zoom 2.6s var(--ease-out) both'}}><image-slot id={slot} shape="rect" fit="cover" src={img} placeholder={kicker+' hero photo'}></image-slot></div>
    <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,.78) 100%),linear-gradient(90deg,rgba(0,0,0,.5),rgba(0,0,0,0) 65%)'}}></div>
    <div style={{position:'relative',zIndex:2,padding:`clamp(40px,8vh,96px) ${PAD} clamp(56px,9vh,112px)`,maxWidth:1100,pointerEvents:'none'}}>
      <div style={{marginBottom:'clamp(32px,6vh,72px)',pointerEvents:'auto'}}><Crumbs items={crumbs}/></div>
      <div style={{animation:'v4Rise .8s var(--ease-out) both'}}><Kicker color="#ff6b6b" line="#ff6b6b">{kicker}</Kicker></div>
      <h1 style={{margin:'24px 0 0',fontWeight:600,fontSize:'clamp(40px,5.6vw,96px)',lineHeight:.94,letterSpacing:'-0.02em',textTransform:'uppercase',textWrap:'balance',animation:'v4Rise .9s var(--ease-out) 80ms both'}}>{title}</h1>
      {lead&&<p style={{margin:'26px 0 0',maxWidth:640,fontSize:'clamp(16px,1.25vw,20px)',fontWeight:300,lineHeight:1.6,color:'rgba(255,255,255,.88)',textWrap:'pretty',animation:'v4Rise .9s var(--ease-out) 160ms both'}}>{lead}</p>}
      {ctas&&<div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:34,pointerEvents:'auto',animation:'v4Rise .9s var(--ease-out) 240ms both'}}>{ctas}</div>}
      {children}
    </div></section>;
}

function SecHead({kicker,title,aside,color,dark,size,style}){
  return <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:32,flexWrap:'wrap',marginBottom:'clamp(40px,5vw,80px)',...style}}>
    <Reveal><Kicker color={dark?'#ff6b6b':RED} line={dark?'#ff6b6b':RED}>{kicker}</Kicker><H size={size} color={dark?'#fff':undefined} style={{marginTop:28,maxWidth:920}}>{title}</H></Reveal>
    {aside&&<Reveal delay={120} style={{maxWidth:420}}>{typeof aside==='string'?<p style={{margin:0,fontSize:16,fontWeight:300,lineHeight:1.7,color:dark?'rgba(255,255,255,.75)':'var(--text-secondary)'}}>{aside}</p>:aside}</Reveal>}
  </div>;
}
const SEC={padding:`clamp(88px,10vw,160px) ${PAD}`};
const P={margin:0,fontSize:16,fontWeight:300,lineHeight:1.75,color:'var(--text-secondary)',textWrap:'pretty'};
const LAB={fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--text-muted)'};

function ImgCard({href,src,title,sub,ratio='4/5',n}){
  return <a href={href} style={{display:'block',color:'var(--pw-ink)'}} onMouseEnter={e=>e.currentTarget.querySelector('img').style.transform='scale(1.06)'} onMouseLeave={e=>e.currentTarget.querySelector('img').style.transform='none'}>
    <div style={{position:'relative',aspectRatio:ratio,overflow:'hidden',background:'var(--pw-stone-100)'}}><img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 1.1s var(--ease-out)'}}/>{n&&<span style={{position:'absolute',top:0,left:0,background:'var(--pw-black)',color:'#fff',padding:'9px 14px',fontSize:11,fontWeight:600,letterSpacing:'.2em'}}>{n}</span>}</div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16,marginTop:18}}><div><div style={{fontSize:17,fontWeight:600,textTransform:'uppercase',letterSpacing:'.02em'}}>{title}</div>{sub&&<div style={{fontSize:14,fontWeight:300,color:'var(--text-secondary)',marginTop:6,lineHeight:1.5}}>{sub}</div>}</div><Arrow size={20}/></div></a>;
}

function SiteCTA({kicker='Free site visit',title='Let’s see what your lot can hold',lead,img=IMG+'build/08-completed.jpg',slot='v5-cta'}){
  return <section style={{position:'relative',minHeight:'70vh',display:'flex',alignItems:'center',color:'#fff',overflow:'hidden',background:'var(--pw-black)'}}>
    <div style={{position:'absolute',inset:0}}><image-slot id={slot} shape="rect" fit="cover" src={img} placeholder="CTA photo"></image-slot></div>
    <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.55)',pointerEvents:'none'}}></div>
    <Reveal style={{position:'relative',padding:`clamp(72px,9vw,140px) ${PAD}`,maxWidth:1000}}>
      <Kicker color="#fff" line={RED}>{kicker}</Kicker><H color="#fff" style={{marginTop:28}}>{title}</H>
      {lead&&<p style={{...P,color:'rgba(255,255,255,.85)',marginTop:24,maxWidth:560}}>{lead}</p>}
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:40}}><Btn href={U.contact}>Book a free site visit <Arrow color="#fff"/></Btn><Btn ghost href="tel:8883984499" style={{color:'#fff'}}>(888) 398-4499</Btn></div>
    </Reveal></section>;
}

function SiteFooter(){
  const settings=window.PW_CMS?.settings||{};const offices=settings.offices?.length?settings.offices:[{name:'Encino',address:'16000 Ventura Blvd Ste 900',city:'Encino, CA 91436'},{name:'Pasadena',address:'215 N Marengo Ave Ste 2091',city:'Pasadena, CA 91101'}];
  const socials=settings.socialLinks?.length?settings.socialLinks:[{label:'Instagram',url:'https://instagram.com'},{label:'Facebook',url:'https://facebook.com'}];
  const phone=settings.phone||'(888) 398-4499';const email=settings.email||'info@pwhbuilders.com';const license=settings.license||'1111181';
  const col=(t,items)=><div><div style={{fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',marginBottom:22,color:'rgba(255,255,255,.5)'}}>{t}</div>{items.map(([l,h])=><a key={l} href={h} style={{display:'block',fontSize:14,fontWeight:300,marginBottom:12,color:'#fff'}}>{l}</a>)}</div>;
  return <footer style={{padding:`clamp(72px,8vw,120px) ${PAD} 32px`,background:'var(--pw-black)',color:'#fff'}}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:48}}>
      <div><PW.Logo tone="light" basePath="./" height={60}/><p style={{fontWeight:300,fontSize:14,lineHeight:1.7,color:'rgba(255,255,255,.7)',marginTop:24,maxWidth:280}}>{settings.footerDescription||'ADU design, permits and construction across Southern California.'}</p></div>
      {col('ADUs',[['All ADU types',U.adus],...TYPES.map((t,k)=>[t.n,U.adu(ADU_SLUGS[k])])])}
      {col('Remodeling',[['All remodeling',U.remodel],...REMS.map(r=>[r.n,U.rem(r.s)])])}
      {col('Company',[['Financing',U.fin],['Projects',U.projects],['About',U.about],['Contact',U.contact]])}
      <div><div style={{fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',marginBottom:22,color:'rgba(255,255,255,.5)'}}>Visit</div>
        {offices.map((office)=><div key={office.name} style={{fontSize:14,fontWeight:300,lineHeight:1.7,marginTop:office.name===offices[0].name?0:14}}>{office.address}<br/>{office.city}</div>)}
        <div style={{display:'flex',gap:16,marginTop:22}}>{socials.map((item)=><a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}><Icon name={item.label.toLowerCase().includes('facebook')?'facebook':'instagram'} size={18} color="#fff"/></a>)}</div></div>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:16,marginTop:80,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.12)',fontSize:12,fontWeight:300,color:'rgba(255,255,255,.55)'}}>
      <span>{settings.companyName||'Pacific West Home Builders'} © {new Date().getFullYear()} · License #{license}</span><span>{phone} · {email}</span></div>
  </footer>;
}
function FloatCTA(){return <a href={U.contact} style={{position:'fixed',right:20,bottom:20,zIndex:60,display:'flex',alignItems:'center',gap:10,padding:'15px 20px',background:RED,color:'#fff',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',boxShadow:'0 10px 30px rgba(0,0,0,.25)'}}><Icon name="message-circle" size={17} color="#fff"/>Ask us</a>;}
Object.assign(window,{ADU_SLUGS,REMS,U,qp,HomePage,SiteRouter,SiteHeader,Crumbs,PageHero,SecHead,SEC,P,LAB,ImgCard,SiteCTA,SiteFooter,FloatCTA});
