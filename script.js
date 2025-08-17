
// mobile menu toggle
document.getElementById('menuBtn')?.addEventListener('click',()=>{
  const n = document.getElementById('links');
  if(!n) return; n.style.display = n.style.display==='block'?'':'block';
});
// year
document.getElementById('year')?.textContent = new Date().getFullYear();

// donut chart (no external libs)
(function draw(){
  const cv = document.getElementById('donut'); if(!cv) return;
  const ctx = cv.getContext('2d');
  const data = [
    {label:'Liquidity', val:40},
    {label:'Marketing', val:30},
    {label:'Development', val:20},
    {label:'Reserve', val:10},
  ];
  const colors = ['#3d5ec4','#2b4aa6','#6e8ef5','#d4af37'];
  const total = data.reduce((a,b)=>a+b.val,0);
  let start = -Math.PI/2;
  const cx = cv.width/2, cy = cv.height/2, r = Math.min(cx,cy)-6;
  data.forEach((d,i)=>{
    const slice = d.val/total*2*Math.PI;
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.fillStyle = colors[i%colors.length];
    ctx.arc(cx,cy,r,start,start+slice); ctx.fill();
    start += slice;
  });
  ctx.beginPath(); ctx.fillStyle = '#f3f6ff'; ctx.arc(cx,cy,r*0.6,0,Math.PI*2); ctx.fill();
})();
