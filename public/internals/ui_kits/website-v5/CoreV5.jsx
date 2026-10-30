const PW=window.PacificWestDesignSystem_179d0a;
const IMG='assets/imagery/';
const STK=IMG+'stock/';
const RED='var(--pw-red)';
const PAD='clamp(20px,4vw,72px)';
const scrollSubs=new Set();let rafOn=false;
function tick(){rafOn=false;scrollSubs.forEach(f=>f());}
function onScroll(){if(!rafOn){rafOn=true;requestAnimationFrame(tick);}}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);
function useFrame(fn){React.useEffect(()=>{scrollSubs.add(fn);fn();return()=>scrollSubs.delete(fn)},[]);}
function Icon({name,size=22,color='currentColor',style}){const u='https://unpkg.com/lucide-static@0.460.0/icons/'+name+'.svg';
  return <span aria-hidden style={{display:'inline-block',width:size,height:size,background:color,WebkitMask:'url('+u+') center/contain no-repeat',mask:'url('+u+') center/contain no-repeat',flex:'none',...style}}></span>;}
function Arrow({size=16,color=RED,style}){return <Icon name="arrow-up-right" size={size} color={color} style={style}/>;}
function Reveal({children,delay=0,y=36,style}){
  const r=React.useRef();const [v,setV]=React.useState(false);
  React.useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);io.disconnect();}},{threshold:.12});io.observe(r.current);return()=>io.disconnect()},[]);
  return <div ref={r} style={{opacity:v?1:0,transform:v?'none':`translateY(${y}px)`,transition:`opacity .9s var(--ease-out) ${delay}ms,transform 1s var(--ease-out) ${delay}ms`,...style}}>{children}</div>;
}
function Kicker({n,children,color=RED,line=RED,style}){return <div style={{display:'flex',alignItems:'center',gap:16,fontSize:12,fontWeight:600,letterSpacing:'.24em',textTransform:'uppercase',color,...style}}>{n&&<span style={{fontSize:22,fontWeight:500,letterSpacing:0}}>{n}</span>}<span style={{width:56,height:1,background:line}}></span>{children}</div>;}
function H({children,size='clamp(36px,4.6vw,76px)',color='var(--pw-ink)',style}){return <h2 style={{margin:0,fontFamily:'var(--font-sans)',fontWeight:600,fontSize:size,lineHeight:.98,letterSpacing:'-0.015em',textTransform:'uppercase',color,textWrap:'balance',...style}}>{children}</h2>;}
function Btn({children,dark,ghost,onClick,href,style}){
  const s={display:'inline-flex',alignItems:'center',gap:12,fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'.18em',textTransform:'uppercase',padding:'17px 26px',border:'1px solid '+(ghost?'currentColor':'transparent'),background:ghost?'transparent':dark?'var(--pw-black)':RED,color:ghost?'inherit':'#fff',cursor:'pointer',whiteSpace:'nowrap',transition:'background .3s',...style};
  return href?<a href={href} style={s}>{children}</a>:<button onClick={onClick} style={s}>{children}</button>;
}
function go(id){const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+scrollY-84,behavior:'smooth'});}
Object.assign(window,{PW,IMG,STK,RED,PAD,useFrame,Icon,Arrow,Reveal,Kicker,H,Btn,go});
