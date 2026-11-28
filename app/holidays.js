/* Government of Puducherry holidays 2027 — G.O. Ms. No. 109, Home Department, dated 05-11-2026
   (Gazette of Puducherry, Extraordinary No. 192, 06-11-2026). Puducherry region.
   type PH = public holiday (Appendix I, Puducherry & Karaikal regions)
   type RH = restricted holiday (Appendix III, those that apply to Puducherry region; each staff member may take any 2)
   * = subject to change depending on the appearance of the moon. Edit this one file to update every calendar. */
window.IGMCRI_HOLIDAYS = [
  {date:'2027-01-01',type:'PH',name:'New Year'},
  {date:'2027-01-14',type:'RH',name:'Bhogi'},
  {date:'2027-01-15',type:'PH',name:'Pongal'},
  {date:'2027-01-16',type:'PH',name:'Thiruvalluvar Day / Mattu Pongal'},
  {date:'2027-01-26',type:'PH',name:'Republic Day'},
  {date:'2027-03-06',type:'RH',name:'Mahasivarathri / Lailathul Qadr*'},
  {date:'2027-03-10',type:'PH',name:'Ramzan (Id-ul-Fitr)*'},
  {date:'2027-03-19',type:'RH',name:'Feast of St. Joseph'},
  {date:'2027-03-22',type:'RH',name:'Holi'},
  {date:'2027-03-26',type:'PH',name:'Good Friday'},
  {date:'2027-03-29',type:'RH',name:'Easter Monday'},
  {date:'2027-04-07',type:'RH',name:'Telugu New Year Day'},
  {date:'2027-04-14',type:'PH',name:"Tamil New Year / Dr. Ambedkar's Birthday"},
  {date:'2027-04-15',type:'RH',name:'Sri Rama Navami'},
  {date:'2027-05-01',type:'PH',name:'May Day'},
  {date:'2027-05-17',type:'PH',name:'Bakrid (Id-ul-Alha)*'},
  {date:'2027-05-18',type:'RH',name:'Villianur Car Festival'},
  {date:'2027-05-20',type:'RH',name:'Buddha Purnima'},
  {date:'2027-06-15',type:'RH',name:'Muharram*'},
  {date:'2027-08-15',type:'PH',name:'Independence Day / Milad-un-Nabi*'},
  {date:'2027-08-16',type:'PH',name:'De Jure Transfer Day'},
  {date:'2027-08-20',type:'RH',name:'Veerampattinam Car Festival'},
  {date:'2027-08-25',type:'RH',name:'Janmashtami'},
  {date:'2027-09-04',type:'PH',name:'Vinayagar Chathurthi'},
  {date:'2027-09-11',type:'RH',name:'Onam 1st Day'},
  {date:'2027-10-02',type:'PH',name:'Gandhi Jayanthi'},
  {date:'2027-10-08',type:'PH',name:'Saraswathi Pooja / Ayudha Pooja'},
  {date:'2027-10-27',type:'RH',name:'Deepavali Eve'},
  {date:'2027-10-28',type:'PH',name:'Deepavali'},
  {date:'2027-10-29',type:'RH',name:'Deepavali (2nd day)'},
  {date:'2027-11-01',type:'PH',name:'Puducherry Liberation Day'},
  {date:'2027-11-02',type:'RH',name:'All Souls Day'},
  {date:'2027-12-08',type:'RH',name:'Immaculate Conception'},
  {date:'2027-12-24',type:'RH',name:'Christmas Eve'},
  {date:'2027-12-25',type:'PH',name:'Christmas'}
];

/* Faculty winter vacation 2026 — Circular No. 148/IGMC&RI/Estt.II/Vacation/2026/3697 dated 13-11-2026.
   kind v1 = first half, cw = common working day (all faculty on duty), v2 = second half.
   Who goes in which half is set in the app (Admin → Winter vacation). */
window.IGMCRI_VACATION = {
  title: 'Winter vacation 2026 (faculty)',
  ref: 'No. 148/IGMC&RI/Estt.II/Vacation/2026/3697, dated 13-11-2026',
  periods: [
    {from:'2026-12-13', to:'2026-12-21', kind:'v1', name:'Winter vacation – I half'},
    {from:'2026-12-22', to:'2026-12-22', kind:'cw', name:'Common working day – all faculty'},
    {from:'2026-12-23', to:'2026-12-31', kind:'v2', name:'Winter vacation – II half'}
  ]
};
window.IGMCRI_VAC_ON = function(ds){
  var P = (window.IGMCRI_VACATION || {}).periods || [];
  for (var i = 0; i < P.length; i++) if (ds >= P[i].from && ds <= P[i].to) return P[i];
  return null;
};
