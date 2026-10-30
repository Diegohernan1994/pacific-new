const GAL=[['gallery/02.png','Detached ADU, aerial',1,1,2,2],['gallery/03.jpg','Bathroom',3,1,1,2],['gallery/01.png','Detached ADU',4,1,1,1],['gallery/04.png','Kitchen',4,2,1,1],['gallery/05.png','Kitchen & living',1,3,1,1],['gallery/07.png','Bedroom',1,4,1,1],['gallery/06.png','Kitchen',2,3,2,2],['gallery/14.png','Bathroom',4,3,1,2],['gallery/08.png','ADU entry',1,5,2,2],['gallery/16.png','Bedroom',3,5,1,1],['gallery/18.png','Kitchen',3,6,1,1],['gallery/20.png','Bathroom',4,5,1,2]];
function Gallery(){
  return <section id="projects" style={{padding:`clamp(88px,10vw,160px) ${PAD}`,background:'#fff'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:32,flexWrap:'wrap',marginBottom:'clamp(40px,5vw,72px)'}}>
      <Reveal><Kicker>ADU gallery</Kicker><H style={{marginTop:28,maxWidth:900}}>ADUs we’ve built</H></Reveal>
      <Reveal delay={120}><Btn dark onClick={()=>go('contact')}>Start your ADU</Btn></Reveal></div>
    <div className="v5-gal" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'clamp(160px,17vw,280px)',gap:12}}>
      {GAL.map(([src,cap,c,r,cs,rs],k)=><Reveal key={k} delay={(k%4)*80} style={{gridColumn:`${c} / span ${cs}`,gridRow:`${r} / span ${rs}`,minWidth:0}}>
        <figure style={{position:'relative',margin:0,width:'100%',height:'100%',overflow:'hidden',background:'var(--pw-stone-100)'}} onMouseEnter={e=>{e.currentTarget.querySelector('img').style.transform='scale(1.06)';e.currentTarget.lastChild.style.opacity=1}} onMouseLeave={e=>{e.currentTarget.querySelector('img').style.transform='none';e.currentTarget.lastChild.style.opacity=0}}>
          <img src={IMG+src} alt={cap} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 1.2s var(--ease-out)'}}/>
          <figcaption style={{position:'absolute',inset:'auto 0 0 0',padding:'40px 18px 16px',background:'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.75))',color:'#fff',fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,opacity:0,transition:'opacity .4s'}}>{cap}<Arrow color="#fff"/></figcaption>
        </figure></Reveal>)}
    </div></section>;
}
const MORE=[['Kitchen Remodeling',STK+'s05.jpg'],['Bathroom Remodeling',STK+'s19.jpg'],['Room Additions',STK+'s16.jpg'],['Garage Remodeling',STK+'s17.jpg'],['Landscaping',STK+'s18.jpg']];
function OtherServices(){
  return <section id="services" style={{padding:`clamp(80px,9vw,140px) ${PAD}`,background:'#fff',borderTop:'1px solid var(--border-hairline)'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap'}}><Reveal><Kicker>Also building</Kicker><H size="clamp(28px,3vw,48px)" style={{marginTop:24}}>Remodels & additions</H></Reveal></div>
    <div className="v5-service-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:16,marginTop:48}}>
      {MORE.map(([n,src],k)=><Reveal key={n} delay={k*70}><a href="#contact" onClick={e=>{e.preventDefault();go('contact')}} style={{display:'block',color:'var(--pw-ink)'}} onMouseEnter={e=>e.currentTarget.querySelector('img').style.transform='scale(1.06)'} onMouseLeave={e=>e.currentTarget.querySelector('img').style.transform='none'}>
        <div style={{aspectRatio:'4/5',overflow:'hidden',background:'var(--pw-stone-100)'}}><img src={src} alt="" style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 1.1s var(--ease-out)'}}/></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:16,fontSize:14,fontWeight:500,textTransform:'uppercase',letterSpacing:'.06em'}}>{n}<Arrow/></div></a></Reveal>)}
    </div></section>;
}

const REVIEWS=[['Pacific West Home Builders made my ADU project so much easier than I expected. There were a few challenges along the way, but they handled everything smoothly and always found the right solutions.','Barbara J.','ADU','yelp'],['They built the foundation for my ADU, and from day one, they made the whole process feel easy and stress-free.','Juan I.','ADU Foundation','google'],['Pacific West Home Builders did an outstanding job on my new construction project. Shai was the guy on-site, and his professionalism and attention to detail were top-notch.','Nancy A.','New Construction','google']];
const SRC={yelp:{n:'Yelp',logo:<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden><path fill="#FF1A1A" d="M10.5 2.3c-.9-.4-4.6.6-5.2 1.4-.2.3-.3.6-.2.9l3.9 6.7c.6 1 2 .6 2-.6V3.1c0-.4-.2-.7-.5-.8zM9.8 14.6l-4 1.2c-.5.2-.8.7-.6 1.2.3 1.2 1.5 3.1 2.6 3.7.4.2.9.1 1.2-.3l2.2-3.5c.6-1-.3-2.2-1.4-2.3zM9.4 12.5c.6-1 0-2-1.1-2.1L4.3 9.2c-.5-.1-1 .2-1.1.7-.3 1.1-.1 3.4.5 4.4.2.4.7.6 1.2.4l4-1.5c.2-.2.4-.4.5-.7zM18.8 15.9l-3.9-1.3c-1.1-.3-2 .9-1.4 1.9l2.1 3.6c.3.4.8.6 1.2.3 1-.6 2.4-2.4 2.6-3.6.1-.4-.2-.8-.6-.9zM19.6 9.6c-.5-1.1-2.2-2.8-3.3-3.2-.4-.2-.9 0-1.2.3l-2.4 3.4c-.6.9.2 2.2 1.3 2l4.1-.9c.5-.1.8-.6.7-1.1-.1-.2-.1-.4-.2-.5z"/></svg>},
google:{n:'Google',logo:<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1C3.3 21.3 7.3 24 12 24z"/><path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.3C.5 8.2 0 10.1 0 12s.5 3.8 1.3 5.4l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z"/></svg>}};
function Reviews(){
  const [i,setI]=React.useState(0);const r=REVIEWS[i];
  React.useEffect(()=>{const t=setTimeout(()=>setI((i+1)%REVIEWS.length),7000);return()=>clearTimeout(t)},[i]);
  return <section id="reviews" style={{position:'relative',padding:`clamp(88px,10vw,160px) ${PAD}`,background:'var(--pw-black)',color:'#fff',overflow:'hidden'}}>
    <div style={{display:'flex',gap:6,marginBottom:36}}>{[0,1,2,3,4].map(s=><Icon key={s} name="star" size={18} color={RED}/>)}</div>
    <div key={i} style={{animation:'v4Rise .9s var(--ease-out) both',maxWidth:1100}}>
      <blockquote style={{margin:0,fontWeight:300,fontSize:'clamp(26px,3vw,48px)',lineHeight:1.3,letterSpacing:'-0.01em',textWrap:'pretty'}}>“{r[0]}”</blockquote>
      <div style={{marginTop:40,display:'flex',gap:16,alignItems:'center',fontSize:13,letterSpacing:'.16em',textTransform:'uppercase'}}><span style={{width:40,height:1,background:RED}}></span><b style={{fontWeight:600}}>{r[1]}</b><span style={{fontWeight:300,color:'rgba(255,255,255,.6)'}}>{r[2]}</span></div></div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:32,flexWrap:'wrap',marginTop:64}}><div style={{display:'flex',gap:8,flex:'1 1 240px',maxWidth:420}}>{REVIEWS.map((_,k)=><span key={k} onClick={()=>setI(k)} style={{cursor:'pointer',height:3,flex:1,background:k===i?RED:'rgba(255,255,255,.2)',transition:'background .4s'}}></span>)}</div><div key={'s'+i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px 20px',background:'#fff',color:'var(--pw-ink)',animation:'v4Rise .9s var(--ease-out) both'}}>{SRC[r[3]].logo}<div style={{lineHeight:1.2}}><div style={{fontSize:15,fontWeight:600}}>{SRC[r[3]].n} review</div><div style={{fontSize:12,fontWeight:300,color:'var(--text-secondary)'}}>5.0 ★ verified</div></div></div></div>
  </section>;
}

const FAQS=[['Can I build an ADU on my property?','Most single-family lots in California qualify. State law allows an ADU and a JADU on most single-family lots. We confirm setbacks, utilities and zoning during a free site visit.'],['Do I need to add parking?','Often not. California waives ADU parking in many cases, including lots within half a mile of public transit and garage conversions.'],['Will my property taxes go up?','Only the new ADU is assessed and added to your existing assessment. Your main home is not reassessed.'],['Can I rent out my ADU?','Yes. ADUs can be rented long-term. Many cities restrict short-term rentals under 30 days.'],['Do you handle permits?','Yes. We manage design, engineering, city plan check and permits, and meet the inspector on site through final.'],['How does $0 down financing work?','We work with lending partners that can fund construction with no money down, so payments start on a schedule you approve. Terms depend on credit and property.']];
function FAQ({items=FAQS,title='ADU questions, answered',bg='var(--pw-stone-50)'}){
  const [o,setO]=React.useState(0);
  return <section id="faq" className="v4-faq" style={{padding:`clamp(88px,10vw,160px) ${PAD}`,background:bg,display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.6fr)',gap:'40px clamp(32px,6vw,120px)'}}>
    <Reveal><Kicker>FAQ</Kicker><H size="clamp(32px,3.6vw,60px)" style={{marginTop:28}}>{title}</H></Reveal>
    <div style={{borderTop:'1px solid var(--pw-ink)'}}>{items.map(([q,a],k)=>{const on=k===o;return <div key={k} style={{borderBottom:'1px solid var(--border-hairline)'}}>
      <button onClick={()=>setO(on?-1:k)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,padding:'26px 0',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-sans)',fontSize:'clamp(17px,1.4vw,21px)',fontWeight:500,color:'var(--pw-ink)'}}>{q}<Icon name="plus" size={20} color={RED} style={{transition:'transform .4s',transform:on?'rotate(45deg)':'none'}}/></button>
      <div style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows .5s var(--ease-out)'}}><div style={{overflow:'hidden'}}><p style={{margin:'0 0 28px',fontSize:15,fontWeight:300,lineHeight:1.75,color:'var(--text-secondary)',maxWidth:680}}>{a}</p></div></div></div>;})}</div>
  </section>;
}

function Contact({kicker='Start your ADU',title='Let’s see what your lot can hold',options,label='ADU type',img}){
  const [sent,setSent]=React.useState(false);
  return <section id="contact" className="v5-contact" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)'}}>
    <div style={{position:'relative',minHeight:'86vh',color:'#fff',overflow:'hidden'}}>
      <image-slot id="v5-contact" shape="rect" src={img||IMG+'contact-kitchen.png'} placeholder="ADU kitchen"></image-slot>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.7))',pointerEvents:'none'}}></div>
      <div style={{position:'absolute',left:PAD,right:PAD,bottom:PAD,pointerEvents:'none'}}><Kicker color="#fff" line={RED}>Free site visit</Kicker><H color="#fff" style={{marginTop:24}} size="clamp(34px,4vw,68px)">{title}</H>
        <a href="tel:8883984499" style={{display:'inline-flex',gap:14,alignItems:'center',marginTop:36,color:'#fff',fontSize:22,fontWeight:300,pointerEvents:'auto'}}><Icon name="phone" size={20} color="#fff"/>(888) 398-4499</a></div>
    </div>
    <div style={{padding:`clamp(56px,7vw,112px) ${PAD}`,background:'#fff'}}>
      <Kicker>{kicker}</Kicker>
      <p style={{margin:'24px 0 40px',fontWeight:300,fontSize:16,lineHeight:1.7,color:'var(--text-secondary)',maxWidth:440}}>Tell us about your property and an ADU specialist will call to schedule your site visit.</p>
      {sent?<div style={{padding:'40px 0'}}><H size="48px">Thank you</H><p style={{fontWeight:300,color:'var(--text-secondary)',marginTop:20}}>A specialist will contact you shortly.</p></div>:
      <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
        <PW.TextField label="Full name" placeholder="Jane Doe" required/><PW.TextField label="Phone" type="tel" placeholder="(000) 000-0000" required/>
        <PW.TextField label="Property address" placeholder="Street, city" style={{gridColumn:'1/-1'}}/>
        <PW.SelectField label={label} options={options||[...TYPES.map(t=>t.n),'Not sure yet']} style={{gridColumn:'1/-1'}}/>
        <PW.TextField label="Project details" multiline rows={3} style={{gridColumn:'1/-1'}}/>
        <div style={{gridColumn:'1/-1',display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap',marginTop:8}}>
          <PW.Checkbox defaultChecked label="I agree to be contacted about my project."/>
          <Btn>Send request <Arrow color="#fff"/></Btn></div>
      </form>}
    </div></section>;
}

function Footer(){
  const col=(t,items)=><div><div style={{fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',marginBottom:22,color:'rgba(255,255,255,.5)'}}>{t}</div>{items.map(([l,id])=><a key={l} href={'#'+id} onClick={e=>{e.preventDefault();go(id)}} style={{display:'block',fontSize:14,fontWeight:300,marginBottom:12,color:'#fff'}}>{l}</a>)}</div>;
  return <footer style={{padding:`clamp(72px,8vw,120px) ${PAD} 32px`,background:'var(--pw-black)',color:'#fff'}}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:48}}>
      <div><PW.Logo tone="light" basePath="./" height={60}/><p style={{fontWeight:300,fontSize:14,lineHeight:1.7,color:'rgba(255,255,255,.7)',marginTop:24,maxWidth:280}}>ADU design, permits and construction across Southern California.</p></div>
      {col('ADUs',TYPES.map(t=>[t.n,'types']))}
      {col('Plan',[['Permit process','process'],['Cost calculator','calculator'],['$0 down financing','calculator'],['FAQ','faq']])}
      {col('More',[['Kitchen Remodeling','services'],['Bathroom Remodeling','services'],['Room Additions','services'],['Reviews','reviews']])}
      <div><div style={{fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',marginBottom:22,color:'rgba(255,255,255,.5)'}}>Visit</div>
        <div style={{fontSize:14,fontWeight:300,lineHeight:1.7}}>16000 Ventura Blvd Ste 900<br/>Encino, CA 91436</div><div style={{fontSize:14,fontWeight:300,lineHeight:1.7,marginTop:14}}>215 N Marengo Ave Ste 2091<br/>Pasadena, CA 91101</div>
        <div style={{display:'flex',gap:16,marginTop:22}}>{['instagram','facebook','map-pin'].map(n=><a key={n} href="#"><Icon name={n} size={18} color="#fff"/></a>)}</div></div>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:16,marginTop:80,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.12)',fontSize:12,fontWeight:300,color:'rgba(255,255,255,.55)'}}>
      <span>Pacific West Home Builders © 2026 · License #1111181</span><span>(888) 398-4499 · info@pwhbuilders.com</span></div>
  </footer>;
}
Object.assign(window,{Gallery,OtherServices,Reviews,FAQ,Contact,Footer,FAQS,REVIEWS,SRC,GAL});
